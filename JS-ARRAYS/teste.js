const numero1 = 50;
const numero2 = 43;
const numero3 = 12;

// utilizando array
const numeros = [50, 43, 12];

const arrayDeNumeros = [50, 43, 12];
const arrayDeStrings = ["banana", "alura", "Juliana"];

// índice     0   1   2   3
const nums = [50, 43, 12, 98];
console.log(nums.length) //4

// concat()
// Junta dois arrays, colocando o array passado como argumento, logo depois do primeiro. Em português essa operação é conhecida como concatenação.
// Não altera o array no qual foi chamado, então precisamos salvar esse resultado em um novo array.

// filter()
// Retorna uma lista contando todos os elementos que passaram em um teste, ou seja, uma função escrita por nós.
// Não altera o array onde foi chamado, então precisamos salvar esse resultado em um novo array.

// find()
// Funciona de forma parecida com o filter, porém retorna apenas o primeiro valor que satisfizer o teste, podendo ser uma string ou um número.

// findIndex()
// Funciona igual o find(), mas retorna o índice em vez do elemento, possibilitando usá-lo em outras partes do código.

// lastIndexOf()
// É igual o findIndex() porém começa do último elemento, não no primeiro.

// forEach()
// Executa uma função em cada elemento do array de forma individual.
// Não altera o array original e nem retorna um valor, deixando esse trabalho a cargo da função escolhida.

// pop()
// Retira o último elemento do array.
// Altera o array original removendo o elemento.

// shift()
// Retira o primeiro elemento do array.
// Altera o array original removendo o elemento e trocando o índice de todos os elementos para um a menos do que eram, o índice 1 passa a ser o 0, o 2 passa a ser o 1, e assim por diante.

// push()
// Adiciona o elemento passado como parâmetro do array, porém na última posição.
// Altera o array original com o novo valor.

// unshift()
// Funciona igual ao push(), porém adiciona na primeira posição e acaba trocando o índice de todos os elementos.
// Altera o array original com o novo valor.

// reduce()
// Utiliza uma função definida pelo usuário em cada um dos elementos, guardando o resultado em uma variável que pode ser acessada dentro da função que foi definida, retornando um único valor no final, reduzindo o array para um único valor.

// reduceRight()
// Funciona igual o reduce() porém começa do final do array e segue até o início.

// reverse()
// Inverte a ordem dos elementos do array, então o primeiro vira o último, o segundo o penúltimo e assim por diante.

// slice()
// Copia uma parte do array para outro array.

// sort()
// Organiza o array de acordo com a classificação Unicode, onde os números vêm antes das letras, porém não funciona corretamente para números, onde temos que definir uma função que irá auxiliar o comando.

// splice()
// Consegue remover, um ou mais elementos consecutivos caso o segundo parâmetro tenha um valor maior que 0, e incluir um ou mais elementos a partir de um índice escolhido.

// As características principais de arrays:
// Um array é uma lista ordenada de dados. Você aprendeu a sintaxe de como criar um array e acessar seus valores.
// Os conceitos de elemento e índice:
// Elementos são os valores que um array guarda, e índice é o identificador único e numérico de cada elemento do array.
// Como utilizar a propriedade .length:
// Todos os arrays do JavaScript possuem essa propriedade, que indica a quantidade de elementos do array.
// Como utilizar os métodos .push() e .pop():
// Vimos como realizar as primeiras alterações em um array, como adicionar um novo item ao final ou remover o último item.

