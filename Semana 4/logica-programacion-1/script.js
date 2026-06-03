let num1 = Number(prompt('Ingrese el primer número: '));
let num2 = Number(prompt('Ingrese el segundo número: '));
let num3 = Number(prompt('Ingrese el tercer número: '));

let resultado =document.getElementById('resultado');

let mayor, centro, menor;

if (num1 === num2 && num2 === num3) {
    resultado.innerHTML = `
        <h2>Los 3 números son iguales: ${num3}
    `;
} else {
    if (num1 >= num2 && num1 >= num3) {
        mayor = num1;

        if(num2 >= num3) {
            centro = num2;
            menor = num3;
        } else {
            centro = num3;
            menor = num2;
        }
    } else if (num2 >= num1 && num2 >= num3) {
        mayor = num2;

        if (num1 >= num3) {
            centro = num1;
            menor = num3;
        } else {
            centro = num3;
            menor = num1;
        }
    } else {
        mayor = num3;

        if (num1 >= num2) {
            centro = num1;
            menor = num2;
        } else {
            centro = num2;
            menor = num1;
        }
    }

    resultado.innerHTML = `
        <p><strong>Mayor: <strong> ${mayor}<p>
        <p><strong>Centro: <strong> ${centro}<p>
        <p><strong>Menor: <strong> ${menor}<p>

        <h3>De mayor a menor</h3>
        <p>${mayor}, ${centro}, ${menor}</p>

        <h3>De menor a mayor</h3>
        <p>${menor}, ${centro}, ${mayor}</p>
        `;
}

// console.log(num1, num2, num3)