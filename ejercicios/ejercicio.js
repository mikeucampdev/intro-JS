
/* 
function pares(max){
var num = 2;
for( var i = 1; i <= 6; i++){
    var b = num*1
    console.log(b);
    }
}
pares(12);
pares(3);
pares(100);


//imprimir un alert con un nombre
alert('Pedro GOnzalez')

//Crear un metodo que reciba tu nombre y tu edad y determine si eres mayor de edad para solicitar un permiso de conducir

permiso("Roberto",15)//"Roberto, no puedes solicitar el permiso"
permiso("Mario",36)//"MArio, puedes solicitar tu permiso"
//se puede usar las condicionales if/else



promedio (cal1, cal2, cal3, cal4,cal5){
    var resultado = (cal1 + cal2 + cal3 + cal4 + cal5)
    console.log (resultado);
}*/


function obtenerPromedio(calificaciones){

    /**Opcion con reduce */
    var sumaTotal = calificaciones.reduce ((acumulador, calificacion) => {
        return acumulador + calificacion

    });

    let promedio = sumaTotal / calificaciones.length
    
    console.log(promedio);


}
 obtenerPromedio ( [2,5,8,9,10,10,8,9,7,10,10 ] );

 function aprobadas (calificaciones) {
     var filtrados = []
     for (let i = 1; 1 < calificaciones.length; i++){
         if (calificaciones[i] >= 60){
             console.log(calificaciones [i]);
         }
     }
     console.log(filtrados);
     return filtrados;
 }
 aprobadas1 = [50,60,70,80,86,90];
 aprobadas2 = [50,80,90,100,70,65,70,85];

 aprobadas(aprobadas1);
 aprobadas(aprobadas2);


 