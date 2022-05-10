import {
  obtenerTodasLasTareas,
  guardarTarea,
  editarTarea,
  eliminarTarea,
  buscarPorId,
} from "./helpers/operacionesConLosDatos.js";

const contenedorDeLasTareas = document.getElementById("contenedor-listas");

let idDeTarea = "";


const cargarDatos = () => {
    if (obtenerTodasLasTareas() !== null) {
        const datosDeTareas = obtenerTodasLasTareas();
        for( let i = 0; i < datosDeTareas.length; i ++) {
            const lista = document.createElement("div");
            lista.classList.add(datosDeTareas[i].prioridad);
            lista.innerHTML = `<p>
                ${datosDeTareas[i].tarea}
            </p>
            <div class="elementos-tarea">
                <p>ID: ${datosDeTareas[i].id}</p>
                <p>TIPO: ${datosDeTareas[i].tipo}</p>
                <p>PRIORIDAD: ${datosDeTareas[i].prioridad}</p>
            </div>
            `;

            lista.addEventListener("click", (elemento) => {
                if(elemento.target.classList.contains("completo")) {
                    elemento.target.classList.remove("completo");
                } else {
                    elemento.target.classList.add("completo");
                }
            })

            const botonEliminar = document.createElement("button");
            botonEliminar.textContent = "Eliminar";
            botonEliminar.classList.add('btn-eliminar');
            botonEliminar.addEventListener("click", (evento) => {
                eliminarTareaDeLista(evento)
            })

            const botonEditar = document.createElement("button");
            botonEditar.textContent = "Editar";
            botonEditar.classList.add('btn-editar');
            botonEditar.addEventListener("click", (evento) => {
                editarTareaDeLista(evento);
            })

            lista.appendChild(botonEliminar);
            lista.appendChild(botonEditar);

            contenedorDeLasTareas.appendChild(lista);
        }
    
      }
}


document.addEventListener("DOMContentLoaded", cargarDatos());


const botonDelFormulario = document.getElementById("btn-agregar");
botonDelFormulario.addEventListener( "click", ( evento ) => {
    evento.preventDefault();

    const tarea = document.getElementById("tarea").value;
    const tipo = document.getElementById("tipo-tarea").value;
    const prioridad = document.getElementById("prioridad-tarea").value;

    if(idDeTarea === "") {
        idDeTarea = new Date().getTime();
    }

    if(tarea === "" || tarea === " ") {
        document.getElementById("small-tarea").innerText = "Debe de Escribir una Tarea";
        return;
    }

    if(tipo === "Seleccionar") {
        document.getElementById("small-tipo").innerText = "Debe Seleccionar un Tipo de Tarea";
        return;
    }


    if(prioridad === "Seleccionar") {
        document.getElementById("small-prioridad").innerText = "Debe de Seleccionar una Prioridad de Tarea";
        return;
    }
   
    document.getElementById("small-tarea").innerText = "";
    document.getElementById("small-tipo").innerText = "";
    document.getElementById("small-prioridad").innerText = "";
    
    const nuevaTarea = {
        id : idDeTarea,
        tarea: tarea,
        tipo: tipo,
        prioridad: prioridad
    }

    console.log(buscarPorId(idDeTarea))

    if(buscarPorId(idDeTarea) !== null && buscarPorId(idDeTarea) !== undefined) {
        editarTarea(nuevaTarea);
    } else {
        guardarTarea(nuevaTarea);
    }
  
  
   location.reload();
})

const eliminarTareaDeLista = (elemento) => {
    const padreDelBoton = elemento.target.parentNode;
    const ElementoConId = padreDelBoton.firstChild.nextSibling.nextSibling
    const elementoIdTarea = ElementoConId.firstChild.nextSibling;

    const id = elementoIdTarea.textContent.substring(3, elementoIdTarea.textContent.length);

    eliminarTarea(id);
    location.reload();
}

const editarTareaDeLista = (elemento) => {
    const padreDelBoton = elemento.target.parentNode;
    const ElementoConId = padreDelBoton.firstChild.nextSibling.nextSibling
    const elementoIdTarea = ElementoConId.firstChild.nextSibling;

    const id = elementoIdTarea.textContent.substring(3, elementoIdTarea.textContent.length);

    const elementoAEditar = buscarPorId(id);
    idDeTarea = elementoAEditar.id;

    document.getElementById("tarea").value = elementoAEditar.tarea;
    document.getElementById("tipo-tarea").value = elementoAEditar.tipo;
    document.getElementById("prioridad-tarea").value = elementoAEditar.prioridad;

}
