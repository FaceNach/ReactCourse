//Functions

const saludar = function saludar(nombre)
{
    return `Hola, ${nombre}`;
}

const saludar2 = (nombre) => `Hola, ${nombre}`;

const saludar3 = (nombre) => `Hola, ${nombre}`;





console.log(saludar);
console.log(saludar2('Vegeta'));
console.log(saludar3('Krilin'));

const getUser = () => {
    return {
        uid : 'ABC123',
        userName: 'El_Papi5544'
    }
};

const getUser2 = () => 
    ({
        uid : 'ABC123',
        userName: 'El_Papi5544'
    });


console.log(getUser());
console.log(getUser2());

// tarea
//11. transform to lambda function
//2. return an implicit object

function getUsuarioActivo(nombre)
{
    return{
        uid: 'ABC212121',
        username: nombre
    }
};
const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo);

//way to return an implicit object. 
const tarea2 = (nombre) =>({
    uid: 'ABC212121',
    username: nombre
});
    
console.log(tarea2 ('Fernando'));

const tarea1 = (nombre) =>{
    return{
        uid: 'ABC212121',
        username: nombre
    }
};

console.log(tarea1('Tarea2'))