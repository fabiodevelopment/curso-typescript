
// Boolean
const contaPaga: boolean = false;

// Number
const idade: number = 23;
const avaliacao: number = 4.5;

// String
const nome: string = 'Fabio Haddad Paes';

// Array
const idades: number[] = [23, 28, 45, 56, 67];
const idades2: Array<number> = [230, 280, 450, 560, 670];

// Tuple
let jogadores: string[]; //infinitas posições

let jogadores2: [string, string, string]; //Tuple
jogadores2 = ['Vitor', 'Fulano', 'Cliclano'];

let jogadores3: [string, boolean, number]; //Tuple
jogadores3 = ['Vitor', true, 34];

// Enum

enum StatusAprovacao {
    Aprovado    = '001',
    Pendente    = '002',
    Rejeitado   = '003'
};
const statusDaAprovacao: StatusAprovacao = StatusAprovacao.Aprovado;

// Any
const retornoDaApi: any = [123, 'Fabio', false]
const retornoDaApi2: any = {
    //....
};

// Void
function printaNaTela(msg: string): void {
    console.log(msg) //Não retorna nada
}

// Null e Undefined

const u: undefined = undefined;
const n: null = null;

// Object

function criar(objeto: Object) {
    // ...
}

criar({
    propriedade: 1,
})

// criar('Fabio'); // Erro

// Never

function loopInfinito(): never {
    while (true) { }
}

function erro(mensagem: string): never {
    throw new Error(mensagem);
}

function falha() { // é never tbm
    return erro('Algo falhou');
}

// Union Types
function exibirNota(nota: number | string ) {
    // console.log('A nota é' + nota);
    console.log(`A nota é ${nota}`);
}

exibirNota('10')
exibirNota(10)
// exibirNota(false) // Erro

let notaProva: number | string; // union Types em Variáveis






