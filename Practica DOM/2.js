function ordenarLista() {
    const lista = document.getElementById('lista-palabras');
    const palabras = Array.from(lista.getElementsByTagName('li')).map(li => li.textContent);
    palabras.sort();

    // Limpiar la lista y mostrarla ordenada
    lista.innerHTML = '';
    palabras.forEach(palabra => {
        const li = document.createElement('li');
        li.textContent = palabra;
        lista.appendChild(li);
    });
}

// Preguntar después de 3 segundos
setTimeout(() => {
    if (confirm('¿Quieres ordenar la lista alfabéticamente?')) {
        ordenarLista();
    }
}, 3000);