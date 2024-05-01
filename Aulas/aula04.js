
function calcularIMC(peso, altura) {
    return peso / Math.pow(altura, 2);
}
            
 function classificarIMC(IMC) {
  
    if(IMC < 18.5){
   return 'Abaixo do Peso';
  } 
  else if (IMC >= 18.5 && IMC < 25) {
    return 'Peso normal';
  } 
  else if (IMC >= 25 && IMC < 30) {
    return 'Acima do Peso';
  } 
  else if (IMC >= 30 && IMC < 40) {
    return 'Obeso';
  }
   else { (IMC > 40) 
    return 'Obesidade Grave'; 
  } 
}

//main 
(function (){
const peso = 66.5;
const altura = 1.73;

   const IMC = calcularIMC(peso , altura);
   console.log(classificarIMC(IMC))

})();

console.log(IMC.toFixed(1));