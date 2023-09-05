const nomes = ["Evaldo", "Mari", "Camis"];

nomes.forEach(function(nome){
    console.log(nome);
})

// arrow function o mais usado 
nomes.forEach((nome) => {
    console.log(nome);
})

function imprimeNome (nome){
    console.log(nome);
}

nomes.forEach(imprimeNome);