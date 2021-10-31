
//Call back recibe como parametro otra funcion



function leyendo() {
    setTimeout(() => {
        console.log('Hola')
    }, 5000)

}

function leer(functionParam){
    functionParam()

}

leer(leyendo)