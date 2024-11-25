let palabras=[]
function pedir(){
   let auxiliar =new Set()
   do {
      auxiliar = window.prompt("Introduce una palabra:");
      if (auxiliar === '' || auxiliar === null) {
         break; 
      } else {
         palabras.push(auxiliar); 
      }
   } while (true);
   let palabrasBien =[...new Set(palabras)]
   palabrasBien.sort((a,b)=>b.localeCompare(a))
   
   palabrasBien.forEach(palabrabrita=>{
      document.write(palabrabrita+'<br>')
   })
}
pedir()