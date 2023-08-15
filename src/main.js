/* 
  ! DESCRIPCIÓN
  * Main.js contiene la información asociada a los botones, uso del DOM y display de tarjetas
 */

// ! IMPORTACIONES
import { obtenerPeliculas,obtenerPeliculaPorId, obtenerDirectores, obtenerProductores, aplicarFiltros, buscarTermino, ordenarPeliculasPorAñoAscendente, ordenarPeliculasPorAñoDescendente, ordenarPeliculasAZ, ordenarPeliculasZA,calcularPromedioScore } from "./data.js";

// ! REFERENCIAS AL DOM
// * Sección buscar
const btnBuscar = document.querySelector("#buscar");
const inputBuscar = document.querySelector("#input-buscar");

// * Super contenedor tarjeta
const seccionTarjetas = document.querySelector(".seccion-tarjetas")
const contenedorDelContenedorDeTarjetas = document.querySelector("#contenedor-del-contenedor-tarjetas")

// * Música
const botonReproducir = document.querySelector("#reproducir");
const botonPausar = document.querySelector("#pausar");
const audio = document.querySelector("#audio");

// * Filtros
const peliculasEncontradas = document.querySelector("#peliculas-encontradas");
const inputMinimo = document.querySelector("#valor-minimo");
const inputMaximo = document.querySelector("#valor-maximo");
const selectDirector = document.querySelector("#filtro-director");
const selectProductor = document.querySelector("#filtro-productor");
const botonFiltrar = document.querySelector("#btn-filtrar");
const botonLimpiarFiltros = document.querySelector("#btn-limpiar-filtros");

// * Ordenar
const ordenarPorAño = document.querySelector("#ordenar-fecha");
const ordenarPorAlfabeto = document.querySelector("#ordenar-alfabeticamente")

// * Resultados 
let resultados = [...obtenerPeliculas()]

// * Sección personajes
const tarjetaPelicula = document.querySelector(".tarjeta-pelicula");
const contenedorTarjeta = document.querySelector(".contenedor-tarjeta");


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
  window.scrollTo(0, 1000);
})

// * Función pausar música
botonPausar.addEventListener("click", () => {
  audio.pause();
});

// * Función modular el volumen del audio
audio.volume = 0.5;

