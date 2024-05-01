/*

3) Elabore um algoritmo que calcula o que deve ser pago por um produto, considerando preço normal de etiqueta e a escolha da condição de pegamento.
Utilize os códigos da tabela a seguir para ler qual a condição do pagamento escolhida e efetuar o cálculo 
adequado.

Código condição de pagamento:

1 Á vista Débito, recebe 10% de desconto;
2 Á vista no dinheiro ou PIX, recebe 15% de desconto;
3 Em duas vezes,preço normal da etiqueta sem juros;
4 Acima de duas vezes, preço normal de etiqueta mais juros de 10% 
*/


const precoEtiqueta = 100;
const formaDePagamento = 3;

if (formaDePagamento === 1){
 console.log( precoEtiqueta - (precoEtiqueta * 0.1));
}
 else if (formaDePagamento === 2){
  console.log( precoEtiqueta - (precoEtiqueta * 0.15));
}
 else if (formaDePagamento === 3){
    console.log (precoEtiqueta);
}
 else { 
    console.log (precoEtiqueta + (precoEtiqueta * 0.1));
 }


