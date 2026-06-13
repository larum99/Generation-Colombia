const botonesAgregar = document.querySelectorAll('.btn-agregar');
const listaCarrito = document.querySelector('#lista-carrito');
const mensajeVacio = document.querySelector('#msg-vacio');
const badge = document.querySelector('#badge');
const total = document.querySelector('#total');
const btnVaciar = document.querySelector('#btn-vaciar');

let cantidadItems = 0;
let totalAcumulado = 0;

botonesAgregar.forEach((boton) => {

    boton.addEventListener('click', () => {

        const nombre = boton.dataset.nombre;
        const precio = Number(boton.dataset.precio);

        agregarAlCarrito(nombre, precio);

    });

});

btnVaciar.addEventListener('click', vaciarCarrito);

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
        eliminarItem(li, precio);
    });

    cantidadItems++;
    updateBadge();

    totalAcumulado += precio;
    updateTotal();

}

function updateBadge() {
    badge.textContent = cantidadItems;
}

function eliminarItem(li, precio) {

    li.remove();

    cantidadItems--;
    updateBadge();

    totalAcumulado -= precio;
    updateTotal();

    if (cantidadItems === 0) {
        mensajeVacio.style.display = 'block';
    }
}

function updateTotal() {
    total.textContent =
        '$' +
        totalAcumulado.toLocaleString('es-CO', {
            minimumFractionDigits: 2
        });
}

function vaciarCarrito() {

    listaCarrito
        .querySelectorAll('li:not(#msg-vacio)')
        .forEach((li) => {
            li.remove();
        });

    totalAcumulado = 0;
    cantidadItems = 0;

    updateTotal();
    updateBadge();

    mensajeVacio.style.display = 'block';
}