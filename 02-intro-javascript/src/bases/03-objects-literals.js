
const person = {
    name : 'Tony',
    surname: 'Stark',
    age: 25,
    address: {
        ciudad: 'New York',
        zip: 14325,
        lat: 12.54545,
        lon: 15.4545
    }
};

console.log({person});

const person2 = {...person};

person2.name = 'Peter';

console.log(person2);

