const numero: number = 4;

console.log(numero);

var t = 23;


// exemplo de inferencia x anotation

// inferencia
let y = 12;
// uma vez tipada com numerico a variavel só pode receber valores numericos.

// anotation
let x: number = 12;
// segue a mesma regra da inferencia, mas a anotação da tipagem é visivel.


console.log(typeof x);

// Segue abaixo, exemplos de array de valores expecificos.
// Numericos, Booleanos, Strings

const numeros: number[] = [1, 2, 3, 4];

const booleanos: boolean[] = [true, false, true];

const strings: string[] = ['um', 'homem','bateu','em','minha','porta', 'e', 'eu'];

// tuplas

let minhaTupla: [number, string, string[]];

minhaTupla = [15, 'manieca', strings];

console.log(minhaTupla);


// object literals -> {prop: value}

const usuario: {name: string, age: number} = {name: "monico", age: 15};