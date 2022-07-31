//ASYNC & AWAIT

/*const getImagenPromesa = () => //Un poco complicado de leer
    new Promise( resolve => resolve('https://fdskjfdnf.com') )

getImagenPromesa().then(console.log);*/


//Async puede ser independiente, pero el await siempre va con el async
//Con el async podemos trasnformar el retorno de una función en una promesa
//Await nos ayuda a trabajar el código como si fuera sincrono (ya no es promise, es solo response)

/*const getImagen = async() => {
    return 'https://fdskjfdnf.com';
}
getImagen().then( console.log );*/


const getImagen = async() => {

    try {
        const apiKey = 'FeU18uL0Ez2IjuW5Vw9Ca0rr8Dcmk1zP';
        const respuesta = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await respuesta.json();

        const { url } = data.images.original;
        
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img)
    } catch (error) {
        //manejo del error
        console.log(error);
    }

}

getImagen();