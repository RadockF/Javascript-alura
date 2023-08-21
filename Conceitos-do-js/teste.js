// // // UTF - Unicode Transformation Format

// // const cifrao = '\u0024'
// // const aMaiusculo = '\u0041'
// // const tique = '\u2705'
// // const hiragana = '\u3041'

// // console.log(cifrao)
// // console.log(aMaiusculo)
// // console.log(tique)
// // console.log(hiragana)

// // // compração entre strings

// // const cidade = "belo horizonte";
// // const input = "Belo Horizonte";

// // const inputMinusculo = input.toLowerCase();

// // console.log(cidade === inputMinusculo); // true


// // const senha = "minhaSenha123"
// // console.log(senha.length) // 13 caracteres


// // const minhaVar = 1;
// // const MinhaVar = "texto";
// // const minhavar = "3";
// // const MINHAVAR = 2;

// // console.log(minhaVar, MinhaVar, minhavar, MINHAVAR)

// // let input3 = null;

// // if (input3 === null) {
// //  console.log('não há informação');
// // } else {
// //  console.log(input3);
// // }

// // let input2;

// // console.log(input3); // null
// // console.log(input2); // undefined

// // console.log(null == undefined); // true
// // console.log(null === undefined); // false

// // const soma = 10 + 10;
// // const multiplicacao = 10 * 10;
// // const operacao = (soma + multiplicacao) + 10;

// // console.log(operacao)

// let telefone = 12341234;
// console.log("O telefone é " + String(telefone)); // teremos a conversão do número 12341234 para uma string “12341234” e assim poderemos fazer a concatenação entre as strings

// let telefone = 12341234;
// console.log("O telefone é " + telefone.toString()); // o .toString() é uma outra forma para  fazer essa conversão, que é mais parecida com outras linguagens de programação.

// let usuarioConectado = false;
// console.log(String(usuarioConectado)); // teremos a conversão da booleana para string, nesse caso teremos uma string “false”.
// usuarioConectado = true;
// console.log(String(usuarioConectado)); // agora teremos uma string “true”.

// // Vamos calcular a área de um retângulo
// let largura = "10";
// let altura = "5";
// console.log(Number(largura) * Number(altura)); // teremos a conversão de String para números, possibilitando a realização da multiplicação

// let largura = "10";
// let altura = "5";
// console.log( + largura * + altura); // teremos a conversão de String para números realizado usando o + antes das variáveis

// let meuNome = "leonardo";
// console.log(Number(meuNome)); // como a variável meuNome não contém apenas números ele retorna o erro NaN (Not a Number, não é número);
// console.log( + meuNome); // a conversão também retornará NaN

// let usuarioConectado = false;
// console.log(Number(usuarioConectado)); // teremos a conversão da booleana para número, sendo que false (falso) retorna o número 0.
// usuarioConectado = true;
// console.log(Number(usuarioConectado)); // agora teremos a conversão de true (verdadeiro) para o número 1.

// arguments
// as
// async
// await
// break
// case
// catch
// class
// const
// continue
// debugger
// default
// delete
// do
// else
// eval
// export
// extends
// false
// finally
// for
// from
// function
// get
// if
// import
// in
// instanceof
// let
// of
// new
// null
// return
// set
// static
// super
// switch
// target
// this
// throw
// true
// try
// typeof
// var
// void
// while
// with
// yield



// ternario com template-string 
// const nome = "Leo";
// const idade = 23;
// const bebidaMaior = "cerveja";
// const bebidaMenor = "suco";

// const pedido = `${nome} diz: "por favor, quero beber ${idade >= 18 ? bebidaMaior : bebidaMenor}"`
// console.log(pedido)

// Math.round(): Faz o arredondamento (round em inglês) de um número de ponto flutuante para o inteiro mais próximo.

// Math.round(4.3) retorna 4
// Math.round(3.85) retorna 4
// Math.round(2.5) retorna 3, quando o número termina com 0.5 a função arredonda para cima
// Math.ceil(): Faz o arredondamento para o valor mais alto, também conhecido como teto (ceil em inglês).

// Math.ceil(5.2) retorna 6
// Math.floor(): Faz o arredondamento para o valor mais baixo, também conhecido como piso (floor em inglês).

// Math.floor(5.2) retorna 5
// Math.trunc() : Desconsidera os números decimais, o que é conhecido como truncamento.

// Math.trunc(4.3) retorna 4
// Math.trunc(4.8) retorna 4
// Math.pow() : Faz a exponenciação de 2 números, quando for simples, como ao quadrado(2) ou cubo(3). Recomenda-se usar a multiplicação por ser mais rápido.

// Math.pow(4 , 2) retorna 4^2 = 16
// Math.pow(2.5 , 1.5) retorna 2.5^(3/2) = 3.9528 ...
// Math.sqrt() : Retorna a raiz quadrada de um número.

// Math.sqrt(64) retorna 8
// Math.min(): Retorna o menor valor entre os argumentos.

// Math.min(0, 150, 30, 20, -8, -200) retorna -200
// Math.max(): Retorna o maior valor entre os argumentos.

// Math.max(0, 150, 30, 20, -8, -200) retorna 150
// Math.random(): Retorna um valor randômico (random em inglês) entre 0 e 1, então não teremos um valor esperado para receber.

// Math.random() retorna 0.7456916270759015
// Math.random() retorna 0.15449802102729304
// Math.random() retorna 0.4214269561951203