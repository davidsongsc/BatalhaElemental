"use strict";
var numero = 4;
console.log(numero);
var t = 23;
// exemplo de inferencia x anotation
// inferencia
var y = 12;
// uma vez tipada com numerico a variavel só pode receber valores numericos.
// anotation
var x = 12;
// segue a mesma regra da inferencia, mas a anotação da tipagem é visivel.
console.log(typeof x);
// Segue abaixo, exemplos de array de valores expecificos.
// Numericos, Booleanos, Strings
var numeros = [1, 2, 3, 4];
var booleanos = [true, false, true];
var strings = ['um', 'homem', 'bateu', 'em', 'minha', 'porta', 'e', 'eu'];
// tuplas
var minhaTupla;
minhaTupla = [15, 'manieca', strings];
console.log(minhaTupla);
