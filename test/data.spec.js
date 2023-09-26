
import { obtenerPeliculas, obtenerDirectores, obtenerPersonajes,obtenerLugares,obtenerPeliculaPorId,obtenerProductores,obtenerPeliculasPorTitulo, filtrarPeliculasPorAnho, filtrarPeliculasPorDirector, filtrarPeliculasPorProductor, buscarTermino, ordenarPeliculasPorAñoAscendente,} from '../src/data.js';
import  ghibli  from "./mock-ghibli.js";
// TODO: Datos de prueba: simular objeto con data
//*Data películas:
//
const DATA_PRUEBA_PELICULAS = ghibli
const datosDePrueba = {
  films: [
    {
      producer: 'Isao Takahata',
    },
    {
      producer: 'Isao Takahata',
    },
    {
      producer: 'Hayao Miyazaki',
    },
    {
      producer: 'Hayao Miyazaki',
    },
    {
      producer: 'Hayao Miyazaki',
    },
  ],
};

// TODO: Tests
//* Test para la función obtenerPeliculas
describe("Función obtenerPeliculas()", () => {
  it("Es una función", () => {
    expect(typeof obtenerPeliculas).toBe('function');
  });
  it ("Devuelve un arreglo", () => {
    const resultadoObtenido = obtenerPeliculas(DATA_PRUEBA_PELICULAS);
    expect(Array.isArray(resultadoObtenido)).toBe(true);
  })
  it("Devuelve un arreglo de objetos", () => {
    expect(typeof obtenerPeliculas(DATA_PRUEBA_PELICULAS)[0]).toBe("object");
  });
});

//* Test para obtenerPersonajes
describe("Función obtenerPersonajes", () => {
  it("debería devolver un array de personajes", () => {
    const personajes = obtenerPersonajes(DATA_PRUEBA_PELICULAS);
    expect(Array.isArray(personajes)).toBe(true);
    expect(personajes.length).toBeGreaterThan(0);
    personajes.forEach((personajeArray) => {
      expect(Array.isArray(personajeArray)).toBe(true);
      personajeArray.forEach((personaje) => {
        expect(personaje).toHaveProperty("name");
        expect(typeof personaje.name).toBe("string");
      });
    });
  });
});

//* Test obtenerDirectores
describe('obtenerDirectores()', () => {
  it("Es una función", () => {
    expect(typeof obtenerDirectores).toBe('function');
  });
  it ("Devuelve un arreglo", () => {
    const resultadoObtenido = obtenerDirectores(DATA_PRUEBA_PELICULAS);
    expect(Array.isArray(resultadoObtenido)).toBe(true);
  }) 
});
describe("Función obtenerLugares", () => {
  test("debería devolver un array de lugares", () => {
    const lugares = obtenerLugares(DATA_PRUEBA_PELICULAS);

    expect(Array.isArray(lugares)).toBe(true);

    expect(lugares.length).toBeGreaterThan(0);
    lugares.forEach((lugarArray) => {
      expect(Array.isArray(lugarArray)).toBe(true);

      lugarArray.forEach((lugar) => {
        expect(lugar).toHaveProperty("name");
        expect(typeof lugar.name).toBe("string");
      });
    });
  });
});
describe("Función obtenerDirectores", () => {
  // Prueba positiva
  test("debería devolver un array de directores", () => {
    const directores = obtenerDirectores(DATA_PRUEBA_PELICULAS);

    // Verificar que la respuesta es un array
    expect(Array.isArray(directores)).toBe(true);

    // Verificar que al menos hay un director
    expect(directores.length).toBeGreaterThan(0);
  
    // Verificar que cada director sea una cadena de texto
    directores.forEach((director) => {
      expect(typeof director).toBe("string");
    });
  });

  // Prueba negativa
  test("debería devolver un array vacío si no se proporciona data", () => {
    const directores = obtenerDirectores(null); // Pasar null o datos inexistentes

    // Verificar que la respuesta es un array vacío
    expect(Array.isArray(directores)).toBe(true);
    expect(directores.length).toBe(0);
  });
});

describe("Obtener película por ID", () => {
  it("Debería devolver la película correspondiente cuando se le proporciona un ID válido", () => {
    const idPelicula = "2baf70d1-42bb-4437-b551-e5fed5a87abe"; // Reemplaza con un ID válido de una película existente
    const peliculaObtenida = obtenerPeliculaPorId(DATA_PRUEBA_PELICULAS,idPelicula);
    // Realiza las afirmaciones para verificar que la película obtenida coincide con la película esperada
    // Por ejemplo:
    expect(peliculaObtenida.id).toBe(idPelicula);
    expect(peliculaObtenida.title).toBe("Castle in the Sky");
    // Agrega más expectativas según tus necesidades
  });

  it("Debería devolver undefined cuando se le proporciona un ID no válido", () => {
    const idNoValido = "IDNoExistente"; // Reemplaza con un ID que no exista en tus datos de películas
    const peliculaObtenida = obtenerPeliculaPorId(DATA_PRUEBA_PELICULAS,idNoValido);
    expect(peliculaObtenida).toBeUndefined();
  });
});

