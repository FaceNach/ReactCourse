
const name = 'Nacho';
const surname = 'Hello';

const fullName = `${name} ${surname}`;

console.log(fullName);

function getSaludo(name){
    return 'Hello ' + name
}

console.log(`This is a text: ${getSaludo(fullName)}`);