function contarFrecuencia() {
    const frecuencias = Array(10).fill(0); // Inicializamos un array con 10 posiciones en 0
  
    // Generar 10,000 números aleatorios del 1 al 10
    for (let i = 0; i < 10000; i++) {
      const numero = Math.floor(Math.random() * 10) + 1; // Genera un número entre 1 y 10
      frecuencias[numero - 1]++; // Incrementa el contador en el índice correspondiente
    }
  
    // Mostrar resultados
    console.log("Frecuencias");
    for (let j = 0; j < frecuencias.length; j++) {
      console.log("Número " + (j + 1) + ": " + frecuencias[j]); // Usamos concatenación en lugar de ${}
    }
  }
  
  contarFrecuencia();
  