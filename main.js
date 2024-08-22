//Guardar elemento
const botonAgregar = document.getElementById("agregar");
const elementoTareas = document.getElementById("lista");
const inputNombre = document.getElementById("nombre");

const db = window.localStorage;
const tareasIniciales = JSON.parse(db.getItem("listaDeTareas"))

const tareas = tareasIniciales ?? [];

if (tareas.length) {
  mostrarTareas(tareas);
}

botonAgregar.onclick = () => {
  botonAgregar.innerText = "agregar otro";
  tareas.push(inputNombre.value);
  db.setItem("listaDeTareas", JSON.stringify(tareas));
  mostrarTareas(tareas)
  inputNombre.value = "";
  inputNombre.focus();
}

function mostrarTareas(listaTareas) {
  elementoTareas.innerHTML = "";
  listaTareas.forEach((tarea) => {
    elementoTareas.innerHTML += `<div class="tarea">${tarea}</div>`
  });
}