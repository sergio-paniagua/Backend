//Tres estados de las promesas, pending, resolved and rejected

const dividir = (dividendo, divisor) => {
    return new Promise((resolve, reject) => {
        if (divisor===0){
            reject("no se puede dividir por cero")
        }else {
            resolve(dividendo/divisor)
        }
    })
}

const potencia = (base, exponente) => {
    return new Promise ((resolve, reject) => {
        if (base === undefined || exponente === undefined)
        reject ("deben venir los dos valores")
        else {
            resolve (base ** exponente)
        }
    })
}



//se crea la promesa y para utilizarla se deben llamar a los .then .catch segun la respuesta q vamos a recuperar.
dividir(10, 2)
.then(resultado=>{console.log(resultado)})
.catch(error=>{console.log(error)});

dividir(10, 0)
.then(resultado=>{
    console.log(resultado)
})
.catch(error=>{
    console.log(error)
});

//CONCATENAMIENTO DE PROMESAS 
new Promise(function (resolve, reject) {
    setTimeout(() => resolve (1), 5000);//la promesa se resuelve despues de 5 segundos
})
.then(result=> {
    console.log(result)
    return result * 2;
})
.then(result => {
    console.log(result)
    return result * 2;
})
.then(result => {
    console.log(result)
    return result * 2;
});


//Utilizando await; porque con .then y .catch se prodecue el encapsulamiento! pero en este caso debemos
//usar try/catch para poder captar el error en caso de que se prodezca.

const calculadoraAsync = async(num1, num2) => {
    try {
        let resultado = await dividir(num1, num2) //sigbifica que espere a resolver la division antes de
        resultado = resultado * 10              // ejecutar la promesa.
        console.log (resultado);                                  
    }
    catch (error) {
        console.log (error)
    }
}

const calculadoraPotencia = async (num1, num2) => {
    try{
        let resultado = await potencia (num1, num2)
        console.log(`el resultado de ${num1} elevado a ${num2} es ${resultado}`)
    }
    catch (error){
        console.log(error)

    }
}

calculadoraAsync (100, 2);
calculadoraPotencia(2, 2);




