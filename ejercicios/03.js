//3. Escribe una función que tome un string como entrada y devuelva la misma cadena con las letras en orden inverso ***(sin usar funciones de JavaScript)***.

let cadena = prompt("escriba una cadena de texto:");


function invertirCadenaSinFunciones(cadena) {
    let cadenaInvertida = '';

    for (let i = cadena.length - 1; i >= 0; i--) {
      cadenaInvertida += cadena[i];
    }
    return cadenaInvertida;
  }
  
  let cadenaInvertida = invertirCadenaSinFunciones(cadena);
  
  console.log("Cadena original: " + cadena);
  console.log("Cadena invertida: " + cadenaInvertida);
  