//2. Escribe un programa que genere la tabla de multiplicar de un número dado. 

let numero = parseInt(prompt("Ingrese un número para generar su tabla de multiplicar:"));

function tablaMultiplicar(numero) {
    console.log("Tabla de multiplicar del " + numero + ":");
  
    for (let i = 1; i <= 10; i++) {
      console.log(numero + " x " + i + " = " + (numero * i));
    }
  }
  
  if (isNaN(numero)) {
    console.log("Por favor, ingrese un número válido.");
  } else {
    tablaMultiplicar(numero);
  }
  
