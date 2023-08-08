/* DESCRIPCIÓN:
Main.js contiene la información asociada a los botones, uso del DOM y display de tarjetas
*/

//Import 
import { obtenerPeliculas } from "./data.js";

// Peliculas (total)
const peliculas = obtenerPeliculas();

//Referencias al DOM
const seccionTarjetas =document.querySelector(".seccion-tarjetas");

// Mostrar tarjetas
peliculas.forEach(pelicula => {
  //Crear el Div contenedor donde estará la tarjeta
  const contenedorTarjetas = document.createElement("div");
  contenedorTarjetas.classList.add("contenedor-tarjeta")
  
  // El div de la tarjeta
  const tarjetaPelicula = document.createElement("div");
  tarjetaPelicula.classList.add("tarjeta-pelicula");

  //Añadir la imagen
  const imagen = document.createElement("img");
  imagen.src = pelicula.poster;
  imagen.alt = "portada";
  imagen.id="portada";
  tarjetaPelicula.appendChild(imagen);

  // crear el DIV que contiene la información
  const contenedorInfo = document.createElement("div");
  contenedorInfo.classList.add("contenedor-info");
  tarjetaPelicula.appendChild(contenedorInfo);
  //Los siguientes elementos deben estar dentro de contenedorInfo

  //titulo
  const titulo = document.createElement("h3");
  titulo.id="titulo";
  titulo.textContent = pelicula.title;
  contenedorInfo.appendChild(titulo);
  //Descripcion span y p
  const descripcionSpan = document.createElement("span");
  descripcionSpan.id="descripcion";
  descripcionSpan.textContent="Description";
  contenedorInfo.appendChild(descripcionSpan);
  
  const descripcion = document.createElement("p");
  descripcion.id = "descripcion";
  descripcion.textContent = pelicula.description;
  contenedorInfo.appendChild(descripcion);

  // Div para Director, productor, fecha y score
  const infoDiv = document.createElement("div");
  infoDiv.classList.add("director-productor-fecha-puntuacion");

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
  contenedorTarjetas.appendChild(tarjetaPelicula);

  // Agregar contenedorTarjetas dentro de seccionTarjetas
  seccionTarjetas.appendChild(contenedorTarjetas);

});


// Boton personajes:
const btnPersonajes = document.getElementById("btn-personajes");
const tarjetaPelicula = document.querySelector(".tarjeta-pelicula");
const contenedorTarjeta = document.querySelector(".contenedor-tarjeta");
// Mostrar Overlay usando boton
btnPersonajes.addEventListener("click", () => {
  tarjetaPelicula.classList.toggle("active");
});

// Cerrar el overlay si se hace clic fuera del contenedor
contenedorTarjeta.addEventListener("click", (event) => {
  if (event.target === contenedorTarjeta) {
    tarjetaPelicula.classList.remove("active");
  }
});

//Carrusel de niño
