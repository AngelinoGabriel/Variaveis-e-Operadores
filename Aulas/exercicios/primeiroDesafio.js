/* faça um programa para calcular o valor de numa viagem.
voce terá 3 variaveis
  
1-Preço do combustivel;
2-Gasto medio de combustivel do carro por KM;
3-Distancia em KM de viagem;
  
imprima no console o valor gasto para realizar esta viagem */


const precoCombustivel = 5.79;
const kmPorLitros = 12;
const distanciaEmKm = 1580;


const litrosConsumidos = distanciaEmKm / kmPorLitros;
const valorGasto = litrosConsumidos * precoCombustivel; 

console.log(valorGasto.toFixed(2));





