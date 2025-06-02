// Validação simples do formulário de contato com feedback
(() => {
  'use strict';

  const form = document.getElementById('contactForm');
  const feedback = document.getElementById('formFeedback');

  form.addEventListener('submit', event => {
    event.preventDefault();
    event.stopPropagation();

    form.classList.add('was-validated');

    if (!form.checkValidity()) {
      feedback.style.display = 'none';
      return;
    }

    // Simula envio (exemplo estático, pode invocar API real aqui)
    feedback.className = 'alert alert-success mt-3';
    feedback.textContent = 'Mensagem enviada com sucesso! Obrigado pelo contato.';
    feedback.style.display = 'block';

    form.reset();
    form.classList.remove('was-validated');
  });
})();