//Ejemplo de sintaxis de funciones

//1- Arrow function
const saludo = (nombre, momento) => ({
    manana: ` Buenos dias ${nombre}` ,
    tarde: ` Buenas tardes ${nombre}` ,
    noche: ` Buenas noches ${nombre}`

}) [momento];

console.log(saludo ("sergio", "noche"));

//2- Llamo primero a la funcion y despues la declaro, y funciona, por un concepto denominado hoisting.
console.log(saludo2 ("sergio", "tarde"));

function saludo2 (nombre, momento) {
return {
    manana: ` Buenos dias ${nombre}` ,
    tarde: ` Buenas tardes ${nombre}` ,
    noche: ` Buenas noches ${nombre}`
}[momento]};

// Funciones callback, funciones que utilizan como argumentos otras funciones
const suma = (num1, num2) =>{
    return num1 + num2;
};
const resta = (num1, num2) =>{
    return num1 - num2;
};
const multiplicacion = (num1, num2) =>{
    return num1 * num2;
};
const division = (num1, num2) =>{
    return num1/num2;
};

//ahora definimos la funcion que incorpora como argumento la funcion definica antes
function calculadora (num1, num2, operacion){
    return operacion(num1, num2); 
}

console.log (calculadora(2, 2, division));

//Ejemplo de la funcion map()
const arr = [1, 2, 3];

//como parametro de map incorporamos una funcion explicita
const newArr = arr.map(function (num){
    return num * 1;
})

console.log(newArr);

//como funciona el metodo map

const arr2 = [1, 2, 3];

const callback = (num) => {
    return num * 2;
}

//Definimos la funcion que hace los mismo que map(), recorre el array y aplica la funcion que la 
//enviamos como parametro (callback), el resultado de la accion de la funcion, lo incorpora en 
//otro array. 
const miMap = (arr, cb) => {
    const newArray = [];
    for (let i = 0; i < arr.length; i++){
        newArray.push(cb(arr[i]))
    }
    return newArray;
}

const newArray = miMap(arr2, callback)
console.log(newArray);
 //PROTOTIPOS. Caracterizan el tipo de dato y con ellos los metodos que se pueden applicar
 //podemos definir nuevos prototipos, ejemplo:

 Array.prototype.miMap = miMap //la mayuscula en Array indica el tipo de datos.
 //aca incorpore la funcion como un nuevo prototipo de la clase de datos Array, ahora 
 //la puedo utilizar como el metodo map();
 const arr3 = [10, 20, 30];
 const newArr3 = miMap(arr3, callback);
 console.log(newArr3);

 //Vamos a usar THIS para eliminar el parametro array que hay que pasar a la funcion y solamente 
 //utilizamos la funcion callback.
 
 const miMapConThis = (cb) => {
    const newArray = [];
    for (let i = 0; i < this.length; i++){
        newArray.push(cb(this[i]))
    }
    return newArray;
}

Array.prototype.miMapConThis = miMapConThis
const arr4 = [4, 5, 6];
const newArr4 = miMapConThis(callback);
console.log(newArr4);
//Aca se arroja un array vacio, porque el this, no se interpreta en una funcion flecha, 
//no se sabe a que hace referencia ese this, entoces hay q definir la sintaxis de una funcion 
//convencional.
const miMapConThisFuncionConv = function (cb) {
    const newArray = [];
    for (let i = 0; i < this.length; i++){
        newArray.push(cb(this[i]))
    }
    return newArray;
}

Array.prototype.miMapConThisFuncionConv = miMapConThisFuncionConv

const arr5 = [4, 5, 6];
const newArr5 = arr5.miMapConThisFuncionConv(callback);
console.log(newArr5);

