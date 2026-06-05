const categoria = document.getElementById("categoria");
const otraCategoria = document.getElementById("otraCategoria");
const textoTarea = document.getElementById("textoTarea");
const mensajeError = document.getElementById("mensajeError");
const total = document.getElementById("total");
const completadas = document.getElementById("completadas");
const botonAgregar = document.getElementById("botonAgregar");
const listaTareas = document.getElementById("listaTareas");

const tareas = [];
let tareasCompletadas = 0;

categoria.addEventListener("change", mostrarOtraCategoria);

function mostrarOtraCategoria() {
    console.log("Categoria seleccionada: ", categoria.value);

    if (categoria.value === "otra") {
        otraCategoria.style.display = "block";
    } else {
        otraCategoria.style.display = "none";
    }
}

botonAgregar.addEventListener("click", agregarTarea);

function agregarTarea() {
    console.log("Agregando tarea");

    const texto = textoTarea.value.trim();

    if (texto === "") {
        mensajeError.textContent = "Debes escribir una tarea";

        return;
    }

    const categoriaSeleccionada = categoria.value;

    let nombreCategoria = categoriaSeleccionada;

    if (categoriaSeleccionada === "otra") {
        nombreCategoria = otraCategoria.value.trim();
    }

    if (categoriaSeleccionada === "otra" && nombreCategoria === "") {
        mensajeError.textContent = "Debes escribir una categoría";
        return;
    }

    mensajeError.textContent = "";

    const tarea = {
        texto: texto,
        categoria: nombreCategoria,
        completada: false,
        urgente: false
    };

    tareas.push(tarea);

    renderizarTareas()
    actualizarContador();

    console.log("Tareas actuales: ", tareas);

    textoTarea.value = "";
    otraCategoria.value = "";
}

function renderizarTareas() {

    listaTareas.innerHTML = "";

    for (let i = 0; i < tareas.length; i++) {

        const tarea = tareas[i];

        const li = document.createElement("li");
        li.classList.add("tarea");

        if (tarea.completada) {
            li.classList.add("completada");
        }

        const contenido = document.createElement("span");

        const icono = document.createElement("i");
        icono.className = obtenerIcono(tarea.categoria);

        contenido.append(icono);
        contenido.append(` ${tarea.texto}`);

        const contenedorBotones = document.createElement("div");
        contenedorBotones.classList.add("botones");

        const botonHecha = document.createElement("button");
        botonHecha.textContent = "Hecha";

        botonHecha.addEventListener("click", function () {

            tareas[i].completada =
                !tareas[i].completada;

            renderizarTareas();
            actualizarContador();

        });

        const botonUrgente = document.createElement("button");
        botonUrgente.textContent = "Urgente";

        botonUrgente.addEventListener("click", function () {

            tareas[i].urgente =
                !tareas[i].urgente;

            renderizarTareas();
            actualizarContador();

        });

        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";

        botonEliminar.addEventListener("click", function () {

            const confirmar =
                confirm("¿Deseas eliminar esta tarea?");

            if (confirmar) {

                tareas.splice(i, 1);

                renderizarTareas();
                actualizarContador();

            }

        });

        contenedorBotones.append(
            botonHecha,
            botonUrgente,
            botonEliminar
        );

        li.append(contenido);
        li.append(contenedorBotones);

        if (tarea.urgente) {
            li.classList.add("urgente");
        }

        listaTareas.append(li);
    }
}

function obtenerIcono(categoria) {

    switch (categoria) {

        case "trabajo":
            return "fa-solid fa-briefcase";

        case "estudio":
            return "fa-solid fa-book";

        case "personal":
            return "fa-solid fa-house";

        case "urgente":
            return "fa-solid fa-triangle-exclamation";

        default:
            return "fa-solid fa-tag";
    }

}

function actualizarContador() {

    let tareasCompletadas = 0;

    for (const tarea of tareas) {

        if (tarea.completada) {
            tareasCompletadas++;
        }

    }

    completadas.textContent = tareasCompletadas;
    total.textContent = tareas.length;
}