describe('obtenerProductores', () => {
  it('Debería devolver una lista de productores sin duplicados', () => {
    const productores = obtenerProductores(datosDePrueba);
    // La función debería devolver ['Isao Takahata', 'Hayao Miyazaki'] sin duplicados
    expect(productores).toEqual(['Isao Takahata', 'Hayao Miyazaki']);
  });

  it('Debería devolver una lista vacía si no hay películas', () => {
    const productores = obtenerProductores({ films: [] });
    // La función debería devolver una lista vacía
    expect(productores).toEqual([]);
  });

  it('Debería devolver una lista vacía si no se proporcionan datos', () => {
    const productores = obtenerProductores(undefined);
    // La función debería devolver una lista vacía
    expect(productores).toEqual([]);
  });
});

describe('obtenerPeliculasPorTitulo()', () => {
  it('Debería devolver una película cuando se proporciona un título válido', () => {
    const titulo = 'Castle in the Sky';
    const peliculasEncontradas = obtenerPeliculasPorTitulo(DATA_PRUEBA_PELICULAS, titulo);
    expect(peliculasEncontradas.length).toBeGreaterThan(0);
    const peliculaConTituloCorrecto = peliculasEncontradas.some((pelicula) =>
      pelicula.title.toLowerCase() === titulo.toLowerCase()
    );
    expect(peliculaConTituloCorrecto).toBe(true);
  });

  it('Debería devolver una película cuando se proporciona un título válido (ignorando mayúsculas y minúsculas)', () => {
    const titulo = 'my neighbor TOTORO';
    const peliculasEncontradas = obtenerPeliculasPorTitulo(DATA_PRUEBA_PELICULAS, titulo);
  

    expect(peliculasEncontradas.length).toBeGreaterThan(0);

    const peliculaCoincidente = peliculasEncontradas.some((pelicula) =>
      pelicula.title.toLowerCase() === titulo.toLowerCase()
    );
  
    expect(peliculaCoincidente).toBe(true);
  });

  it('Debería devolver una lista vacía cuando se proporciona un título que no existe', () => {
    const titulo = 'Título Inexistente';
    const peliculaEncontrada = obtenerPeliculasPorTitulo(DATA_PRUEBA_PELICULAS, titulo);
    expect(peliculaEncontrada).toEqual([]);
  });

  it('Debería devolver una lista vacía cuando no se proporciona ningún título', () => {
    const peliculaEncontrada = obtenerPeliculasPorTitulo(DATA_PRUEBA_PELICULAS, '');
    expect(peliculaEncontrada).toEqual([]);
  });

  it('Debería devolver una lista vacía cuando no se proporcionan datos', () => {
    const peliculaEncontrada = obtenerPeliculasPorTitulo(null, 'Castle in the Sky');

    // Asegúrate de que la película encontrada sea una lista vacía (datos no proporcionados)
    expect(peliculaEncontrada).toEqual([]);
  });
});

describe('filtrarPeliculasPorAnho', () => {
  it('Debería devolver "Castle in the Sky" cuando se filtra por el rango de años 1986-1986', () => {
    const anho1 = 1986;
    const anho2 = 1986;
    const peliculasFiltradas = filtrarPeliculasPorAnho(anho1, anho2);
    expect(peliculasFiltradas.length).toBe(1);
    expect(peliculasFiltradas[0].title).toBe("Castle in the Sky");
  });

  it('Debería devolver "Castle in the Sky" cuando se filtra por el rango de años 1985-1987', () => {
    const anho1 = 1985;
    const anho2 = 1987;
    const peliculasFiltradas = filtrarPeliculasPorAnho(anho1, anho2);
    expect(peliculasFiltradas.length).toBe(1);
    expect(peliculasFiltradas[0].title).toBe("Castle in the Sky");
  });

  it('No debería devolver películas cuando se filtra por un rango que no coincide con ningún año', () => {
    const anho1 = 1990;
    const anho2 = 1995;
    const peliculasFiltradas = filtrarPeliculasPorAnho(anho2, anho1);
    expect(peliculasFiltradas.length).toBe(0);
  });

  // Puedes agregar más pruebas aquí según tus necesidades

});
describe('filtrarPeliculasPorDirector', () => {
  it('debería devolver las películas del director especificado', () => {
    const director = 'Hayao Miyazaki'; // El director que deseas probar
    const peliculasFiltradas = filtrarPeliculasPorDirector(director, DATA_PRUEBA_PELICULAS.films);
    expect(peliculasFiltradas).toHaveLength(3); 
    expect(peliculasFiltradas[0].title).toBe('Castle in the Sky');
    expect(peliculasFiltradas[1].title).toBe('My Neighbor Totoro');
    expect(peliculasFiltradas[2].title).toBe("Kiki's Delivery Service");
  });

  it('debería devolver un array vacío si no hay películas del director especificado', () => {
    const director = 'Director Inexistente'; 
    const peliculasFiltradas = filtrarPeliculasPorDirector(director, DATA_PRUEBA_PELICULAS.films);
    expect(peliculasFiltradas).toHaveLength(0);
  });
});

