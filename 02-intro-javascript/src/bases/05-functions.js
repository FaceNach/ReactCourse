

const sayHi = function (name){
    return `Hola, ${name}`;
}

const sayHi2 = (name) => {
    return `Hola, ${name}`;
}

const sayHi3 = (name) =>`Hola, ${name}`;
const sayHi4 = () =>`Hello World`;

const getUser = () => {
    return {
        uid: 'ABC123',
        username: 'JohnPapichon',
    }
};


console.log(sayHi('Goku'));
console.log(sayHi2('Vegeta'));
console.log(sayHi3('Trunks'));
console.log(sayHi4());

const user = getUser();
console.log(user);

const getActiveUser =(name) =>({
        uid: 'DDD555',
        username: name,
});

const activeUser = getActiveUser('Testing this active user');

console.log(activeUser);