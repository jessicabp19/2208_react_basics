//Fetch API

const apiKey = 'FeU18uL0Ez2IjuW5Vw9Ca0rr8Dcmk1zP';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);


// peticion.then( resp => {
//     console.log(resp ) //body: ReadableStream (la info no viene expandida todavía)
    
//     resp.json().then( data => {
//         console.log(data)
//     }) //No facilmente mantenible
    
// }).catch( console.warn );


//En cadena
peticion
    .then(resp => resp.json()) //La promesa retornada es pasada el sig then
    .then( ({data}) => {
        const { url } = data.images.original;
    
        const img = document.createElement('img');
        img.src = url;

        document.body.append(img)
    })
    .catch(console.warn)