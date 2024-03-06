const prompt = require('prompt-sync')();

//funcoes de agendamento

// setTimeout(function(){
//     console.log("QUASE NO FIM DA AULA");
// }, 4000)

// setTimeout(frase, 2000)

// function frase(){
//     console.log("exemplo de funcao por fora")
// }

//setInterval - executa repetitivamente quando atinge o tempo

// setInterval(function(){
//     console.log("Sou lindo")
// }, 3000)


// FUNÇÕES DE STRING

//LENGTH - PEGA O TAMANHO DA STRING
// let str = "Qual o tamanho da minha string";
// console.log( str.length);

//indexof - procurar a ocorrencia de um pedaço de string, caractere dentro da string principal
// console.log(str.indexOf("tamanho"))


//slice - corta uma string
// console.log(str.slice(0, 10));


//tolowercase - transforma a string em letras minuscula
// console.log(str.toLowerCase());

//touppercase - converte tudo para maiusculo
// console.log(str.toUpperCase());

//replace() - troca uma ocorrencia da string
// console.log( str.replace("da minha string", "do meu texto"));



//-------------------------- metodos para tratamentos de numeros
// parseint - converte um numero que esta em formato de string para inteiro
// let numero = parseInt("200")
// let numero2 = parseInt("100")

// console.log(numero + numero2)


// Da para usar isso de baixo para transformar oque a pessoa mandar em um numeral(o primeiro é encapsulado e os 2 de baixo é um sem encapsulamento - é recomendado usar o encapsulado por conta que é só uma linha de código)

// let numero = parseInt(prompt("Digite um numero:"))
// let numero2 = prompt("Digite um numero:")
// numero2 = parseInt(numero2)

// console.log(numero + numero2)


//parsefloat - converte numero string para float 100.50
let n1 = 200.854545
let n2 = 387.99454545

// console.log(parseFloat(n1) + parseFloat(n2));


//tofixed - limita o numero de casas decimais (arredonda)
// console.log (n1.toFixed(3));

// toprecision - arredonda
// console.log(n1.toPrecision(3));

// tostring - converte dados em string
let numero = 200 + 400;
console.log(numero.toString());
console.log(numero.toString());

numero2 = numero.toString()
console.log(typeof(numero2))

