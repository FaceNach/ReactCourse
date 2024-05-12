const apiKey = 'Bxnu34C3JePx0alkRTa967cjwUoDIrTZ';

const HttpCall = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

HttpCall
.then(resp => resp.json())
.then(({data}) =>
    {
       const {url} = data.images.original;

       const img = document.createElement('img');
       img.src = url;

       document.body.append(img);
    })   
.catch(err => console.warn(err));