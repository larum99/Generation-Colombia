const sumar  = require("./funciones.js");

test('sumar(2, 4) debería retornar 6', () => {
    expect(sumar(2, 4)).toBe(6);
})