//Desestructuración
//Asignación destructurante 

const persona = {
    nombre : 'tony',
    edad : 45,
    clave: 'IronMan'
};

// const {nombre, edad, clave} = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

const useContext = ({clave, nombre, edad, rango = 'capitan'}) =>{
    
        return{
            nombreClave: clave,
            anios: edad,
            latlng: {
                lat: 12.32323,
                lng: -14.321321312
            }
        }
        //console.log(edad, nombre, rango);
    }

// lo que logra esto es desactivar las reglas de hooks (no aconsejable)
// eslint-disable-next-line
const {nombreClave, anios, nombre, rango, latlng} = useContext(persona);

console.log(nombreClave, anios);
console.log(latlng.lat, latlng.lng);
