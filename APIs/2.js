document.addEventListener("DOMContentLoaded", () => {
    const video = document.querySelector("video")
    const mostrar = document.getElementById("tiempo")

    const ClickIzq = () => video.paused ? video.play() : video.pause()


    const ClickDer = () => {

        const duration = video.duration
        const minutes = Math.floor(duration / 60)
        const seconds = Math.floor(duration % 60)

        mostrar.textContent = ` ${minutes}:${seconds}`
    }

    document.addEventListener("mousedown", (event) => {
        if (event.button === 0) {
            ClickIzq()
        } else if (event.button === 2) {
            ClickDer()
        }
    })
})
