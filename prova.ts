//3- Qual das alternativas representa o uso de Generics com TypeScript?

// Resposta: let list: Array<number> = [4, 5, 6];

// 4- Em typescript, considerando o código abaixo, qual será o resultado da execução ?

function hello(person){
    return "Ola, " + person;
}
let user = "Gama";
const msg = hello(user);
console.log(msg)

// Resposta: Apresenta o erro: Parameter 'person' implicitly has an 'any' type.

// 5- Com base no conceito de "tuple" quais dos arrays são declarações válidas no TypeScript ?

let x: [string, number];
x = ["10", 10]; //array:1
x = [10, "10"]; //array:2
x = ["10", "10"]; //array:3

//Resposta: Array 1

// 6.Qual é o resultado da execução TypeScript abaixo?

let text:number = 1234
console.log(text.substring(2));

//Resposta: Property 'substring' does not exist on type 'number'.


// 7- Qual é o resultado da execução TypeScript abaixo?

function print(){
    enum Estado {
        SP,
        SC,
        SE,
    }
    let uf: string = Estado[3];
    console.log(uf);
}
print()

// Resposta: Imprime: undefined

// 8- Quais são as dependências necessárias para criar uma aplicação web com React ?

// Resposta
// import React from 'react';
// import ReactDOM from 'react-dom';

// 9- Em React qual elemento representa o conceito de Fragmento ?

// Resposta: <>

// 10 - Como habilitar o conceito de estados no React?

// Resposta: import { useState } from "react";


// 11- Em uma estrutura React + NextJS foi solicitado a disponibilizar uma página que consome uma API mas que estes dados devem ficar estáticos quando acessados por outros usuários, qual recurso é utilizado em Next JS ?

// Resposta: getStaticProps

// 12- Em uma estrutura React + NextJS qual a finalidade a propriedade "revalidate" ?

// Resposta: Atualizar o conteudo da pagina com base em requisição API