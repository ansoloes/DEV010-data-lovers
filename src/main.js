/* 
  ! DESCRIPCIÓN
  * Main.js contiene la información asociada a los botones, uso del DOM y display de tarjetas
 */

// ! IMPORTACIONES
import { obtenerPeliculas, obtenerDirectores, obtenerProductores, aplicarFiltros /*buscarTermino*/ } from "./data.js";


// ! REFERENCIAS AL DOM
// * Sección buscar
//const btnBuscar = document.querySelector("#buscar");
//const inputBuscar = document.querySelector("#input-buscar");

// * Super contenedor tarjeta
const contenedorDelContenedorDeTarjetas = document.querySelector("#contenedor-del-contenedor-tarjetas")

// * Música
const botonReproducir = document.querySelector("#reproducir");
const botonPausar = document.querySelector("#pausar");
const audio = document.querySelector("#audio");

// * Filtros
const inputMinimo = document.querySelector("#valor-minimo");
const inputMaximo = document.querySelector("#valor-maximo");
const botonFiltrar = document.querySelector("#btn-filtrar");
const selectDirector = document.querySelector("#filtro-director");
const selectProductor = document.querySelector("#filtro-productor");

// * Sección personajes
const tarjetaPelicula = document.querySelector(".tarjeta-pelicula");
const contenedorTarjeta = document.querySelector(".contenedor-tarjeta");
const btnPersonajes = document.getElementById("btn-personajes");

// ! FUNCIONES
// * Función total de películas
const peliculas = obtenerPeliculas();

//* Función total directores
const directores = obtenerDirectores();

// * Función total productores
const productores = obtenerProductores();

// * Función reproducir música
botonReproducir.addEventListener("click", () => {
  audio.play();
})

// * Función pausar música
botonPausar.addEventListener("click", () => {
  audio.pause();
});

// * Función modular el volumen del audio
audio.volume = 0.5;

