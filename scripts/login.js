// alert('user: 1 \n contra: 12345')

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const employeeId = document.querySelector('#employee-id').value;
  const password = document.querySelector('#password').value;

  console.log({employeeId, password})

  window.comunicacion.login({employeeId, password})
});

function mostrarUsuario() {
  document.getElementById("usuario").style.display = "inline";
  document.getElementById("contrasena").style.display = "inline";
}








// En el archivo HTML
// alert = window.comunicacion.alertShow();