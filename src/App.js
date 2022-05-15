import { obtenerTodasLasTareas } from "./helpers/operacionesConLosDatos.js";
import { guardarDatosDeTarea } from "./helpers/operacionesCrud.js";
import { Tarea } from "./components/Tarea.js";

const contenedorDeLasTareas = document.getElementById("contenedor-listas");


const cargarDatos = () => {
    if (obtenerTodasLasTareas() !== null) {
        const datosDeTareas = obtenerTodasLasTareas();

        datosDeTareas.forEach(tareaAlmacenada => {
            contenedorDeLasTareas.appendChild( Tarea(tareaAlmacenada) );
        });    

      }
}

document.addEventListener("DOMContentLoaded", cargarDatos());

const botonDelFormulario = document.getElementById("btn-agregar");
botonDelFormulario.addEventListener( "click", ( evento ) => {
    evento.preventDefault();
    
    guardarDatosDeTarea();

    location.reload();
})
