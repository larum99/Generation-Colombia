INSERT INTO clientes (nombre, ciudad, telefono, estado)
VALUES 
('Laura Barona Saavedra', 'Tuluá', '+573172141441', 'activo'),
('Carlos Ramírez', 'Cali', '+573102345678', 'activo'),
('María González', 'Bogotá', '+573154567890', 'inactivo'),
('Andrés López', 'Medellín', '+573187654321', 'activo'),
('Sofía Martínez', 'Pereira', '+573203456789', 'activo');

INSERT INTO tipos_servicio (nombre, descripcion, costo_base)
VALUES 
('Mantenimiento', 'Revisión preventiva de electrodomésticos', 85000),
('Instalación', 'Instalación de equipos y dispositivos', 120000.00),
('Soporte técnico', 'Diagnóstico y solución de fallas técnicas', 95000.00),
('Reparación', 'Reparación de equipos con fallas', 150000.00),
('Configuración', 'Configuración inicial y puesta en marcha de equipos', 70000.00);

INSERT INTO ordenes_servicio (fecha_orden, descripcion, costo, estado, cliente_id, tipo_servicio_id)
VALUES
('2026-07-14', 'Revisión preventiva de aire acondicionado.', 85000.00, 'finalizada', 1, 1),
('2026-07-15', 'Instalación de impresora multifuncional.', 120000.00, 'en proceso', 3, 2),
('2026-07-16', 'Diagnóstico de computador que no enciende.', 95000.00, 'pendiente', 4, 3),
('2026-07-17', 'Reparación de horno microondas con falla eléctrica.', 150000.00, 'finalizada', 5, 4),
('2026-07-18', 'Configuración inicial de red Wi-Fi empresarial.', 70000.00, 'en proceso', 6, 5);


