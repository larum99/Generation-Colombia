Evaluación FizzBuzz – Instrucciones para Estudiantes

Objetivo

Escribe un programa en JavaScript en **Fizzbuzz.js** que imprima los números del **1 al 1000** siguiendo estas reglas:

- Si el número es divisible por **3**, imprime `"Fizz"`.
- Si es divisible por **5**, imprime `"Buzz"`.
- Si es divisible por **ambos 3 y 5**, imprime `"FizzBuzz"`.
- De lo contrario, imprime el número.

---

Herramientas Necesarias

- Visual Studio Code (o cualquier editor de código)
- [Node.js](https://nodejs.org) (v12+)

---

Estructura de Carpetas

Asegúrate de que tu carpeta contenga:

├── Fizzbuzz.js ← Tu implementación en JavaScript
├── test.js ← Suite de pruebas
└── README.md ← Instrucciones del proyecto



---

Pasos para Completar la Evaluación

1. Implementa `Fizzbuzz.js`

- Abre **Fizzbuzz.js** en tu editor.
- Reemplaza la lógica temporal con tu implementación de FizzBuzz.
- Asegúrate de que para los números divisibles por ambos 3 y 5 imprimas **`"FizzBuzz"`** para que coincida con las pruebas.

Ejemplo inicial:

```js
for (let i = 1; i <= 1000; i++) {
  // Tu lógica de FizzBuzz aquí
  console.log(i);
}

2. Verifica Localmente

Puedes ejecutar tu solución JS directamente:

node Fizzbuzz.js

Esto mostrará toda la salida del 1 al 1000 en la terminal.  

3. Ejecuta las Pruebas Automatizadas

node test.js



Notas
No modifiques test.js — están configuradas para validar tu salida.

Las pruebas verifican:

Los primeros 10 resultados

Los primeros 100 resultados

Los resultados completos del 1 al 1000

Asegúrate de usar la ortografía y mayúsculas correctas: "Fizz", "Buzz", "FizzBuzz".