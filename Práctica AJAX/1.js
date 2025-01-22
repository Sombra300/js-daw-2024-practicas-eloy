document.getElementById('fetchBtn').addEventListener('click', async () => {
  
    try {
        const response = await fetch('https://fakerapi.it/api/v2/persons?_quantity=1')
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`)
        }

        const data = await response.json()
        const user = data.data[0]
        console.log(user)
        const userInfo = `<div>${user.firstname} ${user.lastname}<br>${user.email}</br>${user.address.street}</br>${user.address.country}</div>`
        document.getElementById('userInfo').innerHTML = userInfo
    } catch (error) {
        console.error('Se produjo un error:', error)
    }
});

