// Array de objetos com alunos e suas notas
const alunos = [
  { nome: 'Ana', nota: 8.5 },
  { nome: 'Carlos', nota: 5.9 },
  { nome: 'Mariana', nota: 7.2 },
  { nome: 'Pedro', nota: 6.0 },
  { nome: 'Julia', nota: 4.8 },
  { nome: 'Lucas', nota: 9.1 },
  { nome: 'Beatriz', nota: 6.7 }
];

// Função que filtra alunos com nota maior ou igual a 6
const filtrarAprovados = (listaAlunos) => {
  return listaAlunos.filter(aluno => aluno.nota >= 6);
};

// Chamada da função e exibição do resultado
const aprovados = filtrarAprovados(alunos);
console.log('Alunos aprovados:');
console.log(aprovados);