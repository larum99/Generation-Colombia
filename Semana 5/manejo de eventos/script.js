const botonesAgregar = document.querySelectorAll('.btn-agregar');
const listaCarrito = document.querySelector('#lista-carrito');
const mensajeVacio = document.querySelector('#msg-vacio');
const badge = document.querySelector('#badge');

let cantidadItems = 0;

botonesAgregar.forEach((boton) => {

    boton.addEventListener('click', () => {

        const nombre = boton.dataset.nombre;
        const precio = boton.dataset.precio;

        agregarAlCarrito(nombre, precio);

    });

});

function agregarAlCarrito(nombre, precio) {

    mensajeVacio.style.display = 'none';

    const li = document.createElement('li');

    li.classList.add(
        'list-group-item',
        'd-flex',
        'justify-content-between',
        'align-items-center'
    );

    li.innerHTML = `
        <span>
            ${nombre} - $${precio}
        </span>

        <button class="btn btn-danger btn-sm btn-eliminar">
            X
        </button>
    `;

    listaCarrito.appendChild(li);

    const botonEliminar = li.querySelector('.btn-eliminar');

    botonEliminar.addEventListener('click', () => {
        eliminarItem(li);
    });

    cantidadItems++;
    updateBadge();

}

function updateBadge() {
    badge.textContent = cantidadItems;
}

function eliminarItem(li) {

    li.remove();

    cantidadItems--;

    updateBadge();

    if (cantidadItems === 0) {
        mensajeVacio.style.display = 'block';
    }

}