



// Função útil para o cálculo do imposto (baseado nas alíquotas).
function calcularImposto(salario) {
  let aliquota;
  if (salario >= 0 && salario <= 1100) {
      aliquota = 0.05;
  }
  else if (salario > 1100 && salario <= 2000) {
      aliquota = 2.5;
  }
  else if (salario > 2000 && salario <= 3000) {
      aliquota = 4.0;
  }
  else if (salario > 3000 && salario <= 5000) {
      aliquota = 10.0;
  }
  else {
      aliquota = 15.0;
  }
  return aliquota;
}

// Lê os valores de Entrada:
const valorSalario = parseFloat(gets());
const valorBeneficio1 = parseFloat(gets()); // Primeiro benefício

// Calcula o imposto através da função "calcularImposto":
const taxaImposto = calcularImposto(valorSalario);
const valorImposto = valorSalario * (taxaImposto / 100);

// Calcula e imprime a Saída (com 2 casas decimais):
const totalBeneficios = valorBeneficio1 // Soma dos benefícios
const valorLiquido = valorSalario - valorImposto + totalBeneficios;
print(valorLiquido.toFixed(2));
