//Crear una funcion que reciba como parametro un array y que imprima cada uno de sus elementos cada segundo
function timer(array) {
    let contador = 0;

    const Intervalo = setInterval(() =>{
        console.log(array[contador]);
        let timer2 = array.length;
        contador++;
        if (contador >= timer2){
            clearInterval(Intervalo);
        }

    },1000);
    
}
timer([1,2,3,4,5]);