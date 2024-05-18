export const getGifs = async (category) => 
    {
        const url = `https://api.giphy.com/v1/gifs/search?api_key=OBfhQR8vjcGKI4uUOADUTzHy1NdDb1bm&q=${category}&limit=20`

        const resp = await fetch(url);
        const {data} = await resp.json();

        const gifs = data.map(img => (
            {
                id: img.id,
                title: img.title,
                ulr: img.images.downsized_medium.url
            }));
 
        console.log(gifs);
        return gifs;
    }