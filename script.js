



console.log("Hola mundo");   //console.log es para imprimir los valores de las variables, string o cualquier otr funcion

var nombre;
 console.log(nombre); // Var Es un valor que cambia

 //String

 nombre = 'Mike';
 console.log(nombre);
 
 nombre = 'Joy';
 console.log(nombre);

 nombre = 'Maika';
 console.log (nombre);

 nombre = "otro nombre";
 console.log(nombre);

 console.log(-(10 -2))

 let elNumero = Number(prompt("Elige un numero")); //tengo que investigar las diferencias entre var y let
 console.log("Tu numero es la raiz cuadrada de " + elNumero * elNumero);


 const id = 1647; // Es una variable con un valor que no se puede cambiar
 console.log(id);


  var nombre = 'miguel'
  var edad = 35;
  const fechaDeNacimiento = " nacio el 11 de diciembre de 1989";
  const LugarDeNacimiento = "Edo. de Mexico"
  console.log(nombre,fechaDeNacimiento,LugarDeNacimiento);

  //Number

  var num=15;
  var num2=10.5;

  console.log(num,num2);

  console.log(100/0);
  console.log("hola" *5); //el resultado de esta funcion es NaN (not a number)

  //Boolean 

  var condicion = false;  //variable undefined
  var condicion2 = true;

  console.log(condicion, condicion2);

  var variableNull = null; //variable null
 console.log(variableNull);

 //Coercion /Conversion de datos
 //Declaro un tipo de dato numerico

 var num = 5;
 console.log(num);

 console.log(String (num));
 console.log(typeof String (num));
 console.log((num+''));
 console.log(typeof(num+''));

 var nombre = 'Mike';
 console.log(nombre);

 var apellido = 'Montemayor';
 

 var profesion = 'Desarrollador web Full Stack';
 console.log (nombre + '' + apellido + '' + profesion);

 //Declaro un tipo de dato String

 var numero = "150";
 console.log(numero);

 console.log (+numero);
 console.log (typeof(+numero));  //Explicacion implicita


 console.log (Number(numero));       //Explicacion expl icita 
 console.log (typeof(Number(numero)));

 //Declaro un tipo de dato Numerico

 var condicion2 = 1;

 //Declaro un tipo de datos string
 var condicion 

 var numero = "150";
 console.log(numero);


 console.log (+numero);
 console.log (typeof(+numero));  //Explicacion implicita


 console.log (Number(numero));       //Explicacion expl icita 
 console.log (typeof(Number(numero)));



 var numero = "150";
 console.log(numero);

 console.log(+numero);
 console.log(typeof(+numero));

 console.log(Number (+numero));

 //ejemplos de uso de var

 var variable = 5;
 {
     console.log('inside', variable);
     var variable = 10 ;
 }


 console.log('outside', variable);
 variable = variable * 2;
 console.log('changed', variable);


 //Ejemplos de uso de let

 let variables = 5; {
     console.log('inside', variable);
     let variables  = 10 ;
 }

console.log ('outside', variable);
variable = variable * 2;
console.log ('changed', variable );

//Ejemplo de uso de const

const variabless = 5;
variable = variable * 2;
console.log('changed',variable);

/*
//Nombres pronunciables y expresivos
1
2
//bad
const yyyymmdstr = moment().format('YYYY/MM/DD');
3
4
5
//better
const currentDate = moment().format('YYYY/MM/DD');

   
//Evitar que los nombres contengan información técnica
1
2
//bad
class AbstractUser('1'){...}
3
4
5
//better
class User(){...} 


//Léxico coherente
1
2
3
4
//bad
getUserInfo();
getClientData();
getCustomerRecord();
5
6
7
//better
getUser()*/


//CONDICIONALES = NOS PERMITE EVALUAR UNA CONDICION


 
    var respuesta = 2;
    var mensaje = ' ';
     
     if (respuesta === 3 ){
         console.log ('Respuesta correcta');
     }

   else if(respuesta % 2 == 0){
     console.log('La respuesta es par');
     mensaje='Entro como par';
 } else if (respuesta == 2){
     console.log ('Casi');

     

 } else{
     console.log ('Respuesta incorrecta')
     mensaje='Todo mal';
 }

 console.log(mensaje);

 //Switch

 var respuesta = 2;

 switch(respuesta) {
     case 3:
     console.log('Respuesta correcta');

     case 2:
        console.log('casi');
        'break';


     default:
         console.log('mal por burro');
 }

