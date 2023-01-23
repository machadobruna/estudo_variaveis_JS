// var

// var altura = 5;
// var comprimento = 7;

// area = altura * comprimento;
// console.log(area)
// var area;

// let forma = 'retângulo'
// let altura = 5;
// let comprimento = 7;
// let area

// if (forma === 'retângulo') {
//     area = altura * comprimento;
// } else {
//     area = (altura * comprimento) / 2;
// }

// console.log(area)

// let só conseguimos usar a variável depois dela já ter sido declarada
// um bloco de código é sempre definido por chaves 
// o bloco irá buscar a variável let que está fora dele e atribuirá um valor a ela
// const permanece sempre igual, seu valor atribuído não pode ser alterado
// const precisa ter um valor atribuido na sua declaração

const forma = 'triangulo';
const altura = 5;
const comprimento = 7;
let area;

if (forma === 'quadrado') {
   area = altura * comprimento
} else {
    area = (altura * comprimento) / 2
}

console.log(area)