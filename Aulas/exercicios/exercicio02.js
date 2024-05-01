/* 
2) O IMC - indice de Massa Corporal é um criterio da Organização Mundial de Saúde para dar indicação sobre
a condicação de peso de uma pessoa adulta.

Formula do IMC:
IMC = peso / (altura * altura)

elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.
  
IMC em adultos Condição;
 Abaixo 18.5 Abaixo do Peso;
 Entre 18.5 e 25 Peso normal;
 Entre 25 e 30 Acima do Peso;
 Entre 30 e 40 Obeso;
 Acima de 40 Obesidade Grave;
 
 */

const peso = 59;
const altura = 1.63;
const IMC = peso / (altura * altura);
  console.log( IMC );                  
  if(IMC < 18.5){
    console.log('Abaixo do Peso');
  } 
  else if (IMC >= 18.5 && IMC < 25) {
    console.log('Peso normal');
  } 
  else if (IMC >= 25 && IMC < 30) {
    console.log('Acima do Peso');
  } 
  else if (IMC >= 30 && IMC < 40) {
    console.log('Obeso');
  }
   else { (IMC > 40) 
    console.log('Obesidade Grave'); 
  }
 console.log(IMC.toFixed(1));

  /* OU  |const imc = peso Math.pow(altura, 2);|imc deve ser minusculos pois letras maiusculas são somente usadas pra pra constantes especificas EXP: PI 3,14  */


  
  