// * Función mostrar tarjetas
const mostrarPeliculas = (peliculas) => {
  contenedorDelContenedorDeTarjetas.innerHTML = "";
  peliculas.forEach(pelicula => {
    // Mostrar la cantidad de películas encontradas
    const peliculasEncontradas = document.querySelector("#peliculas-encontradas");
    peliculasEncontradas.textContent = peliculas.length + " movies found"
  
    // Crear el Div contenedor donde estará la tarjeta
    const contenedorTarjeta = document.createElement("article");
    contenedorTarjeta.classList.add("contenedor-tarjeta");
  
    // Article de la tarjeta
    const tarjetaPelicula = document.createElement("article");
    tarjetaPelicula.classList.add("tarjeta-pelicula");
  
    // Div contenedor imagen
    const contenedorImagen = document.createElement("div");
    contenedorImagen.classList.add("contenedor-img");
    // Añadiendo el Div contenedor imagen a la tarjeta
    tarjetaPelicula.appendChild(contenedorImagen)
  
    // Imagen portada
    const imagen = document.createElement("img");
    imagen.src = pelicula.poster;
    imagen.alt = "portada-película";
    imagen.id = "portada";
    contenedorImagen.appendChild(imagen);
  
    // ! Div contenedor información
    const contenedorInfo = document.createElement("div");
    contenedorInfo.classList.add("contenedor-info");
    tarjetaPelicula.appendChild(contenedorInfo);
  
    // * Elementos dentro del contenedorInfo
    // Título película
    const titulo = document.createElement("h3");
    titulo.id = "titulo";
    titulo.textContent = pelicula.title;
    contenedorInfo.appendChild(titulo);
    // Descripción span y p
    const descripcionSpan = document.createElement("span");
    descripcionSpan.id = "descripcion";
    descripcionSpan.textContent = "Description";
    contenedorInfo.appendChild(descripcionSpan);
  
    const descripcion = document.createElement("p");
    descripcion.id = "descripcion";
    descripcion.textContent = pelicula.description;
    contenedorInfo.appendChild(descripcion);
  
    // ! Div director, productor, fecha y score
    const infoDiv = document.createElement("div");
    infoDiv.classList.add("director-productor-fecha-puntuacion");
  
    // * Elementos dentro del div director, productor, fecha y score
    // Div director
    const directorDiv = document.createElement("div");
    directorDiv.classList.add("info");
    const directorSpan = document.createElement("span");
    directorSpan.textContent = "Director:";
    const directorP = document.createElement("p");
    directorP.id = "director";
    directorP.textContent = pelicula.director;
    directorDiv.appendChild(directorSpan);
    directorDiv.appendChild(directorP);
    infoDiv.appendChild(directorDiv);
  
    // Div Productor
    const producerDiv = document.createElement("div");
    producerDiv.classList.add("info");
    const producerSpan = document.createElement("span");
    producerSpan.textContent = "Producer:";
    const producerP = document.createElement("p");
    producerP.id = "productor";
    producerP.textContent = pelicula.producer;
    producerDiv.appendChild(producerSpan);
    producerDiv.appendChild(producerP);
    infoDiv.appendChild(producerDiv);
  
    // Div Fecha
    const dateDiv = document.createElement("div");
    dateDiv.classList.add("info");
    const dateSpan = document.createElement("span");
    dateSpan.textContent = "Release Date:";
    const dateP = document.createElement("p");
    dateP.id = "fecha";
    dateP.textContent = pelicula.release_date;
    dateDiv.appendChild(dateSpan);
    dateDiv.appendChild(dateP);
    infoDiv.appendChild(dateDiv);
  
    //Div Score
    const scoreDiv = document.createElement("div");
    scoreDiv.classList.add("info");
    const scoreSpan = document.createElement("span");
    scoreSpan.textContent = "Score:";
    const scoreP = document.createElement("p");
    scoreP.id = "puntuacion";
    scoreP.textContent = pelicula.rt_score;
    scoreDiv.appendChild(scoreSpan);
    scoreDiv.appendChild(scoreP);
    infoDiv.appendChild(scoreDiv);
  
    contenedorInfo.appendChild(infoDiv);
  
    //Div botones
    const botonContenedor = document.createElement("div");
    botonContenedor.classList.add("contenedor-btn");
  
    // Boton personajes
    const botonPersonajes = document.createElement("button");
    botonPersonajes.classList.add("btn");
    botonPersonajes.textContent = "Characters";
    botonContenedor.appendChild(botonPersonajes);
  
    // Boton Lugares
    const botonLugares = document.createElement("button");
    botonLugares.classList.add("btn");
    botonLugares.textContent = "Locations";
    botonContenedor.appendChild(botonLugares);
  
    contenedorInfo.appendChild(botonContenedor);
  
    // Agregar contenedorinfo dentro de tarjetaPelicula
    tarjetaPelicula.appendChild(contenedorInfo);
  
    // Agregar tarjetaPelicula dentro de contenedorTarjetas
    contenedorTarjeta.appendChild(tarjetaPelicula);
  
    // Agregar contenedorTarjetas dentro de seccionTarjetas
    contenedorDelContenedorDeTarjetas.appendChild(contenedorTarjeta);
  });
}

mostrarPeliculas(peliculas);

// * Función para buscar películas
// btnBuscar.addEventListener("click", () => {
//   const peliculasEncontradas = buscarTermino(inputBuscar.value);
//   // mostrarPeliculas(peliculasEncontradas);
//   console.log(peliculasEncontradas);
// })

// * Función mostrar directores
directores.forEach(director => {
  // Option director
  const opcionDirector = document.createElement('option')
  opcionDirector.textContent = director;

  // Añadiendo optionDirector al select
  selectDirector.appendChild(opcionDirector);
})

// * Función mostrar productores
productores.forEach(productor => {
  // Option productor
  const opcionProductor = document.createElement('option');
  opcionProductor.textContent = productor;

  // Añadiendo optionProductor al select
  selectProductor.appendChild(opcionProductor);
})

// * Función filtro por año
botonFiltrar.addEventListener("click", () => {
  const resultadoFiltro = aplicarFiltros(inputMinimo.value,inputMaximo.value, selectDirector.value, selectProductor.value)
  mostrarPeliculas(resultadoFiltro);
})

// * Función mostrar Overlay usando boton
btnPersonajes.addEventListener("click", () => {
  tarjetaPelicula.classList.toggle("active");
});

// * Función cerrar el overlay si se hace clic fuera del contenedor
contenedorTarjeta.addEventListener("click", (event) => {
  if (event.target === contenedorTarjeta) {
    tarjetaPelicula.classList.remove("active");
  }
});

//Carrusel de niño
