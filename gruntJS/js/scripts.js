// Função para mostrar mensagem de boas-vindas
function showWelcomeMessage(name) {
  console.log(`Bem-vindo, ${name}! Este é seu site incrível.`);
}

// Objeto com configurações
const siteConfig = {
  name: "Meu Site",
  version: "1.0.0",
  author: "Você",
  features: ["Responsivo", "Rápido", "Moderno"]
};

// Inicialização do site
document.addEventListener('DOMContentLoaded', function() {
  // Mostra mensagem no console
  showWelcomeMessage(siteConfig.author);
  
  // Adiciona evento aos botões
  const buttons = document.querySelectorAll('.button');
  
  buttons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('Botão clicado!');
      this.style.backgroundColor = '#e74c3c';
    });
  });
  
  // Cria um elemento dinamicamente
  const footer = document.createElement('footer');
  footer.innerHTML = `<p>${siteConfig.name} v${siteConfig.version}</p>`;
  document.body.appendChild(footer);
});

// Função utilitária para calcular
function calculate(a, b, operation) {
  switch(operation) {
    case 'add':
      return a + b;
    case 'subtract':
      return a - b;
    case 'multiply':
      return a * b;
    case 'divide':
      return a / b;
    default:
      return NaN;
  }
}