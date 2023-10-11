/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

const { numeroMasGrande } = require("../M05 JavaScript Arrays/homework");

function crearGato(nombre, edad) {
   // Debes crear un nuevo objeto con las propiedades "nombre" y "edad".
   // Ambas propiedades deben tener el valor correspondiente recibido por parámetro.
   // Además, agregar una propiedad con el nombre "meow".
   // La propiedad "meow" será una función que retorne el string: "Meow!".
   // Retornar el objeto.
   // Tu código:
   var gato = {
      nombre: nombre,
      edad: edad,
   }
   gato.meow = function(){
      return "Meow!";
   }
   return gato;
}
miGato = crearGato("casemiro", 1);
console.log(miGato);
console.log(miGato.meow());


function nuevoUsuario(nombre, email, password) {
   // Debes crear un nuevo objeto.
   // Este debe tener las propiedades: "nombre", "email" y "password" con sus respectivos valores.
   // Retornar el objeto.
   // Tu código:
   var cuenta = 
   {
      nombre: nombre,
      email: email,
      password: password
   };
   return cuenta;
}

let miCuenta = nuevoUsuario("César Patiño", "cesardavidpatinovera@gmail.com", "cesarcrack24");
console.log(miCuenta);

function agregarPropiedad(objeto, propiedad) {
   // Recibirás un objeto por parámetro.
   // Debes agregarle una propiedad con el nombre recibido por parámetro.
   // Esta propiedad será igual al valor `null`.
   // Retornar el objeto.
   // Tu código:
   objeto[propiedad] = null;
   return objeto;
}
   let curso = {};
   agregarPropiedad(curso, "aprendi");
   console.log(curso);
   
function invocarMetodo(objeto, metodo) {
   // El parámetro "metodo" es un string que coincide con el nombre de una propiedad del objeto recibido.
   // Esta propiedad contiene una función en su interior. Debes invocarla/ejecutarla.
   // [NOTA]: no necesitar retornar nada.
   // Tu código:
   if (objeto.hasOwnProperty(metodo) && typeof objeto[metodo] === "function");
   objeto[metodo]();
}

var miobjeto = {
   saludar: function()
   {
      console.log("hola soy la funcion saludar");
   },
   despedir: function()
   {
      console.log("hola soy la funcion despedir");
   },
   nashe: "hola"
};

invocarMetodo(miobjeto, "saludar");

function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
   // El parámetro "objetoMisterioso" posee una propiedad con el nombre "numeroMisterioso".
   // Debes multiplicar este número por 5 y retornar el resultado.
   // Tu código:
   let resultado = objetoMisterioso.numeroMisterioso * 5;
   return resultado;
}

var objetoMisterioso = {
   numeroMisterioso: 5
};
console.log(multiplicarNumeroDesconocidoPorCinco(objetoMisterioso));


function eliminarPropiedad(objeto, propiedad) {
   // El parámetro "propiedad" es una propiedad del objeto que recibes.
   // Debes eliminarla del objeto y retornarlo finalmente.
   // Tu código:
   delete objeto[propiedad];
   return objeto;
}

var miobject = {
   nombre: "césar",
   apellido: "patiño",
   edad: 19
};

console.log(eliminarPropiedad(miobject, "nombre"));

function tieneEmail(objetoUsuario) {
   // Verifica si el "objetoUsuario", en su propiedad "email", posee un valor definido.
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
   if (objetoUsuario.email !== undefined)
   {
      return true;
   }
   else
   {
      return false;
   }
}
var objetoUsuario = {
   email: "cesardavidpatinovera@gmail.com"
};
var usuario2 = { nombre: "Juan" };
console.log(tieneEmail(usuario2));
console.log(tieneEmail(objetoUsuario));

function tienePropiedad(objeto, propiedad) {
   // Verifica si el objeto recibido posee una propiedad con el mismo nombre que el parámetro "propiedad".
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
   if (objeto.hasOwnProperty(propiedad))
   {
      return true;
   }
   else
   return false;
}
var alumnos = 
{
   alumno1: "cesar",
   alumno2: "carlos",
   alumno3: "mathi"
};

console.log(tienePropiedad(alumnos, "naseh"));

function verificarPassword(objetoUsuario, password) {
   // Verifica si la propiedad "password" del "objetoUsuario" coincide con el parámetro "password".
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
   if (objetoUsuario.password === password)
   {
      return true;
   }
   else
   return false;
}

