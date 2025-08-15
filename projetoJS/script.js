// Classe abstrata (abstração) - Animal
class Animal {
  constructor(nome, idade) {
    if (new.target === Animal) {
      throw new Error("Animal é uma classe abstrata e não pode ser instanciada diretamente.");
    }
    this.nome = nome;
    this.idade = idade;
  }

  // Método abstrato (será implementado pelas classes filhas)
  fazerSom() {
    throw new Error("Método 'fazerSom' deve ser implementado pela classe filha");
  }

  // Método concreto (compartilhado por todas as classes filhas)
  descrever() {
    return `${this.nome} tem ${this.idade} anos.`;
  }
}

// Primeira classe herdeira - Cachorro
class Cachorro extends Animal {
  constructor(nome, idade, raca) {
    super(nome, idade);
    this.raca = raca;
  }

  fazerSom() {
    return "Au au!";
  }

  abanarRabo() {
    return `${this.nome} está abanando o rabo!`;
  }

  descrever() {
    return `${super.descrever()} É um cachorro da raça ${this.raca}.`;
  }
}

// Segunda classe herdeira - Gato
class Gato extends Animal {
  constructor(nome, idade, cor) {
    super(nome, idade);
    this.cor = cor;
  }

  fazerSom() {
    return "Miau!";
  }

  arranharMoveis() {
    return `${this.nome} está arranhando os móveis!`;
  }

  descrever() {
    return `${super.descrever()} É um gato ${this.cor}.`;
  }
}

// Criando três instâncias de objetos
const rex = new Cachorro("Rex", 5, "Labrador");
const luna = new Gato("Luna", 3, "cinza");
const toby = new Cachorro("Toby", 2, "Poodle");

// Testando os métodos
console.log(rex.descrever()); // Rex tem 5 anos. É um cachorro da raça Labrador.
console.log(rex.fazerSom()); // Au au!
console.log(rex.abanarRabo()); // Rex está abanando o rabo!

console.log(luna.descrever()); // Luna tem 3 anos. É um gato cinza.
console.log(luna.fazerSom()); // Miau!
console.log(luna.arranharMoveis()); // Luna está arranhando os móveis!

console.log(toby.descrever()); // Toby tem 2 anos. É um cachorro da raça Poodle.
console.log(toby.fazerSom()); // Au au!