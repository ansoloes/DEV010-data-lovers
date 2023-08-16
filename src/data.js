/*
! Descripción:
  * data.js contiene el import de data Ghibli, funciones para obtener películas y filtros
*/

import data from "./data/ghibli/ghibli.js"

// TODO: Función para obtener películas
export function obtenerPeliculas() {
  return data.films;
}

// TODO: Función para obtener personajes
export function obtenerPersonajes() {
  const personajes = data.films.map( (pelicula) => pelicula.people );
  return personajes;
}

// TODO: Función para obtener lugares
export function obtenerLugares() {
  const lugares = data.films.map( (pelicula) => pelicula.locations );
  return lugares;
}

// TODO: Función para obtener directores
export function obtenerDirectores() {
  const directores = data.films.map( (pelicula) => pelicula.director );
  const directoresFiltrados = directores.filter((director, indice) => {
    return directores.indexOf(director) === indice;
  } )
  return directoresFiltrados;
}

// TODO: Función obtener PeliculasPorId
export function obtenerPeliculaPorId() {
  const peliculaPorId = data.films.find( (pelicula) => pelicula.id === peliculaPorId );
  return peliculaPorId;
}

// TODO: Función para obtener productores
export function obtenerProductores() {
  const productores = data.films.map( (pelicula) => pelicula.producer );
  const productoresFiltrados = productores.filter( (productor, indice) => {
    return productores.indexOf(productor) === indice;
  } )
  return productoresFiltrados;
}

// TODO: Función para encontrar películas por título
export function obtenerPeliculasPorTitulo(titulo) {
  return data.films.find( (pelicula) => pelicula.title === titulo );
}

// TODO: Función para filtrar películas por año
export function filtrarPeliculasPorAnho(anho1, anho2) {
  return data.films.filter( (pelicula) => pelicula.release_date >= anho1 && pelicula.release_date <= anho2 )
}

// TODO: Función para filtrar películas por director
export function filtrarPeliculasPorDirector(director, peliculasFiltradas) {
  return peliculasFiltradas.filter( (pelicula) => pelicula.director === director )
}

// TODO: Función para filtrar peliculas por productor
export function filtrarPeliculasPorProductor(productor, peliculasFiltradas) {
  return peliculasFiltradas.filter( (pelicula) => pelicula.producer === productor );
}

// TODO: Función para usar todos los filtros
export function aplicarFiltros(anhoMinimo, anhoMaximo, director, productor){
  let peliculasFiltradas = obtenerPeliculas()
  // Por año
  if (anhoMinimo && anhoMaximo) {
    peliculasFiltradas = filtrarPeliculasPorAnho(anhoMinimo, anhoMaximo, peliculasFiltradas);
  }
  // Por director
  if (director) {
    peliculasFiltradas = filtrarPeliculasPorDirector(director, peliculasFiltradas);
  }
  // Por productor
  if (productor) {
    peliculasFiltradas = filtrarPeliculasPorProductor(productor, peliculasFiltradas);
  }
  return peliculasFiltradas;
}

//Función para barra de búsqueda
export function buscarTermino(termino){
  //termino tipo titulo
  const peliculasEncontradas = obtenerPeliculas().filter(pelicula =>
    pelicula.title.toLowerCase().includes( termino.toLowerCase() )
  );
  //* Buscar por términos adicionales (ej. personajes) (OPCIONAL)
  // // termino tipo nombre personaje
  // const personajesEncontrados = obtenerPersonajes().filter(personaje =>
  //   personaje.name.toLowerCase().includes(termino.toLowerCase())
  // );
  // resultados.push(personajesEncontrados);
  // // termino tipo nombre lugares
  // const lugaresEncontrados = obtenerLugares().filter(lugar =>
  //   lugar.name.toLowerCase().includes(termino.toLowerCase())
  // );
  // resultados.push(lugaresEncontrados);
  return peliculasEncontradas;
}

// TODO: Función para ordenar películas por año ascendente
export function ordenarPeliculasPorAñoAscendente(peliculas) {
  return peliculas.sort( (x, y) => x.release_date - y.release_date );
}

// TODO: Función para ordenar peliculas por año descendente
export function ordenarPeliculasPorAñoDescendente(peliculas) {
  return peliculas.sort( (x, y) => y.release_date - x.release_date );
}

// TODO: Función para ordenar películas alfabéticamente ascendente
export function ordenarPeliculasAZ(peliculas) {
  return peliculas.sort( (x, y) => x.title.localeCompare(y.title) );
}

// TODO: Función para obtener películas alfabéticamente descendente
export function ordenarPeliculasZA(peliculas) {
  return peliculas.sort( (x, y) => y.title.localeCompare(x.title) );
}

// TODO: Función para calcular promedio Score
export function calcularPromedioScore(peliculas){
  const totalScore = peliculas.reduce((total, pelicula)=>total + parseFloat(pelicula.rt_score) ,0);
  const promedioScore = totalScore/peliculas.length
  return promedioScore
}