const tareas = localStorage.getItem("tareas");
const listaDeTareas = JSON.parse(tareas);

const obtenerTodasLasTareas = () => {
  return listaDeTareas;
};

const buscarPorId = ( id ) => {
    if(listaDeTareas != null){
        return listaDeTareas.find( elemento => elemento.id == id);
    }
}

const guardarTarea = (nuevaTarea) => {
  if (listaDeTareas !== null) {
    let todasLasTareas = [...listaDeTareas, nuevaTarea];
    localStorage.setItem("tareas", JSON.stringify(todasLasTareas));
  } else {
    let todasLasTareas = [nuevaTarea];
    localStorage.setItem("tareas", JSON.stringify(todasLasTareas));
  }
};

const editarTarea = (tareaConCambios) => {

    for(let i = 0; i < listaDeTareas.length; i ++) {
        if( listaDeTareas[i].id == tareaConCambios.id ) {
            listaDeTareas[i].tarea = tareaConCambios.tarea;
            listaDeTareas[i].tipo = tareaConCambios.tipo;
            listaDeTareas[i].prioridad = tareaConCambios.prioridad;
        }
    }

  localStorage.setItem("tareas", JSON.stringify(listaDeTareas));
};

const eliminarTarea = (idTarea) => {
  const tareasActualizadas = listaDeTareas.filter((elemento) => elemento.id != idTarea );
  localStorage.setItem("tareas", JSON.stringify(tareasActualizadas));
};

export { obtenerTodasLasTareas, guardarTarea, editarTarea, eliminarTarea, buscarPorId };
