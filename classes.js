"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
        var novaVelocidade = this.velocidadeAtual + delta;
        if (novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMax) {
            this.velocidadeAtual = novaVelocidade;
        }
        else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMax : 0;
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
// Herança
var Golf = /** @class */ (function (_super) {
    __extends(Golf, _super);
    function Golf() {
        var _this = _super.call(this, 'Volkswagen', 'Golf', 240) || this;
        _this.turbo = false;
        return _this;
    }
    Golf.prototype.ligarTurbo = function () {
        this.turbo = true;
    };
    return Golf;
}(Carro));
var golf = new Golf();
golf.acelerar();
golf.frear();
golf.ligarTurbo();
