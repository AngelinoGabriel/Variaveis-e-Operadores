/*faça um programa para calcular o valor de numa viagem.
  voce terá 5 variaveis
  
  1-Preço do etanol;
  2-Preço da gasolina;
  3-O tipo de combustivel que esta no seu carro;
  4-Gasto medio de combustivel do carro por KM;
  5-Distancia em KM de viagem;
  
  imprima no console o valor gasto para realizar esta viagem.*/

const precoEtanol = 5.79;
const precoGasolina = 6.66
const kmPorLitros = 10;
const distanciaEmKm = 100;
const tipoCombustivel = 'Gasolina';

const litrosConsumidos = distanciaEmKm / kmPorLitros;

if (tipoCombustivel === 'Etanol') {
const valorGasto = litrosConsumidos * precoEtanol;
console.log(valorGasto.toFixed(2));

} else {   const valorGasto = litrosConsumidos * precoGasolina;
console.log(valorGasto.toFixed(2));
}

 

