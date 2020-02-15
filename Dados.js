'use strict'

var inicio = 1;
var fin = 6;

var dado1;
var dado2;

var suma10;

for (let i = 0; i < 20; i++) {
    dado1 = Math.floor(Math.random() * (fin - (inicio -1))) + inicio;
    dado2 = Math.floor(Math.random() * (fin - (inicio -1))) + inicio;

    if (dado1 + dado2 === 10) {
        suma10++;
    }
}