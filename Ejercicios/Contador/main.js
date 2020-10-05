//Primer Ejercicio Consigna: 
//1. Crear un documento html con un título que
// diga Mis canciones favoritas y una lista desordenada
//2. Pedir mediante prompts por cinco canciones (una a la vez), y agregar esas canciones
// como ítems de la lista desordenada

// let primerCancion = document.querySelector(".cancion1")
// let segundaCancion = document.querySelector(".cancion2")
// let tercerCancion = document.querySelector(".cancion3")
// let cuartaCancion = document.querySelector(".cancion4")
// let quintaCancion = document.querySelector(".cancion5")

// primerCancion.textContent = prompt(`Escribe una canción`)
// segundaCancion.textContent = prompt(`Escribe una canción`)
// tercerCancion.textContent = prompt(`Escribe una canción`)
// cuartaCancion.textContent = prompt(`Escribe una canción`)
// quintaCancion.textContent = prompt(`Escribe una canción`)


//SEGUNDO EJERCICIO

// //Crear un documento html que muestre un número
// // (empezando en 0) y 6 botones con los siguientes
// // valores: -1, +1, -5, +5, -10, +10. Cuando se clickea
// // un botón, se tiene que sumar o restar la cantidad
// // correspondiente, y actualizar el número mostrado.

// const resultadoOperaciones = document.querySelector(`.num-inicial`)
// const restaUno = document.getElementById(`resta-uno`)
// const sumaUno= document.getElementById(`suma-uno`)
// const restaCinco = document.getElementById(`resta-cinco`)
// const sumaCinco = document.getElementById(`suma-cinco`)
// const restaDiez = document.getElementById(`resta-diez`)
// const sumaDiez = document.getElementById(`suma-diez`)
// let resultado = 0

// restaUno.onclick = (e) =>{
//     resultado= resultado - 1
//     console.log(resultado)
//     resultadoOperaciones.textContent = resultado
// }

// sumaUno.onclick = (e) =>{
//   resultado = resultado + 1
//   console.log(resultado)
//   resultadoOperaciones.textContent = resultado 
// }

// restaCinco.onclick = (e) =>{
//     resultado = resultado - 5
//     console.log(resultado)
//     resultadoOperaciones.textContent = resultado 
// }


// sumaCinco.onclick = (e) =>{
//     resultado = resultado + 5
//     console.log(resultado)
//     resultadoOperaciones.textContent = resultado 
// }


// restaDiez.onclick = (e) =>{
//     resultado = resultado - 10
//     console.log(resultado)
//     resultadoOperaciones.textContent = resultado 
// }

// sumaDiez.onclick = (e) =>{
//     resultado = resultado + 10
//     console.log(resultado)
//     resultadoOperaciones.textContent = resultado 
// }

//TERCER EJERCICIO
// Hacer un programa que al iniciarse pida mediante un prompt ingresar
//  un color en sistema hexadecimal,
//  y una vez ingresado ponga el color de fondo del body con dicho color.

// const saludo = alert(`Hola, ayúdanos a personalizar esta página ingresando el color que más te guste`)
// const color = prompt(`Ingresa un coloe hexadecimal para cambiar el color de fondo`)
// let body = document.body 

// const colorDelBody = () =>{
//  body.style.backgroundColor =  color
// }

// colorDelBody()

