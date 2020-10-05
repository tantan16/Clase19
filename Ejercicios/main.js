// Crear un documento html con un título que diga
// Mis canciones favoritas y una lista desordenada. 
//Pedir mediante prompts por cinco canciones (una a la vez),
// y agregar esas canciones 
// como ítems de la lista desordenada

const cancion1 = prompt(`Dime tu primer canción`)
const cancion2 = prompt(`Dime tu segunda canción`)
const cancion3 = prompt(`Dime tu tercer canción`)
const cancion4 = prompt(`Dime tu cuarta canción`)
const cancion5 = prompt(`Dime tu quinta canción`)

const primerCancion = document.querySelector(`.cancion1`)
primerCancion.textContent = cancion1

const segundaCancion = document.querySelector(`.cancion2`)
segundaCancion.textContent = cancion2

const tercerCancion = document.querySelector(`.cancion3`)
tercerCancion.textContent = cancion3

const cuartaCancion = document.querySelector(`.cancion4`)
cuartaCancion.textContent = cancion4

const quintaCancion = document.querySelector(`.cancion5`)
quintaCancion.textContent = cancion5