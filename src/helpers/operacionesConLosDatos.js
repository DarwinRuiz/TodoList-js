const tareas = localStorage.getItem("tareas");
const listaDeTareas = JSON.parse(tareas);

const obtenerTodasLasTareas = () => {
  return listaDeTareas;
};

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
  const tareasConCambios = listaDeTareas.map((elemento) => {
    if (elemento.id == tareaConCambios.id) {
      elemento.tarea = tareaConCambios.tarea;
      elemento.tipo = tareaConCambios.tipo;
      elemento.prioridad = tareaConCambios.prioridad;
    }
  });

  localStorage.setItem("tareas", JSON.stringify(tareasConCambios));
};

const eliminarTarea = (idTarea) => {
  const tareasActualizadas = listaDeTareas.filter((elemento) => elemento.id !== idTarea );
  localStorage.setItem("tareas", JSON.stringify(tareasActualizadas));
};

export { obtenerTodasLasTareas, guardarTarea, editarTarea, eliminarTarea };
