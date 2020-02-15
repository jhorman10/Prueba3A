'use strict'

function Romano(n) {
    var numeros = [1, 5, 10, 50, 100, 500, 1000];
    var letras = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
    var res = [];
    var num, letra, val, pos, insert;
        
    if (n <= 5000) {

        for(var i = 6; num = numeros[i], letra = letras[i]; i--) {
            if(n >= num) {
                var r = Math.floor(n / num); 
    
                n -= r * num; 
    
                if(r < 4){
                    while(r--){
                        res.push(letra);
                    }
                } else {
                    val = res.pop();
                    pos = (val ? letras.indexOf(val) : i) + 1; 
                    insert = letra + (letras[pos] || 'M'); 
                    res.push(insert);
                }
            } else {
                res.push('');
            }
        }
        
        return res.join('');
    }else{
        return 'el numero ingresado es mayor a 5000';
    }

}

Romano(18); 