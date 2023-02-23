const keyboardButtons = document.querySelectorAll('.keyboard button');
const textArea = document.querySelector('#text-area');

keyboardButtons.forEach(button => {
  button.addEventListener('click', () => {
    textArea.value += button.textContent;
  });
});

textArea.focus();
