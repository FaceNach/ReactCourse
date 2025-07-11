
const getImage = async () => {
    try{
        const apiKey = 'pZmEmEcj4TlQp1gHerRcJgIuq6fxwRKf';
        const response =  await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await response.json();

        const {url} = data.images.original;
        const image = document.createElement("img");
        image.src = url;

        document.body.append(image);

        console.log(data);
    }catch(err){
        //error handler
        console.error(err);
    }
}

getImage();




