const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 321321321,
        lat: 14.323232,
        lng: 34.92312321
    }
};

//console.log(persona);
console.log(persona);

const persona2 = {...persona};

console.log(persona2);