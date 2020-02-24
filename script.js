const forms = document.querySelectorAll('form');
const backButtons = document.querySelectorAll('.back');
const stepCounter = document.querySelector('.step-counter');

forms.forEach(form => {
  form.classList.toggle('hidden');

  form.addEventListener('submit', e => {
    e.preventDefault();

    if (form.nextElementSibling.tagName === 'FORM') {
      const nextForm = form.nextElementSibling;
      const nextFormInput = nextForm.querySelector('.input');

      stepCounter.innerText = parseInt(stepCounter.innerText) + 1;

      form.classList.toggle('hidden');
      nextForm.classList.toggle('hidden');

      nextFormInput.focus();
    } else {
      alert('regisration successful');
    }
  });
});

backButtons.forEach(button => {
  button.addEventListener('click', e => {
    const form = e.target.parentElement;

    if (form.previousElementSibling.tagName === 'FORM') {
      const prevForm = form.previousElementSibling;
      const prevFormInput = prevForm.querySelector('.input');

      stepCounter.innerText = parseInt(stepCounter.innerText) - 1;

      prevForm.classList.toggle('hidden');
      form.classList.toggle('hidden');

      prevFormInput.focus();
    } else {
      return;
    }
  });
});
