document.getElementById('submitBtn').addEventListener('click', async () => {
    const delay = document.getElementById('delay').value
    const userId = document.getElementById('userId').value

    const userIdDisplay = document.getElementById('userIdDisplay')
    const emailDisplay = document.getElementById('emailDisplay')
    const nameDisplay = document.getElementById('nameDisplay')
    const statusDisplay = document.getElementById('statusDisplay')

    // Limpiar campos de resultado
    userIdDisplay.textContent = ''
    emailDisplay.textContent = ''
    nameDisplay.textContent = ''
    statusDisplay.textContent = ''

    try {
        // 1) Obtener usuario de la primera API con retraso
        const response = await fetch(`https://reqres.in/api/users/${userId}?delay=${delay}`)
        statusDisplay.textContent = response.status

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`)
        }

        const data = await response.json()
        const user = data.data

        // Rellenar ID y EMAIL
        userIdDisplay.textContent = user.id
        emailDisplay.textContent = user.email

        // 2) Enviar usuario a la segunda API mediante POST
        const postResponse = await fetch('https://httpbin.org/post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })

        if (!postResponse.ok) {
            throw new Error(`Error en POST: ${postResponse.status}`)
        }

        const postData = await postResponse.json()

        // Rellenar NAME
        nameDisplay.textContent = postData.json.first_name

    } catch (error) {
        console.error('Se produjo un error:', error)
        statusDisplay.textContent = error.message
    }
});
