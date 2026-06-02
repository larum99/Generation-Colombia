export function calcularTotalCarrito(productos) {
    let total = 0;

    for (const producto of productos) {
        total += producto.calcularTotal();
    }

    return total;
}