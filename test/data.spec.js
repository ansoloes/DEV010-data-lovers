// import { obtenerPeliculas, obtenerDirectores, obtenerPeliculaPorId, obtenerPeliculasPorTitulo, obtenerPersonajes, obtenerProductores,filtrarPeliculasPorAnho, filtrarPeliculasPorDirector,filtrarPeliculasPorProductor,aplicarFiltros , calcularPromedioScore, buscarTermino} from '../src/data.js';
import { obtenerPeliculas} from '../src/data.js';
import  ghibli  from "./mock-ghibli.js";
// TODO: Datos de prueba: simular objeto con data
//*Data películas:
//
const DATA_PRUEBA_PELICULAS = ghibli

// TODO: Tests
// Test para la función obtenerPeliculas
describe("Función obtenerPeliculas()", () => {
  it("Es una función", () => {
    expect(typeof obtenerPeliculas).toBe('function');
  });
  it ("Produce un arreglo", () => {
    const resultadoObtenido = obtenerPeliculas(DATA_PRUEBA_PELICULAS);
    expect(Array.isArray(resultadoObtenido)).toBe(true);
  })
  // it ("devuelve un.... ")
});

// // Test para obtenerPersonajes
// describe('obtenerPersonajes retorna un arreglo de personajes', () => {
//   const personajes = obtenerPersonajes();
//   expect(typeof obtenerPersonajes).toBe('function');
//   expect(Array.isArray(personajes)).toBe(true);
// });
// // Test obtenerDirectores
// describe('obtenerDirectores retorna un arreglo de directores', () => {
//   const directores = obtenerDirectores();
//   expect(typeof obtenerDirectores).toBe('function');
//   expect(Array.isArray(directores)).toBe(true);
// });
// // Test para obtenerProductores
// describe('obtenerProductores retorna un arreglo de productores', () => {
//   const productores = obtenerProductores();
//   expect(typeof obtenerDirectores).toBe('function');
//   expect(Array.isArray(productores)).toBe(true);
// });
// // Test para obtenerPeliculasPorTitulo
// describe('obtenerPeliculasPorTitulo obtiene una película por título', () => {
//   const pelicula = obtenerPeliculasPorTitulo('My Neighbor Totoro');
//   expect(pelicula.title).toBe('My Neighbor Totoro');
// });
// // Test para obtenerPeliculaPorId
// describe('obtenerPeliculaPorId obtiene una película por su ID', () => {
//   const pelicula = obtenerPeliculaPorId('67405111-37a5-438f-81cc-4666af60c800');
//   expect(pelicula.title).toBe("The Wind Rises");
// });

// // test para filtrarPeliculasPorDirector()
// describe('filtrarPeliculasPorDirector filtra películas por director', () => {
//   const peliculasFiltradas = filtrarPeliculasPorDirector('Hayao Miyazaki', obtenerPeliculas());
//   expect(peliculasFiltradas/* NOSEQUEPONER ACÁ jajaj */).toBe(/*qué esperamos*/);
// });
// // Test para filtrarPeliculasPorProductor
// describe('filtrarPeliculasPorProductor filtra películas por productor', () => {
//   const peliculasFiltradas = filtrarPeliculasPorProductor('Toshio Suzuki', obtenerPeliculas());
//   expect(peliculasFiltradas/* NOSEQUEPONER ACÁ jajaj */).toBe(/*qué esperamos*/);
// });

// // Test filtro por año 
// describe('filtrarPeliculasPorAnho filtra películas correctamente por año', () => {
//   const peliculasFiltradas = filtrarPeliculasPorAnho(1986, 1995);
//   expect(peliculasFiltradas/* NOSEQUEPONER ACÁ jajaj */).toBe(/*qué esperamos*/);
// });

// // Test para calcularPromedioScore
// describe('calcularPromedioScore calcula el promedio de score correctamente', () => {
//   expect(typeof obtenerDirectores).toBe('function'); //!


// });

// // Test para buscarTermino
// test('buscarTermino busca películas por término en el título', () => {
//   const peliculasEncontradas = buscarTermino('CaStLe');
//   expect(typeof buscarTermino).toBe('function');
// });
