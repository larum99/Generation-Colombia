class Producto {
    constructor(nombre, precio, categoria) {
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
    }

    calcularTotal() {
        return this.precio + this.precio * 0.19;
    }

    aplicarDescuento(porcentaje) {
        return this.precio - this.precio * porcentaje / 100;
    }

    resumen() {
        return `
                Nombre: ${this.nombre}
                Categoría: ${this.categoria}
                Precio base: ${this.precio}
                `
    }

    tarjeta() {
        return `
                Nombre: ${this.nombre}
                Categoría: ${this.categoria}
                Precio con IVA: ${this.calcularTotal()}`
    }
}

class ProductoDigital extends Producto {
    constructor(nombre, precio, licencia) {
        super(nombre, precio, "Digital");
        this.licencia = licencia;
    }

    calcularTotal() {
        return this.precio;
    }

    tarjeta() {
        return `
                ${super.tarjeta()}
                Tipo de licencia: ${this.licencia}`
    }
}

export { Producto, ProductoDigital };