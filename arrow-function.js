function apresentar(nome){
    return `meu nomeé ${nome}`;
}

//Arrow Function
const apresentarArrow = nome => `meu nomeé ${nome}`;
const soma = (num1, num2) => num1 + num2;

// Arrow function com + de 1 linha de instrução

const somaNumerosPequenos = (num1, num2) => {
    if (num1 > 10 || num2 > 10){
        return "somente numeros de 1 a 9"
    } else {
        return num1 + num2; 
    }
}

console.log(somaNumerosPequenos(2,5))

// hoisting: arrow function se comporta como expressão 

//operador maior ou igual que - >=