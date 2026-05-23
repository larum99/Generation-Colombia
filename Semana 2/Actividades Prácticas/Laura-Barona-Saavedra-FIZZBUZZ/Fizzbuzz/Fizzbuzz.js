// Desafío FizzBuzz

// Este programa debe imprimir los números del 1 al 1000
// - Si es divisible por 3, imprimir "Fizz"
// - Si es divisible por 5, imprimir "Buzz"
// - Si es divisible por ambos, imprimir "FizzBuzz"
// - De lo contrario, imprimir el número

for (let i = 1; i <= 1000; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}





































































/*

for (let i = 1; i <= 1000; i++) {
  
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");  

  } else if (i % 3 === 0) {
    console.log("Fizz");

  } else if (i % 5 === 0) {
    console.log("Buzz");

  } else {
    console.log(i);
  }
}*/