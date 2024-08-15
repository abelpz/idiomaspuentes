//Guardar elemento
const botonAgregar = document.getElementById("agregar");
const elementoAsistentes = document.getElementById("asistentes");
const inputNombre = document.getElementById("nombre");

const asistentes = []

botonAgregar.onclick = () => {
  botonAgregar.innerText = "agregar otro";
  asistentes.push(inputNombre.value);
  elementoAsistentes.innerText = asistentes.join(", ");
  inputNombre.value = "";
  inputNombre.focus();
}

//Si quiero realizar una accion cuando el usuario haga click en un elemento
const boton = document.getElementById("idDeMiBoton");
boton.onclick = () => {
  //Todo las acciones que quiero que haga mi funcion cuando haga click
}

//Cambiar el texto dentro de un elemento (no incluye formularios)
const elemeto = document.getElementById("idDeMiElemento");
elemento.innerText = "TEXTO NUEVO";

//Obtener el valor de un input text (un elemento de formulario)
const elementoInput = document.getElementById("idDeMiElementoInput");

//Guardar el valor del elemento
const valor = elementoInput.value;
console.log(valor);

//Cambiar el valor del elemento
elementoInput.value = "NUEVO VALOR DE MI ELEMENTO INPUT"