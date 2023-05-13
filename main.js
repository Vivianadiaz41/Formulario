/*const nombre = document.getElementById("usuario");
const formulario = document.getElementById("form");
const parrafo = document.getElementById("warnings");*/

function validarPassword(password) {
  const decimal = /^(?=.*\d)(?=.*[a-z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

  if (password.value.match(decimal)) {
    alert("El password es seguro !");
  } else {
    alert(
      "La  contraseña  debe contener  una minuscula, mayuscula, numero y un caracter especial. Y 8 carácteres como mínimo."
    );
  }
}
