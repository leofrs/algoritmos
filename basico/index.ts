/*
Soma de Dois Números:
Escreva um programa que solicita ao usuário dois números e exibe a soma deles.
*/

const soma = (numero1: number, numero2: number): number => {
  return numero1 + numero2;
};

//console.log("A soma dos números é:", soma(2, 2));

/*
Média de Três Números:
Crie um algoritmo que recebe três números do usuário e calcula a média.
*/

const media = (num1: number, num2: number, num3: number) => {
  return (num1 + num2 + num3) / 3;
};

//console.log("A média dos 3 números é:", media(5, 5, 5));

/*Número Par ou Ímpar:
Escreva um programa que verifica se um número é par ou ímpar.
 */

const parOuImpar = (num: number) => {
  if (num % 2 === 0) {
    console.log("numero é par");
  } else {
    console.log("número é ímpar");
  }
};

//parOuImpar(2);

/*Calculadora Simples:
Implemente uma calculadora simples que realiza operações de adição, subtração, multiplicação e divisão. O usuário deve inserir dois números e a operação desejada.
*/

class Calculadora {
  adicao(num1: number, num2: number) {
    return console.log("A soma dos números é:", num1 + num2);
  }
  subtrair(num1: number, num2: number) {
    return console.log("A subtração dos números é:", num1 - num2);
  }
  multiplicar(num1: number, num2: number) {
    this.adicao;
    return console.log("A multiplicação dos números é:", num1 * num2);
  }
  dividir(num1: number, num2: number) {
    return console.log("A divisão dos números é:", num1 / num2);
  }
}
