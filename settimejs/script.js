function miFuncion(){
    console.log ('Hola desde el TimeOut');
}
setTimeout(miFuncion,1000);

const arrowFunction = () =>{
    console.log('Hola desde el arrow function');
}

let seg = 8;
const nombreDeReferencia = setTimeout (miFuncion, seg * 1000);

setTimeout(arrowFunction,3000);

setTimeout(() =>{
    console.log('Nuevo mensaje');
},2000)

console.log("Hola mundo desde node")

function hola() {
    console.log('Hola mundo con una funcion desde node')
}
hola();

function hellow () {
    console.log('jeloow world desde nodemon')
}

hellow();


console.log("Aprendiendo node")



