"use strict";
//3- Qual das alternativas representa o uso de Generics com TypeScript?
// Resposta: let list: Array<number> = [4, 5, 6];
// 4- Em typescript, considerando o código abaixo, qual será o resultado da execução ?
// function hello(person){
//     return "Ola, " + person;
// }
// let user = "Gama";
// const msg = hello(user);
// console.log(msg)
// Resposta: Apresenta o erro: Parameter 'person' implicitly has an 'any' type.
// 5- Com base no conceito de "tuple" quais dos arrays são declarações válidas no TypeScript ?
// let x: [string, number];
// x = ["10", 10]; //array:1
// x = [10, "10"]; //array:2
// x = ["10", "10"]; //array:3
//Resposta: Array 1
// 6.Qual é o resultado da execução TypeScript abaixo?
// let text:number = 1234
// console.log(text.substring(2));
//Resposta: Property 'substring' does not exist on type 'number'.
// 7- Qual é o resultado da execução TypeScript abaixo?
function print() {
    var Estado;
    (function (Estado) {
        Estado[Estado["SP"] = 0] = "SP";
        Estado[Estado["SC"] = 1] = "SC";
        Estado[Estado["SE"] = 2] = "SE";
    })(Estado || (Estado = {}));
    var uf = Estado[3];
    console.log(uf);
}
print();
