export const getGifs = async( category ) => {


    const api_key = `FeU18uL0Ez2IjuW5Vw9Ca0rr8Dcmk1zP`;
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${category}&limit=8`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    })) 
    
    return gifs;
}