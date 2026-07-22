SELECT c.nombre, ts.nombre, os.descripcion, os.costo, os.estado 
FROM ordenes_servicio os 
INNER JOIN tipos_servicio ts 
ON os.tipo_servicio_id = ts.id_tipo_servicio
INNER JOIN clientes c 
ON os.cliente_id = c.id_cliente

SELECT *
FROM ordenes_servicio os 
INNER JOIN clientes c 
ON c.id_cliente = os.cliente_id 
WHERE c.id_cliente  = 1;

SELECT DISTINCT c.nombre
FROM clientes c 
INNER JOIN ordenes_servicio os 
ON c.id_cliente = os.cliente_id 

SELECT c.nombre,
COUNT(os.id_orden) AS cantidad_ordenes_cliente
FROM clientes c
INNER JOIN ordenes_servicio os 
ON c.id_cliente = os.cliente_id 
GROUP BY c.nombre, c.id_cliente 

SELECT c.nombre AS cliente_sin_orden
FROM clientes c
LEFT JOIN ordenes_servicio os 
ON c.id_cliente = os.cliente_id 
WHERE os.id_orden IS NULL;




