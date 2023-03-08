const p1 = fetch("URL1_Aqui");
const p2 = fetch("URL2_Aqui");
const p3 = fetch("URL3_Aqui");

Promise.all([p1, p2, p3])
  .then(resultArray => console.log(resultArray))
  .catch(e => console.log(`Error capturado:  ${e}`));

  Promise.race([p1, p2, p3])
  .then(winnerResult => console.log(winnerResult))
  .catch(e => console.log(`Error capturado:  ${e}`));

//SINTAXIS DE UNA PROMESA 
  /*const myAsyncFunction = () => {
    return new Promise((resolve, reject) => {
  
      // Carga de la promesa (normalmente tareas asíncronas).
  
      if (evalúa condición) {
        resolve(`Éxito!`);
      } else {
        reject(`Fallo!`);
      }
    });
  }*/


    const delay = time => new Promise(resolveCallback => setTimeout(resolveCallback, time));
    delay(3000)
      .then(() => console.log(`Este es un retardo de al menos 3 segundos`))
      .catch(() => console.log(`Retardo fallido`));

//ASIMCRONIA EN PROMESAS
// LLamada asíncrona con callback puro.
setTimeout(() => console.log("1"), 0); 

// LLamada asíncrona con promesa.
Promise.resolve().then(() => console.log("2"));

// 2
// 1