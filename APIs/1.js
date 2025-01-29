const mostrar = document.getElementById("tiempo")
let i = 5

function cuentaRegresiva() {
    if (i > 0) {
        mostrar.textContent = i
        i--
        setTimeout(cuentaRegresiva, 1000) 
    } else {
        let respuesta = window.confirm("Hay un nuevo video disponible, ¿desea verlo?");
        if (respuesta) {
            window.location.href = "2.html"; 
        }
    }
}

cuentaRegresiva()
