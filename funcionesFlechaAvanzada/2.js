let palabras = [];

function pedir() {
    let auxiliar;
    do {
        auxiliar = window.prompt("Introduce una palabra:");
        if (auxiliar === '' || auxiliar === null) {
            break; // Salir del bucle si el usuario deja el cuadro vacío o cancela
        } else {
            palabras.push(auxiliar); // Agregar la palabra al array
        }
    } while (true);

    // Crear el mapa de palabras
    let mapaPalabras = new Map();
    palabras.forEach(palabra => {
        if (mapaPalabras.has(palabra)) {
            mapaPalabras.set(palabra, mapaPalabras.get(palabra) + 1);
        } else {
            mapaPalabras.set(palabra, 1);
        }
    });

    // Mostrar las palabras y sus conteos sin importar el orden
    mapaPalabras.forEach((valor, clave) => {
        document.write(`${clave}: ${valor}<br>`);
    });
}

pedir();