function generarCombinacion() {
    const combinacion = new Set();
    while (combinacion.size < 6) {
      const numero = Math.floor(Math.random() * 49) + 1; // Genera un número del 1 al 49
      combinacion.add(numero); // Añade el número al set (evita duplicados automáticamente)
    }
    return Array.from(combinacion); // Convierte el set a un array
  }
  
  function mostrarCombinaciones() {
    for (let i = 1; i <= 50; i++) {
      const combinacion = generarCombinacion();
      console.log("Combinación " + i + ":", combinacion); // Usamos concatenación en lugar de ${}
    }
  }
  
  mostrarCombinaciones();
  