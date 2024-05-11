//import {heroes} from './Data/heroes';
//import {heroes} from './Data/heroes';
import  heroes, {owners}  from '../Data/heroes';

//console.log(owners);

const getHeroeById = (id) =>
    {
        return heroes.find(element => element.id === id);
    };

//console.log(getHeroeByid(2));

const getHeroesByOwner = (owner) => {
    return heroes.filter(element => element.owner === owner);
}


//console.log(getHeroesByOwner('DC'));

export{
    getHeroeById,
    getHeroesByOwner
}