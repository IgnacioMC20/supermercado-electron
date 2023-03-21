
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const employeeId = document.querySelector('#employee-id').value;
  const password = document.querySelector('#password').value;

  console.log({employeeId, password})
});