
let mensaje = "hola";
let contador = 0;
setInterval(() => {
 contador++;
  console.log(contador);  
  
  if (contador>9){
      clearInterval(interval);

  }
},200);

