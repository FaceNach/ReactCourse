const personajes = ['Goku', 'Vegeta', 'Trunks'];
const [, ,p3] = personajes;
console.log(p3);

const  retornaArreglo = () =>
    {
        return ['ABC', 123];
    }
    
    const [letras, numeros]= retornaArreglo();

    console.log(letras);
    console.log(numeros);


    //tarea

    const useState = (valor) => 
        {
            return [valor, () => {console.log('Hola Mundo')}];
        };
    
    // eslint-disable-next-line    
    const [nombre, setNombre] = useState('Goku');

    console.log(nombre);
    setNombre();
    
