
import { eliminarTareaDeLista, editarTareaDeLista } from "../helpers/operacionesCrud.js";

const Tarea = ( datosDeTareas ) => {
    const elementoDeLista = document.createElement("div");
    elementoDeLista.classList.add(datosDeTareas.prioridad);
    elementoDeLista.innerHTML = `<p>
        ${datosDeTareas.tarea}
    </p>
    <div class="elementos-tarea">
        <p>ID: ${datosDeTareas.id}</p>
        <p>TIPO: ${datosDeTareas.tipo}</p>
        <p>PRIORIDAD: ${datosDeTareas.prioridad}</p>
    </div>
    `;

    elementoDeLista.addEventListener("click", (elemento) => {
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
        eliminarTareaDeLista(evento);
    })

    const botonEditar = document.createElement("button");
    botonEditar.textContent = "Editar";
    botonEditar.classList.add('btn-editar');
    botonEditar.addEventListener("click", (evento) => {
        editarTareaDeLista(evento);
    })

    elementoDeLista.appendChild(botonEliminar);
    elementoDeLista.appendChild(botonEditar);

    return elementoDeLista;
}

export {
    Tarea
}