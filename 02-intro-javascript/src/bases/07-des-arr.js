
const personajes = ['Goku', 'Vegeta', 'Trunks'];

const[p1, p2, p3] = personajes;

console.log(p1, p2, p3);

const returnArray = () => {
    return['ABC', 123];
}

const [value1, value2] = returnArray();

console.log(value1);
console.log(value2);

const useState = (value) => {

    return [value, () =>{console.log('Hello World')}]
};

const arr = useState('Goku');
console.log(arr);

const [name, setName] = useState('Goku');

console.log(name);
setName();

