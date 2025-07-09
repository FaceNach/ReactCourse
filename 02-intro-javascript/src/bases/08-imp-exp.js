//import {heroes} from './data/heroes';
import heroes, {owners} from "../data/heroes.js";

//console.log(owners);

export const getHeroeByID = (id) => {
    return heroes.find((hero) => hero.id === id);
}

//console.log(heroes);
//console.log(getHeroeByID(1));

export const getHeroesByOwner = (owner) =>{
    return heroes.filter((o) => o.owner === owner);
}

const result = getHeroesByOwner("DC");

// for(const owner of result){
//     console.log(owner.name);
// }
// console.log(getHeroesByOwner('DC'));

