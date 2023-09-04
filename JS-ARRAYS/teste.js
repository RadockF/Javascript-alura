// const numero1 = 50;
// const numero2 = 43;
// const numero3 = 12;

// // utilizando array
// const numeros = [50, 43, 12];

// const arrayDeNumeros = [50, 43, 12];
// const arrayDeStrings = ["banana", "alura", "Juliana"];

// // índice     0   1   2   3
// const nums = [50, 43, 12, 98];
// console.log(nums.length) //4

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

// Remover e incluir novos elementos em um array com splice(); sendo que esse método permite remover elementos de qualquer posição do array.
// animaisDoAquario = ['🐋', '🐙', '🐬', '🦈']

// animaisDoAquario.splice(1,0,'🐠')
// animaisDoAquario.splice(3,2,'🐟')

// console.log(animaisDoAquario)


// const nomes = ["Ana", "Juliana", "Leonardo"];
// const idades = [30, 35, 28];
// const faculdade = [false, true, true];

// const funcionarios = [nomes, idades, faculdade];

// console.log ( `O nome do alune é ${funcionarios[0][1]} e a idade dele é ${funcionarios[1][1]} `)

// Utilizar os métodos includes() e indexOf():
// O includes() retorna true ou false, dependendo se o valor passado como parâmetro está presente ou não no array. O indexOf() retorna a posição no array do valor passado como parâmetro. Utilizamos esses dois métodos em conjunto para primeiro verificar se um aluno estava presente em uma lista, e depois obter sua posição para buscar sua nota em outra lista.
// Utilizar a estrutura for e entender seu funcionamento:
// O for é constituído de três expressões: criação da variável de controle; condição de execução; modificação da variável de controle. Essas três expressões juntas definem quantas vezes o bloco do for será executado.
// Utilizar a estrutura for of e entender a diferença em relação ao for:
// O for of sempre é utilizado para percorrer todos os elementos de um array, do início ao fim. Para esses casos, o for of é mais conciso que o for.

Array 
É utilziado para guardar dados, agrupar e organizar.
Ter um espaço fixo na memoria do pc, porem não são fixos os tamanhos e os tipos, pois podem ser alterados ,retirados, mudados ou removidos. 
Um bom exemplo é - são varios vagões de trens, cada um tem um elemento ou estrutra especifica dentro dele, seja objeto, numero, string.






POO
Linguagens que tem POO - C++/Java/PHP/Python/Ruby e Microsoft/Apple tem suas linguagens com POO

Vatagens 
COMERNada
C - confiavel - Ele isola as partes, para caso uma parte seja alterada, outra não ser afetada.
O - oportuno - Por estar em varias partes, elas sao desenvolvidas idenpentes das outras partes.
M - manutenivel - a manutenção é mais facil
E - extensivel - Sempre está atualizando e se desenvolvendo
R - reutilizavel - Ao criar uma classe em um projeto posso utilizar em outro projeto.
N - natural - Sempre facil de entender, a funcionalidade é mais simples do que os detalhes de implementação.


Classes
Uma Classe é uma descrição de um conjunto de objetos que compartilham os mesmos atributos, operações, relacionamentos e semântica.
Uma classe precisa responder 3 perguntas:
coisas que eu tenho? - Atributo
Um atributo é uma variável que pertence a um objeto. Os dados de um objeto são armazenados nos seus atributos.

coisas que eu faço? - Metodo 
Os métodos são as ações que o objeto pode realizar

como estou agora ? - Estado 
O estado de um objeto é representado pelas variáveis definidas na própria classe.

Sendo eles:
Concreto: que existe fisicamente.
Abstrato: é um conceito.
