# Clima Sencillo

Aplicación web ligera que permite a los usuarios buscar el clima actual de una ciudad usando la API pública de Open-Meteo.

## Resumen del proyecto

Esta aplicación ofrece una experiencia simple y directa para consultar datos meteorológicos actuales. El usuario ingresa el nombre de una ciudad, y la aplicación obtiene coordenadas geográficas mediante la API de geocodificación de Open-Meteo y luego solicita el clima actual para esas coordenadas.

## Características

- Búsqueda de clima por nombre de ciudad
- Consulta de coordenadas con la API de geocodificación de Open-Meteo
- Obtención de temperatura actual en grados Celsius
- Obtención de velocidad del viento en km/h
- Visualización de la dirección del viento en grados
- Manejo de errores para entradas vacías, ciudades no encontradas y respuestas API inválidas
- Interfaz de usuario simple y adaptada para uso en navegador

## Instalación

1. Clona o descarga el repositorio.
2. Abre la carpeta del proyecto en tu editor o servidor local.
3. No se necesita un servidor especializado para ejecutar la aplicación, ya que es una página estática.

Si deseas ejecutar las pruebas unitarias:

```bash
npm install
npm test
```

## Uso

1. Abre `index.html` en tu navegador.
2. Escribe el nombre de la ciudad en el campo de búsqueda.
3. Haz clic en el botón `Buscar clima`.
4. Verás los resultados mostrados en la tarjeta de resultados:
   - Ciudad
   - Temperatura en °C
   - Velocidad del viento en km/h
   - Dirección del viento en grados

## Ejemplo de resultados

Si buscas `Madrid`, la aplicación puede mostrar:

- Ciudad: Madrid
- Temperatura: 21.4 °C
- Viento: 12.7 km/h
- Dirección del viento: 180°

> Nota: los valores exactos cambiarán según la hora y las condiciones actuales.

## Archivos principales

- `index.html` — interfaz de la aplicación en el navegador
- `src/js/weather.js` — lógica de consulta a Open-Meteo y actualización de la interfaz
- `src/js/weather.test.js` — pruebas unitarias para las funciones de consulta
- `package.json` — configuración de dependencias y script de prueba

## Mejoras futuras

- Agregar historial de búsquedas recientes
- Mostrar iconos o descripciones del clima (soleado, nublado, lluvia, etc.)
- Incluir pronóstico para varios días
- Añadir soporte para otras unidades (°F, m/s)
- Implementar un backend para registrar consultas en un archivo o base de datos
- Añadir validación adicional y mensajería de usuario más detallada

## Notas

- La aplicación usa la API pública de Open-Meteo, por lo que no requiere clave de API.
- Está diseñada para funcionar como una página estática y puede servirse desde cualquier servidor web simple.
