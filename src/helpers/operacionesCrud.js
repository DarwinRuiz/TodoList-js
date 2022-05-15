import { guardarTarea, editarTarea, eliminarTarea, buscarPorId } from "./operacionesConLosDatos.js";

let idDeTarea = "";

const guardarDatosDeTarea = ( ) => {
    
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

    if(buscarPorId(idDeTarea) !== null && buscarPorId(idDeTarea) !== undefined) {
        editarTarea(nuevaTarea);
    } else {
        guardarTarea(nuevaTarea);
    }
}

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

export {
    guardarDatosDeTarea,
    eliminarTareaDeLista,
    editarTareaDeLista
}