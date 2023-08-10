/*
! Descripción:
  * data.js contiene el import de data Ghibli, funciones para obtener películas y filtros
*/

import data from "./data/ghibli/ghibli.js"

// TODO: Función para obtener películas
export function obtenerPeliculas() {
  return data.films;
}

// TODO: Función para obtener directores
export function obtenerDirectores() {
  const directores = data.films.map( (pelicula) => pelicula.director );
  const directoresFiltrados = directores.filter((director, indice) => {
    return directores.indexOf(director) === indice;
  })
  return directoresFiltrados;
}

// TODO: Función para obtener productores
export function obtenerProductores() {
  const productores = data.films.map( (pelicula) => pelicula.producer );
  const productoresFiltrados = productores.filter((productor, indice) => {
    return productores.indexOf(productor) === indice;
  })
  return productoresFiltrados;
}

// TODO: Función para encontrar películas por título
export function obtenerPeliculasPorTitulo(titulo) {
  return data.films.find((pelicula) => pelicula.title === titulo);
}

// TODO: Función para filtrar películas por año
export function filtrarPeliculasPorAnho(anho1, anho2) {
  return data.films.filter((pelicula) => pelicula.release_date >= anho1 && pelicula.release_date <= anho2)
}

// TODO: Función para filtrar películas por director
// export function filtrarPeliculasPorDirector(director, peliculasFiltradas) {
//   return peliculasFiltradas.filter((pelicula) => pelicula.director === director)
// }

