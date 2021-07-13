"use strict";
var Data = /** @class */ (function () {
    // public dia: number;
    // mes: number;
    // ano: number;
    function Data(dia, mes, ano) {
        if (ano === void 0) { ano = 1970; }
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
        // this.dia = dia;
        // this.mes = mes;
        // this.ano = ano;
    }
    return Data;
}());
var data = new Data(1, 1, 2021);
console.log(data.dia); //public
console.log(data.mes); //private
var data2 = new Data(1, 1);
console.log(data2);
var Carro = /** @class */ (function () {
    function Carro(marca, modelo, velocidadeMax) {
        if (velocidadeMax === void 0) { velocidadeMax = 220; }
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMax = velocidadeMax;
        this.velocidadeAtual = 0;
    }
    Carro.prototype.alterarVelocidade = function (delta) {
        if (this.velocidadeAtual + delta <= this.velocidadeMax) {
            this.velocidadeAtual += delta;
        }
    };
    Carro.prototype.acelerar = function () {
        var aceleracao = 5;
        this.alterarVelocidade(5);
    };
    Carro.prototype.frear = function () {
        this.alterarVelocidade(-5);
    };
    return Carro;
}());
var carro = new Carro('Volkswagem', 'Gol', 250);
// carro.velocidadeMax = 220;
// carro.velocidadeAtual = 260;
carro.acelerar();
carro.frear();
// carro.alterarVelocidade(5) // não posso chamar um metodo privado fora da classe