// * Función mostrar tarjetas
const mostrarPeliculas = (peliculas) => {
  if (peliculas.length === 0){
    peliculasEncontradas.textContent = "0 movies found";
    contenedorDelContenedorDeTarjetas.innerHTML = ""
    // Article no se encontraron películas
    const noSeEncontraronPeliculas = document.createElement("article");
    noSeEncontraronPeliculas.classList = "no-se-encontraron-peliculas";

    // Imagen del indicativo
    const imagenSonrisaTotoro = document.createElement("img");
    imagenSonrisaTotoro.src = "img/no-movies-found-totoro.gif";

    // Texto del indicativo
    const textoNoSeEncontraronPeliculas = document.createElement("h2");
    textoNoSeEncontraronPeliculas.textContent = "No Movies Found"

    // Añadir hijos al Article
    noSeEncontraronPeliculas.appendChild(imagenSonrisaTotoro);
    noSeEncontraronPeliculas.appendChild(textoNoSeEncontraronPeliculas);

    // Añadiendo el Article a la sección
    seccionTarjetas.appendChild(noSeEncontraronPeliculas);

  } else {
    contenedorDelContenedorDeTarjetas.innerHTML = "";
    peliculas.forEach(pelicula => {
      // Mostrar la cantidad de películas encontradas
      peliculasEncontradas.textContent = peliculas.length + " movies found"

      // Crear el Div contenedor donde estará la tarjeta
      const contenedorTarjeta = document.createElement("div");
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
      botonPersonajes.classList.add("btn-personajes");
      botonPersonajes.textContent = "Characters";
      botonPersonajes.id="btn-personajes";
      botonPersonajes.setAttribute("data-id", pelicula.id) // para tener contexto y poder generar los personajes
      botonContenedor.appendChild(botonPersonajes);
  
      // Boton Lugares
      const botonLugares = document.createElement("button");
      botonLugares.classList.add("btn");
      botonLugares.textContent = "Locations";
      botonLugares.id="btn-lugares";
      botonLugares.setAttribute("data-id", pelicula.id) // para tener contexto y poder generar los personajes
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
  obtenerBotonesPersonajes()
}

function obtenerBotonesPersonajes (){
  const btnPersonajes = document.querySelectorAll(".btn-personajes"); // para poder utilizar todos los botones personaje...
  console.log(btnPersonajes)
}

mostrarPeliculas(peliculas);

// * Funciones Ordenar:
// Por Año
//  eventListener para un select. <More recent> y <Oldest>
ordenarPorAño.addEventListener("change", () => {
  // const peliculas = obtenerPeliculas();
  // Necesitamos que use una función para una opción y la otra para la otra
  if (ordenarPorAño.value === "orden-descendente") {
    const peliculasOrdenadas= ordenarPeliculasPorAñoDescendente(resultados);
    mostrarPeliculas(peliculasOrdenadas);
  
  } else if (ordenarPorAño.value === "orden-ascendente") {
    const peliculasOrdenadas= ordenarPeliculasPorAñoAscendente(resultados);
    mostrarPeliculas(peliculasOrdenadas);
  } 
});

// Por Letra
//  eventListener para un select. <More recent> y <Oldest>
ordenarPorAlfabeto.addEventListener("change", () => {
  // const peliculas = obtenerPeliculas();
  // Necesitamos que use una función para una opción y la otra para la otra
  if (ordenarPorAlfabeto.value === "ordenar-a-z") {
    const peliculasOrdenadas= ordenarPeliculasAZ(resultados);
    mostrarPeliculas(peliculasOrdenadas);
  
  } else if (ordenarPorAlfabeto.value === "ordenar-z-a") {
    const peliculasOrdenadas= ordenarPeliculasZA(resultados);
    mostrarPeliculas(peliculasOrdenadas);
  } 
});

// * Función para buscar películas
btnBuscar.addEventListener("click", () => {
  const peliculasEncontradas = buscarTermino(inputBuscar.value);
  resultados = [...peliculasEncontradas];
  mostrarPeliculas(resultados);
  // Vaciar el input para buscar nuevamente
  inputBuscar.value = "";
  window.scrollTo(0, 1000);
})

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

// * Función filtros
// Agregar el desplazamiento por scroll
botonFiltrar.addEventListener("click", () => {
  const resultadoFiltro = aplicarFiltros(inputMinimo.value,inputMaximo.value, selectDirector.value, selectProductor.value);
  resultados = [...resultadoFiltro];
  mostrarPeliculas(resultadoFiltro);
  // console.log(calcularPromedioScore(resultados)) // ? esto fue para probar el cálculo de promedios
})

// * Función para limpiar filtros
botonLimpiarFiltros.addEventListener("click", () => {
  inputMinimo.value = "";
  inputMaximo.value = "";
  selectDirector.selectedIndex = 0;
  selectProductor.selectedIndex = 0;
  mostrarPeliculas(peliculas);
})

// * Función mostrar Overlay usando boton
// btnPersonajes.addEventListener("click", (event) => {
//   const peliculaId = event.currentTarget.getAttribute("data-id"); // Obtener el ID de la película
//   mostrarPersonajes(peliculaId); // mostrar por ID
// });

// * Función cerrar el overlay si se hace clic fuera del contenedor
contenedorTarjeta.addEventListener("click", (event) => {
  if (event.target === contenedorTarjeta) {
    tarjetaPelicula.classList.remove("active");
  }
});



// ! Sección POPout!
// * Función mostrar personajes

const mostrarPersonajes = (peliculaId) => {
  const pelicula = obtenerPeliculaPorId(peliculaId)
  //* Agregar elementos HTML
  //div contenedor de tarjetas de personajes
  const contenedorPersonajes = document.createElement("div");
  contenedorPersonajes.classList.add("overlay-contenedor-personajes");
  
  pelicula.people.forEach(personaje =>{
    // Div tarjeta de personaje
    const tarjetaPersonaje = document.createElement("div");
    tarjetaPersonaje.classList.add("tarjeta-personaje");

    // Div contenedor de la imagen del personaje
    const contenedorImgPersonaje = document.createElement("div");
    contenedorImgPersonaje.classList.add("contenedor-img-personaje");
    tarjetaPersonaje.appendChild(contenedorImgPersonaje);

    // Imagen del personaje
    const imgPersonaje = document.createElement("img");
    imgPersonaje.src = personaje.image;
    imgPersonaje.alt = personaje.name;
    contenedorImgPersonaje.appendChild(imgPersonaje);

    // Div contenedor de la información del personaje
    const contenedorInfoPersonaje = document.createElement("div");
    contenedorInfoPersonaje.classList.add("contenedor-info-personaje");
    tarjetaPersonaje.appendChild(contenedorInfoPersonaje);

    // Div contenedor del nombre del personaje
    const contenedorNombre = document.createElement("div");
    contenedorNombre.classList.add("contenedor-nombre");
    contenedorInfoPersonaje.appendChild(contenedorNombre);

    // Nombre del personaje
    const nombrePersonaje = document.createElement("h3");
    nombrePersonaje.id = "nombre";
    nombrePersonaje.textContent = personaje.name;
    contenedorNombre.appendChild(nombrePersonaje);

    // Div contenedor de la información del personaje
    const infoPersonaje = document.createElement("div");
    infoPersonaje.classList.add("info-personaje");
    contenedorInfoPersonaje.appendChild(infoPersonaje);

    // Crear elementos de información del personaje 
    const infoElements = [
      { label: "Gender", value: personaje.gender },
      { label: "Age", value: personaje.age },
      { label: "Eye color", value: personaje.eye_color },
      { label: "Hair color", value: personaje.hair_color },
      { label: "Species", value: personaje.species }
    ];

    // Agregar información del personaje al div infoPersonaje
    infoElements.forEach(info => {
      const infoDiv = document.createElement("div");
      infoDiv.classList.add("info");

      const infoSpan = document.createElement("span");
      infoSpan.textContent = info.label;

      const infoP = document.createElement("p");
      infoP.textContent = info.value;

      infoDiv.appendChild(infoSpan);
      infoDiv.appendChild(infoP);
      infoPersonaje.appendChild(infoDiv);
      contenedorPersonajes.appendChild(tarjetaPersonaje);
    }); 
    contenedorPersonajes.classList.add("active");
  })


  // Mostrar la tarjeta de personaje en el overlay
  // Puedes adjuntar tarjetaPersonaje al elemento correspondiente en el DOM
  // por ejemplo, contenedorTarjeta.appendChild(tarjetaPersonaje);
};

// para eso debo hacer una función (dataPersonajes())
// que sea capaz de extraer la información de personajes de la película específica
// Luego generar los Divs según la maqueta. 
// Mi duda era sobre cómo ibamos a generar la tarjeta de personajes por película, pero
// si utilizamos la información (ID de película) sería facil!

// * Función generar Lugares:

// * FUnción Generar Vehículos:

// * Función Carrucel 

// * Botón limpiar filtros 
//-> hacer que los input vuelvan a 0
//-> Usar función mostrarPeliculas() con toda la data


