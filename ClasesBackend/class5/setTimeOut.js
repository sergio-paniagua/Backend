const asincrono = () => {
setTimeout(() => {
    console.log ("Continua asincrono")
}, 1000);
}

console.log ("inicia");
asincrono();
console.log ("finaliza")
//En este caso se ejecuta la funcion despues de 1segundo. 
//Si queremos que se ejecute durante un i tervalo de tiempo? usamos SetInterval();