describe('filtrarPeliculasPorProductor', () => {
  const peliculas = DATA_PRUEBA_PELICULAS.films;

  it('debería devolver un arreglo vacío si no se encuentran películas coincidentes', () => {
    const result = filtrarPeliculasPorProductor('Productor Inexistente', peliculas);
    expect(result).toEqual([]);
  });

  it('debería devolver un arreglo de películas producidas por el productor especificado', () => {
    const nombreProductor = 'Isao Takahata'; // Reemplaza con el productor que deseas probar
    const result = filtrarPeliculasPorProductor(nombreProductor, peliculas);

    // Verificar que cada película en el resultado tenga el productor correcto
    result.forEach((pelicula) => {
      expect(pelicula.producer).toBe(nombreProductor);
    });
  });

  it('debería devolver todas las películas si se proporciona una cadena vacía como productor', () => {
    const result = filtrarPeliculasPorProductor('', peliculas);
    expect(result).toEqual(peliculas);
  });
});

describe('buscarTermino', () => {
  const peliculas = DATA_PRUEBA_PELICULAS.films;

  it('debería devolver un arreglo vacío si no se encuentran películas coincidentes', () => {
    const result = buscarTermino('Término Inexistente', { films: [] });
    expect(result).toEqual([]);
  });

  it('debería devolver un arreglo de películas que coinciden con el término de búsqueda (ignorando mayúsculas y minúsculas)', () => {
    const terminoBusqueda = 'castle'; 
    const result = buscarTermino(terminoBusqueda, { films: peliculas });

    result.forEach((pelicula) => {
      expect(pelicula.title.toLowerCase()).toContain(terminoBusqueda.toLowerCase());
    });
  });

  it('debería devolver todas las películas si se proporciona una cadena vacía como término de búsqueda', () => {
    const result = buscarTermino('', { films: peliculas });
    expect(result).toEqual(peliculas);
  });
});

describe('ordenarPeliculasPorAñoAscendente', () => {
  it('debería ordenar las películas por año de lanzamiento de manera ascendente', () => {
    const peliculas = [
      {
        id: '1',
        title: 'Película 1',
        release_date: '1990',
      },
      {
        id: '2',
        title: 'Película 2',
        release_date: '1985',
      },
      {
        id: '3',
        title: 'Película 3',
        release_date: '2000',
      },
    ];

    const peliculasOrdenadas = ordenarPeliculasPorAñoAscendente(peliculas);

    // Verificar que las películas estén ordenadas de manera ascendente por año de lanzamiento
    expect(peliculasOrdenadas).toEqual([
      {
        id: '2',
        title: 'Película 2',
        release_date: '1985',
      },
      {
        id: '1',
        title: 'Película 1',
        release_date: '1990',
      },
      {
        id: '3',
        title: 'Película 3',
        release_date: '2000',
      },
    ]);
  });

  it('debería mantener el orden si las películas ya están ordenadas por año de lanzamiento', () => {
    const peliculas = [
      {
        id: '1',
        title: 'Película 1',
        release_date: '1980',
      },
      {
        id: '2',
        title: 'Película 2',
        release_date: '1995',
      },
      {
        id: '3',
        title: 'Película 3',
        release_date: '2005',
      },
    ];

    const peliculasOrdenadas = ordenarPeliculasPorAñoAscendente(peliculas);

    // Verificar que las películas mantengan su orden original
    expect(peliculasOrdenadas).toEqual(peliculas);
  });

  it('debería devolver una copia de la lista de películas sin modificar la lista original', () => {
    const peliculas = [
      {
        id: '1',
        title: 'Película 1',
        release_date: '1990',
      },
      {
        id: '2',
        title: 'Película 2',
        release_date: '1985',
      },
      {
        id: '3',
        title: 'Película 3',
        release_date: '2000',
      },
    ];
  
    const peliculasOrdenadas = ordenarPeliculasPorAñoAscendente(peliculas);
  
    // Verificar que la lista original no se ha modificado
    expect([...peliculas]).toEqual(peliculasOrdenadas);
  });
});
