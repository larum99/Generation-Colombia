class Empleado {
    constructor(nombre, cargo, salario, activo = true){
        this.nombre = nombre;
        this.cargo = cargo;
        this.salario =  salario;
        this.activo = activo;
    }

    presentarse(){
        return `Hola soy ${this.nombre} y mi cargo es ${this.cargo}`;
    }

    calcularSalarioAnual(){
        return this.salario * 12;
    }

    desactivar(){
        return `El empleado fue desactivado. Activo: ${this.activo = false}`;
    }

    info(){
        return `
                Nombre: ${this.nombre}
                Cargo: ${this.cargo}
                Salario: ${this.salario}
                Activo: ${this.activo}`
    }
}

class Lider extends Empleado {
    constructor(nombre, salario, equipo, activo = true) {
        super(nombre, 'Líder de equipo', salario, activo);
        this.equipo = equipo;
    }

    presentarEquipo(){
        return `Mi equipo está conformado por ${this.equipo.join(", ")}.`;
    }

    agregarMiembro(nombre){
        this.equipo.push(nombre);
        return `${nombre} fue agregado/a al equipo.`
    }

    info(){
        return `
                Nombre: ${this.nombre}
                Cargo: ${this.cargo}
                Salario: ${this.salario}
                Activo: ${this.activo}
                Cantidad de personas en el equipo: ${this.equipo.length}`
    }
}


//empleados

const empleado1 = new Empleado('Laura', 'Backend developer', 2000000);

const empleado2 = new Empleado('Mariana', 'Nurse', 50000000);

const empleado3 = new Empleado('Marcela', 'Nurse', 3000000);

const empleado4 = new Empleado('Michael', 'Frontend developer', 40000000);

console.log(empleado1);
console.log(empleado1.presentarse());
console.log('Salario Anual', empleado1.calcularSalarioAnual());
console.log(empleado1.desactivar());
console.log(empleado1);
console.log(empleado1.info());

console.log(empleado2.presentarse());
console.log('Salario anual:', empleado2.calcularSalarioAnual());
console.log(empleado2.info());

console.log(empleado3.presentarse());
console.log('Salario anual:', empleado3.calcularSalarioAnual());
console.log(empleado3.info());


// líderes

const lider1 = new Lider('Mónica', 12000, ['Carlos', 'José'])

const lider2 = new Lider('Ana', 15000, ['Camilo', 'Juan', 'Steven'])

console.log(lider1);
console.log(lider1.agregarMiembro('Camila'));
console.log(lider1.presentarEquipo());
console.log(lider1.info());

console.log(lider2.calcularSalarioAnual());
console.log(lider2.desactivar());
console.log(lider2.info());


const empleados = [empleado1, empleado2, empleado3, empleado4];

let costoMensual = 0;

for (const empleado of empleados) {
    costoMensual += empleado.salario;
}

console.log('Costo mensual de nómina:', costoMensual);

const costoAnual = costoMensual * 12;

console.log('Costo anual de nómina:', costoAnual);

empleado4.desactivar();

console.log('Empleado desactivado');
console.log(empleado4.info());

console.log('Líder 1');
console.log(lider1.info());
console.log(lider1.presentarEquipo());

console.log('Líder 2');
console.log(lider2.info());
console.log(lider2.presentarEquipo());
