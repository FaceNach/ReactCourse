//arreglos en js

//const arreglo = new Array(100); not best way to create arrays

const arreglo = [1,2,3,4];

//arreglo.push(1); .push modiffy the object. Don't use it to insert into the array
//arreglo.push(2);
//arreglo.push(3);
//arreglo.push(4);


let arreglo2 = [...arreglo,5];
//arreglo2.push(5);

 let arreglo3 = arreglo2.map(function(numero)
{
    return numero * 2;
});

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);