const promesa = new Promise((resolve,reject) => {
    setTimeout (() => {
        let numero = Math.random ();
        if (numero >= 0.5) resolve("Exito");
        reject("Error");
    }, 3000);
});

promesa.then((data) => console.log (data))
.catch((data) => console.log(data));
