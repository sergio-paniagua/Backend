// Ejemplo de utilizacion 
const counter = () => {
    let count = 0
    //Se ejecula lo que esta en el cuerpo de la funcion durante un intervalo de tiempo
    //en este caso un contador +1 durante 2 segundos
    const timer = setInterval(() => {
        count += 1;
        console.log(count)

         //utilizo otra funcion para detener la funcion de setInterval, se escribe todo dentro se setInterval
        if (count >= 6) clearInterval(timer)
        
    }, 1000);

    console.log(`transcurrieron ${timer}`) //Xq da 5???
    console.log(timer)
}
counter();


