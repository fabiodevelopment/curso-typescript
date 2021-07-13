 class Data {
    // public dia: number;
    // mes: number;
    // ano: number;

    constructor(public dia: number, public mes: number, public ano: number = 1970) {
        // this.dia = dia;
        // this.mes = mes;
        // this.ano = ano;
    }
}

const data = new Data(1, 1, 2021)
console.log(data.dia); //public
console.log(data.mes); //private

const data2 = new Data(1, 1)
console.log(data2)

class Carro {
    private velocidadeAtual: number = 0;

    constructor(
        public marca: string,
        public modelo: string,
        private velocidadeMax: number = 220
    ){}

    private alterarVelocidade(delta: number) {
        if(this.velocidadeAtual + delta <= this.velocidadeMax) {
            this.velocidadeAtual += delta;
        }
    }

    acelerar() {
        const aceleracao = 5;
        this.alterarVelocidade(5)
    }
    frear() {
        this.alterarVelocidade(-5)
    }
}

const carro = new Carro('Volkswagem', 'Gol', 250)
// carro.velocidadeMax = 220;
// carro.velocidadeAtual = 260;
carro.acelerar();
carro.frear();

// carro.alterarVelocidade(5) // não posso chamar um metodo privado fora da classe

