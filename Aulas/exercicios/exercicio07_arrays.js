// crie um programa que seja capaz de percorrer uma lista de numeros e imprima cada numero Par encontrado 

const numeros = [7,12,24];

for (let i= 0; i < numeros.length; i++) {
   const numero = numeros[i];
   if (numero % 2 === 0){
    console.log(numero);
   }
    
}