var objetoUsuario = 
{
   password: "anashex23"
}
console.log(verificarPassword(objetoUsuario, "anashex23"));

function actualizarPassword(objetoUsuario, nuevaPassword) {
   // Reemplaza la contrseña guardada en la propiedad "password" del "objetoUsuario".
   // La nueva contraseña la recibes por parámetro.
   // Retornar el objeto.
   // Tu código:
   objetoUsuario.password = nuevaPassword;
   return objetoUsuario;
}

var objetoUsuario = {
   password: "anashex23"
};

console.log(actualizarPassword(objetoUsuario, "cesarcrack24"));

function agregarAmigo(objetoUsuario, nuevoAmigo) {
   // El parámetro "objetoUsuario" tiene una propiedad llamada "amigos" igual a un arreglo.
   // Debes agregar el "nuevoAmigo" al final de este arreglo.
   // Retornar el objeto.
   // Tu código:
   objetoUsuario.amigos.push(nuevoAmigo);
   return objetoUsuario;
}

var objetoUsuario = 
{
   amigos: ["carlos", "mathias", "theo", "dani", "tomas"]
};

agregarAmigo(objetoUsuario, "Juan");
console.log(objetoUsuario);

function pasarUsuarioAPremium(objetoMuchosUsuarios) {
   // El parámetro "objetoMuchosUsuarios" es un arreglo de objetos (usuarios).
   // Cada usuario tiene una propiedad llamada "esPremium".
   // Define esta propiedad de todos los usuarios como true.
   // Retornar el arreglo.
   // Tu código:
   for (let i=0 ; i<objetoMuchosUsuarios.length ; i++)
   {
      objetoMuchosUsuarios[i].esPremium = true;
   }
   return objetoMuchosUsuarios;
}
var usuarios = 
[
   {nombre: "cesar patiño", esPremium: false},
   {nombre: "carlos lopez", esPremium: false},
   {nombre: "mathias fleitas", esPremium: false}
];

console.log(pasarUsuarioAPremium(usuarios));

function sumarLikesDeUsuario(objetoUsuario) {
   // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
   // Este arreglo contiene objetos (post).
   // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
   // Debes sumar los likes de todos los post y retornar el resultado.
   // Tu código:
   resultado = 0;
   for (let i=0 ; i<objetoUsuario.posts.length ; i++)
   {
      resultado = objetoUsuario.posts[i].likes + resultado;
   }
   return resultado;
}

var usuarios = 
{
   posts: 
   [
      {likes: 23},
      {likes: 23}
   ]
};



console.log(sumarLikesDeUsuario(usuarios));

function agregarMetodoCalculoDescuento(objetoProducto) {
   // Agrega una propiedad al "objetoProducto" con el nombre "calcularPrecioDescuento".
   // Esta propiedad debe ser una función que multiplique el precio del producto por el porcentajeDeDescuento.
   // El "objetoProducto" posee una propiedad "precio" y una propiedad "porcentajeDeDescuento".
   // Luego debes restar del precio total del producto ese valor de descuento.
   // Retornar el precio final.
   // Ejemplo:
   // Precio ---> 10
   // PorcentajeDeDescuento ---> 0.2
   // Precio final ---> 8
   // Tu código:
   var descuento = 0; var precioFinal = 0;
   objetoProducto.calcularPrecioDescuento = function()
   {
      descuento= objetoProducto.precio * objetoProducto.porcentajeDeDescuento; 
      precioFinal = objetoProducto.precio - descuento;
      return precioFinal;
   }
   return objetoProducto;
}

var producto = 
{
  precio: 10, 
  porcentajeDeDescuento: 0.2
};

agregarMetodoCalculoDescuento(producto);
console.log(agregarMetodoCalculoDescuento(producto.calcularPrecioDescuento()));

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   crearGato,
   nuevoUsuario,
   agregarPropiedad,
   invocarMetodo,
   multiplicarNumeroDesconocidoPorCinco,
   eliminarPropiedad,
   tieneEmail,
   tienePropiedad,
   verificarPassword,
   actualizarPassword,
   agregarAmigo,
   pasarUsuarioAPremium,
   sumarLikesDeUsuario,
   agregarMetodoCalculoDescuento,
};
