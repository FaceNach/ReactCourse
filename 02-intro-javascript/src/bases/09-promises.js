import {getHeroeByID} from "./bases/08-imp-exp.js";


// const promise = new Promise((resolve, reject) => {
// setTimeout(() => {
//     const heroe = getHeroeByID(1);
//     resolve(heroe);
// },2000)
// });
//
// promise.then((heroe) =>{
//     console.log('heroe', heroe);
// })
// .catch((err) => {
//     console.warn(err);
// })

const getHeroeByIDAsync = (id ) => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        const hero = getHeroeByID(id);

        if (hero === undefined) {
            reject("No heroes found!");
        }
        resolve(hero);

        },2000)
});
}

getHeroeByIDAsync(1 )
    .then(console.log)
    .catch(err => {console.log(err);})
