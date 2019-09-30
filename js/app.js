// variables
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const btnEnviar = document.getElementById('enviar');


// event listener
eventListeners();

function eventListeners(){

  document.addEventListener('DOMContentLoaded', inicioApp);

  // Campos del formulario
  email.addEventListener('blur', validarCampo);
  asunto.addEventListener('blur', validarCampo);
  mensaje.addEventListener('blur', validarCampo);

}

// functions

function inicioApp(){
  // deshabilitar el envio
  btnEnviar.disabled = true;
}

function validarCampo(){
  // Se valida la longitud del texto y que no este vacio
  validarLongitud(this);

  // Validar el email
  if(this.type === 'email'){
    validarEmail(this);
  }

  let errores = document.querySelectorAll('.error');

  if(email.value !== '' && asunto.value !== '' && mensaje.value !== ''){
    if(errores.length === 0){
      btnEnviar.disabled = false;
    }
  }

}

function validarLongitud(campo){
  if(campo.value.length > 0){
    campo.style.borderBottomColor = 'green';
    campo.classList.remove('error');
  } else {
    campo.style.borderBottomColor = 'red';
    campo.classList.add('error');
  }
}


function validarEmail(campo){
  if(mensaje.indexOf('@') !== -1){
    campo.style.borderBottomColor = 'green';
    campo.classList.remove('error');
  } else {
    campo.style.borderBottomColor = 'red';
    campo.classList.add('error');
  }
}
