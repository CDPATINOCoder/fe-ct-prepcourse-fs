/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   let elemento = array[0];
   return elemento;
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   let ultimo = array[array.length - 1];
   return ultimo;
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   let longitud = array.length;
   return longitud;
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   for (let i = 0; i < array.length; i++) {
      array[i] = array[i] + 1;
    }
    return array; // Devolvemos el arreglo modificado.
}
const array1 = [0, 1, 2, 4];
const resultado = incrementarPorUno(array1);
console.log(resultado); // Resultado: [1, 2, 3, 5]

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);
   return array;
}

const array2 = [1,2,3,4,5];
agregarItemAlFinalDelArray(array2, 8);
console.log(array2);

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
   return array;
}
const array3 = [1,2,3,4];
agregarItemAlComienzoDelArray(array3, 0);
console.log(array3);

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   return palabras.join(' ');
   
}

const array4 = ["hola", 'amigos', 'como', 'estan'];
const frase = dePalabrasAFrase(array4);
console.log(frase);

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   return array.includes(elemento);
}
const array5 = ['nashe', 'rojo', 'azul', 'morado'];
const elemento = 'nashe';
const resultado1 = arrayContiene(array5, elemento);
console.log(resultado1);

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   let suma = 0;
   for (let i=0 ; i < arrayOfNums.length ; i++)
   {
       suma = arrayOfNums[i] + suma;
   }
   return suma;
}

const arreglo = [1,2,3,4];
const resultado2 = agregarNumeros(arreglo);
console.log(resultado2);

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   let suma = 0;
   for (let i=0 ; i < resultadosTest.length ; i++)
   {
      console.log(resultadosTest[i]);
      suma = resultadosTest[i] + suma;
   }
   return suma/resultadosTest.length;
}

const notas = [5,4,3,4,2];
var promedio = promedioResultadosTest(notas);
console.log(promedio);

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   return Math.max(...arrayOfNums);
}
   const nros = [1,2,3,4,5,6,7];
   var grande = numeroMasGrande(nros);
   console.log(grande);

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   if (arguments.length === 0)
   {
      return 0;
   }
   if (arguments.length === 1)
   {
      return arguments[0];
   }
   let producto = arguments[0];
   for (let i=1 ; i < arguments.length ; i++)
   {
      producto *= arguments[i];
   }
   return producto;
}
   console.log(multiplicarArgumentos());
   console.log(multiplicarArgumentos(3));
   console.log(multiplicarArgumentos(2,3,2));
   

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   let contador = 0;
   for (let i=0 ; i < array.length ; i++)
   {
      if (array[i] > 18)
      {
         contador += 1;
      }
   }
   return contador;
}
   const array6 = [2,5,213,12,43];
   const nashes = cuentoElementos(array6);
   console.log(nashes);

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   switch (numeroDeDia)
   {
      case 1:
         return "Es fin de semana";
      case 2:
         return "Es dia laboral";
      case 3: 
         return "Es dia laboral";
      case 4: 
         return "Es dia laboral";
      case 5:
         return "Es dia laboral";
      case 6:
         return "Es dia laboral";
      case 7:
         return "Es fin de semana";
   }
}

console.log(diaDeLaSemana(2));

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   let str = num.toString();
   var array7 = str.split('');
   if (array7[0] == 9)
   {
      return true;
   }
   else
   {
      return false;
   }
}

console.log(empiezaConNueve(9));

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   if (array.length === 1)
   {
      return true;
   }
   const primerElemeno = array[0];
   return array.every(num => num === primerElemeno);
}
 var array8 = [1,1,1];
 console.log(todosIguales(array8));

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   let contador = 0;
   var array9 = [];
   for (let i=0 ; i<array.length ; i++)
   {
      if (array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre")
      {
         contador++;
         array9.push(array[i]);
      }
   }
   if (contador === 3)
   {
      return array9;
   }
   else 
   {
      return "No se encontraron los meses pedidos";
   }
}
var arraynuevo = ["Enero", "Marzo", "Abril", "Diciembre", "Noviembre"];
console.log(mesesDelAño(arraynuevo));

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:+
   var tabla = [];
   for (let i=0 ; i<11 ; i++)
   {
      tabla.push(6*i);
   }
   return tabla;
}
var resultad = tablaDelSeis();
console.log(resultad);

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   let mayoracien = [];
   for (let i=0 ; i<array.length ; i++)
   {
      if (array[i]>100)
      {
         mayoracien.push(array[i]);
      }
   }
   return mayoracien;
}

var arreglo2 = [2,3,200,100,101,102,120,201];
console.log(mayorACien(arreglo2));

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   let nuevoArreglo = [];
   let doble = 0;
   let interrumpio = false;
   doble = num + 2;
   for (let i=0 ; i<10 ; i++)
   {
      nuevoArreglo.push(doble);
      doble = doble + 2;
      if (doble === i)
      {
         break;
      }
   }
   if (nuevoArreglo.length === 10)
   {
      return nuevoArreglo;
   }
   else
   {
      return "Se interrumpió la ejecución";
   }
}
var numero = 2;
console.log(breakStatement(numero));

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   let nuevoarreglo2 = [];
   let nro = 0;
   nro = num + 2;
   for (let i=0 ; i<10 ; i++)
   {
      if (i === 5)
      {
         continue;
      }
      nuevoarreglo2.push(nro);
      nro = nro + 2;
   }
   return nuevoarreglo2;
}

let n = 50;
console.log(continueStatement(n));

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
