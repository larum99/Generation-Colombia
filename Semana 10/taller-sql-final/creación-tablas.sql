CREATE DATABASE taller_sql;

USE taller_sql;
CREATE TABLE clientes (
    id_cliente INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100),
    ciudad VARCHAR(100),
    telefono VARCHAR(20),
    estado ENUM('activo', 'inactivo')
);

CREATE TABLE tipos_servicio (
id_tipo_servicio INT AUTO_INCREMENT PRIMARY KEY,
nombre VARCHAR(100),
descripcion VARCHAR(200),
costo_base DECIMAL(10, 2));

CREATE TABLE ordenes_servicio (
    id_orden INT AUTO_INCREMENT PRIMARY KEY,
    fecha_orden DATE, 
    descripcion VARCHAR(200), 
    costo DECIMAL(10, 2), 
    estado ENUM('pendiente', 'en proceso', 'finalizada'),
    cliente_id INT,
    tipo_servicio_id INT,
    FOREIGN KEY (cliente_id) REFERENCES clientes(id_cliente),
    FOREIGN KEY (tipo_servicio_id) REFERENCES tipos_servicio(id_tipo_servicio)
);
