console.log(4 ** 2);
console.log(10 ** 3);
console.log("Hola a todos");
console.log("Bienvenidos a la clase nuemro 3");
console.log (5**5);


const persona = {
    nombre: "Ser",
    edad: 30,
    pais: "Arg"

}

const curso = {
    titulo: "backend",
    duracion: "6 meses"

}
//Ver la diferencia, en el segundo caso se crea otro objeto integrando los datos de los dos objetos mencionados
const estudiante = {
    persona,
    curso
}

const auth ={
    usuario: "sergio",
    pass: "1234"

}

const estudent = {
    ...persona,
    ...curso,
    ...auth
}

//Excluyo el pass y restorno todo lo demas
const {pass, ...rest} = estudent;
const estudianteARetornar ={
    ...rest
}

console.log (estudianteARetornar);

console.log(estudent)
console.log(estudiante)

console.log(persona);
console.log(Object.keys(persona));
console.log(Object.values(persona));
console.log(Object.entries(persona));

const pass2 = "1234     "
console.log(pass2.trim(), "Este es el nuevo pass2 aplicando el metodo trim para sacar los espacios")

const persona2= [
    1,
    2,
    [
        "a",
        "b",
        "c",
    ],
    3,
    4
]

console.log(persona2);
console.log(persona2.flat(2));