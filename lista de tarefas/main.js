$(document).ready(function () {
  const $form = $('#todo-form');
  const $input = $('#todo-input');
  const $list = $('#todo-list');
  const $error = $('#error-message');
  const $counter = $('#task-count');

  function updateCounter() {
    const count = $list.find('li:not(.completed)').length;
    $counter.text(`${count} tarefa${count !== 1 ? 's' : ''} pendente${count !== 1 ? 's' : ''}`);
  }

  $form.on('submit', function (e) {
    e.preventDefault();
    const text = $input.val().trim();

    if (text === '') {
      $error.fadeIn(200).delay(2000).fadeOut(200);
      return;
    }

    const $item = $(`
      <li>
        <span class="task-text">${text}</span>
        <button class="remove-btn" title="Remover tarefa">✖</button>
      </li>
    `);

    $list.append($item.hide().slideDown(300));
    $input.val('');
    updateCounter();
  });

  $list.on('click', '.task-text', function () {
    $(this).closest('li').toggleClass('completed');
    updateCounter();
  });

  $list.on('click', '.remove-btn', function () {
    $(this).closest('li').slideUp(300, function () {
      $(this).remove();
      updateCounter();
    });
  });
});
