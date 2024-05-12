// const getImagenPromesa = () =>
//     {
//         return new Promise((resolve, reject) =>
//         {
//             resolve('http://dasdasdsada.com')
//         })
//     }

// getImagenPromesa().then(console.log)

const getImage = async () => {
  try
  {
        const apiKey = "Bxnu34C3JePx0alkRTa967cjwUoDIrTZ";
        const resp = await fetch(
        `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
        );
        const { data } = await resp.json();
        const { url } = data.images.original;

        const img = document.createElement("img");
        img.src = url;

        document.body.append(img);
  } catch (error)
  {
    //manejo del error
    console.error(error);
  }
};

getImage();

// HttpCall
// .then(resp => resp.json())
// .then(({data}) =>
//     {
//        const {url} = data.images.original;

//        const img = document.createElement('img');
//        img.src = url;

//        document.body.append(img);
//     })
// .catch(err => console.warn(err));
