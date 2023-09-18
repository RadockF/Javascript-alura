// # Objetos: 
// No JavaScript, objetos são como recipientes que podem conter dados (propriedades) e funções (métodos) relacionados a um determinado assunto. 
// Por exemplo, você pode criar um objeto chamado "Carro" que contém informações como cor, modelo e métodos como ligar e desligar.

// # Classes: 
// Classes são como moldes para criar objetos. Elas definem as propriedades e métodos que os objetos pertencentes a essa classe terão. 
// Por exemplo, você pode ter uma classe chamada "Pessoa" que define propriedades como nome e idade, e métodos como cumprimentar.

// # Instâncias: 
// Uma instância é um objeto específico criado a partir de uma classe. É como se a classe fosse um modelo, e uma instância fosse um objeto real baseado nesse modelo. 
// Por exemplo, você pode criar uma instância da classe "Pessoa" chamada "João" com o nome "João" e a idade "30".

// # Encapsulamento: 
// Encapsulamento é o conceito de agrupar dados (propriedades) e as operações relacionadas (métodos) em um único objeto. Isso ajuda a manter o código organizado e evita que dados sejam acessados ou modificados de maneira incorreta.

// # Herança: 
// Herança permite que você crie uma nova classe com base em uma classe existente. A nova classe herda as propriedades e métodos da classe pai, permitindo que você reutilize código e estenda funcionalidades.

// # Polimorfismo:
//  O polimorfismo permite que objetos de classes diferentes respondam a uma mesma interface de maneira única. 
//  Isso significa que, mesmo que objetos sejam de tipos diferentes, eles podem compartilhar nomes de métodos comuns e se comportar de maneira adequada a cada tipo.


//  # Definindo uma classe 'Pessoa'
class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  cumprimentar() {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }
}

// Criando uma instância da classe 'Pessoa'
const joao = new Pessoa('João', 30);

// Chamando o método 'cumprimentar' da instância
joao.cumprimentar();





// Node.js é uma tecnologia de programação que permite criar aplicativos de servidor, ou seja, programas de computador que lidam com solicitações e respostas na internet. Aqui estão alguns conceitos-chave:

// Servidor: Um servidor é um computador ou software que fornece recursos, como páginas da web ou dados, para outros dispositivos ou programas chamados clientes. Node.js permite que você crie servidores de forma eficiente.

// JavaScript: Node.js usa a linguagem de programação JavaScript. JavaScript é uma linguagem amplamente usada na web para criar interatividade em sites, mas com o Node.js, você pode usá-lo no servidor também.

// Backend: O backend é a parte de um aplicativo ou site que lida com a lógica de negócios, o armazenamento de dados e a comunicação com o banco de dados. Com Node.js, você pode construir o backend de um aplicativo.

// NPM (Node Package Manager): O NPM é uma ferramenta que acompanha o Node.js e permite que você instale e gerencie pacotes de código reutilizável criados por outras pessoas. Isso economiza tempo e facilita o desenvolvimento.

// Módulos: No Node.js, você pode dividir seu código em pequenos módulos. Cada módulo é uma unidade independente que realiza uma tarefa específica. Isso torna o código mais organizado e fácil de manter.

// Assíncrono: Uma das características mais poderosas do Node.js é sua capacidade de executar tarefas de forma assíncrona. Isso significa que o Node.js pode lidar com muitas solicitações ao mesmo tempo sem bloquear o fluxo de execução.

// APIs: Node.js fornece APIs (Interfaces de Programação de Aplicativos) para criar servidores web, acessar bancos de dados, fazer solicitações HTTP e muito mais. Essas APIs simplificam o desenvolvimento de aplicativos de servidor.

// Event Loop: O Node.js possui um mecanismo chamado Event Loop, que permite que ele seja altamente eficiente ao lidar com muitas conexões simultâneas. Isso o torna adequado para aplicativos em tempo real, como bate-papo ou jogos online.

// Comunidade e Ecossistema: Node.js tem uma comunidade ativa e uma grande quantidade de módulos e bibliotecas prontos para uso, o que acelera o desenvolvimento de aplicativos.

// Em resumo, o Node.js é uma plataforma que permite criar servidores e aplicativos de backend usando JavaScript. 
// Ele é amplamente utilizado na construção de aplicativos web, APIs, jogos online e muito mais, graças à sua eficiência e escalabilidade. É uma escolha popular para desenvolvedores que desejam criar aplicativos rápidos e escaláveis na web.