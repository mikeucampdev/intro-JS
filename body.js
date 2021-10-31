const peticionPost = async  (url) =>{
    const respuesta = await fetch(url,{
        method:'POST', 
        headers: {
            'Content-type': 'application/json'
        },
        
        body:JSON.stringify({
            nombre: "Rodolfo",
            apellido: "Gomez",
            edad: 15,
        }),
    });

    const conversion  = await response.json ();
    console.log(conversion);
}