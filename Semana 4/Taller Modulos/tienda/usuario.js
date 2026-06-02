class Usuario {
    constructor(nombre, email, rol = 'cliente', activo = true){
        this.nombre = nombre;
        this.email = email;
        this.rol = rol;
        this.activo = activo;
    }

    saludo() {
        return `Mi nombre es ${this.nombre} y mi rol ${this.rol}.`
    }

    desactivar() {
        return `El usuario fue desactivado. Activo: ${this.activo = false}`
    }

    resumen() {
        return `
                Nombre: ${this.nombre}
                Email: ${this.email}
                Rol: ${this.rol}
                Activo: ${this.activo}`
    }
}

class UsuarioVIP extends Usuario {
    constructor(nombre, email, membresia, activo = true){
        super(nombre, email, 'Cliente VIP', activo);
        this.membresia = membresia;
    }

    saludo() {
        return `${super.saludo()} Tengo la membresía ${this.membresia}`
    }

    beneficios() {
        return `Este nivel tiene los beneficios...`
    }
}

export { Usuario, UsuarioVIP };