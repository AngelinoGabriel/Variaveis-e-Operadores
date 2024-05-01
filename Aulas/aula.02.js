 
 /* EX:1*/ 

const numero = 10;

const numeroDivisivelPor5 = (numero % 5) === 0;

if (numero === 0){
 console.log('O numero é invalido');
}else if (numeroDivisivelPor5) {
  console.log('Sim');
}
 else {console.log('Não');
}


/* uma estrutura condicional booleana false/true onde se da pra por (if else) pelo codigo e no final apenas else */ 
/* outro jeti ode se fazer é 

const numero = 5;

if((numero % 2) === 0) {
    console.log('o numero é par');
} else {
    console.log('o numero é impar');
}

//mais dificil a leitura */