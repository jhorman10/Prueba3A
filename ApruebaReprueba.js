'use strict'

notas = {
    n1: 2,
    n2: 3,
    n3: 3.3,
    n4: 3.5,
    n5: 4,
    n6: 5,
    n7: 4.5,
    n8: 2.9,
    n9: 2.94,
    n10: 4.9,
    n11: 2.4,
    n12: 1.9,
    n13: 0.5,
    n14: 3,
};

const [n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, n11, n12, n13, n14] = notas;

var promedio = (n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9 + n10 + n11 + n12 + n13 + n14)/notas.length;
var aprovados;
var reprovados;

for (let i = 0; i < notas.length; i++) {
    
    notaMayor = notaMenor = notas[i];

    switch (notas[i]) {
        case notas[i] < 3:
            reprovados++;
            break;
    
        case notas[i] >= 3:
            aprovados++;
            break;
    }

    if (notaMayor < notaMenor) {

        notaMenor = notas[i];
        
    } else if (notaMenor > notaMenor) {

        notaMayor = notas[i];
        
    }
    
}

console.log('Promedio notas: ' + promedio);
console.log('Total aprovados: ' + aprovados);
console.log('Total reprovados: ' + reprovados);
console.log('Nota mayor: ' + notaMayor);
console.log('Nota Menor: ' + notaMenor);