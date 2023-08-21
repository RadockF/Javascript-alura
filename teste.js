// UTF - Unicode Transformation Format

const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

// compração entre strings

const cidade = "belo horizonte";
const input = "Belo Horizonte";

const inputMinusculo = input.toLowerCase();

console.log(cidade === inputMinusculo); // true


const senha = "minhaSenha123"
console.log(senha.length) // 13 caracteres


const minhaVar = 1;
const MinhaVar = "texto";
const minhavar = "3";
const MINHAVAR = 2;

console.log(minhaVar, MinhaVar, minhavar, MINHAVAR)

let input3 = null;

if (input3 === null) {
 console.log('não há informação');
} else {
 console.log(input3);
}

let input2;

console.log(input3); // null
console.log(input2); // undefined

console.log(null == undefined); // true
console.log(null === undefined); // false

const soma = 10 + 10;
const multiplicacao = 10 * 10;
const operacao = (soma + multiplicacao) + 10;

console.log(operacao)