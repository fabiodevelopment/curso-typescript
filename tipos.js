"use strict";
// Boolean
var contaPaga = false;
// Number
var idade = 23;
var avaliacao = 4.5;
// String
var nome = 'Fabio Haddad Paes';
// Array
var idades = [23, 28, 45, 56, 67];
var idades2 = [230, 280, 450, 560, 670];
// Tuple
var jogadores; //infinitas posições
var jogadores2; //Tuple
jogadores2 = ['Vitor', 'Fulano', 'Cliclano'];
var jogadores3; //Tuple
jogadores3 = ['Vitor', true, 34];
// Enum
var StatusAprovacao;
(function (StatusAprovacao) {
    StatusAprovacao["Aprovado"] = "001";
    StatusAprovacao["Pendente"] = "002";
    StatusAprovacao["Rejeitado"] = "003";
})(StatusAprovacao || (StatusAprovacao = {}));
;
var statusDaAprovacao = StatusAprovacao.Aprovado;
// Any
var retornoDaApi = [123, 'Fabio', false];
var retornoDaApi2 = {
//....
};
// Void
function printaNaTela(msg) {
    console.log(msg); //Não retorna nada
}
// Null e Undefined
var u = undefined;
var n = null;
// Object
function criar(objeto) {
    // ...
}
criar({
    propriedade: 1,
});
// criar('Fabio'); // Erro
// Never
function loopInfinito() {
    while (true) { }
}
function erro(mensagem) {
    throw new Error(mensagem);
}
function falha() {
    return erro('Algo falhou');
}
// Union Types
function exibirNota(nota) {
    // console.log('A nota é' + nota);
    console.log("A nota \u00E9 " + nota);
}
exibirNota('10');
exibirNota(10);
// exibirNota(false) // Erro
var notaProva; // union Types em Variáveis
var funcionarios = ['Fabio', 'Fulano', 'Ciclano'];
var funcionarios2 = [{
        nome: 'Fabio',
        sobrenome: 'Haddad',
        dataNascimento: new Date()
    },
    {
        nome: 'Vitor',
        sobrenome: 'Farias',
        dataNascimento: new Date()
    }];
function tratarFuncionarios(functionarios) {
    for (var _i = 0, functionarios_1 = functionarios; _i < functionarios_1.length; _i++) {
        var funcionario = functionarios_1[_i];
        console.log('nome do Funcionario: ', funcionario.nome);
    }
}
var altura = 1.6;
altura = null;
var contato = {
    nome: 'Fabio',
    telefone1: '1199999999',
};
//Type Assertion
var minhaIdade = 23;
minhaIdade.toString();
// <HTMLInputElement>minhaIdade.toString();
var input = document.getElementById('numero1');
// const input = document.getElementById('numero1') as HTMLInputElement;
console.log(input.value);
