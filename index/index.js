// Función para obtener detalles de un Pokémon por nombre
async function obtenerDetallesPokemon(nombre) {
    try {
        const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);
        const datos = await respuesta.json();
        return datos;
    } catch (error) {
        console.error('Error al obtener detalles del Pokémon:', error);
    }
}

// Función para obtener habilidades de un Pokémon específico
async function obtenerHabilidadesPokemon(nombre) {
    try {
        const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);
        const datos = await respuesta.json();
        return datos.abilities;
    } catch (error) {
        console.error('Error al obtener habilidades del Pokémon:', error);
    }
}

// Función para obtener información sobre un tipo específico de Pokémon
async function obtenerInformacionTipoPokemon(tipo) {
    try {
        const respuesta = await fetch(`https://pokeapi.co/api/v2/type/${tipo}`);
        const datos = await respuesta.json();
        return datos;
    } catch (error) {
        console.error('Error al obtener información del tipo de Pokémon:', error);
    }
}

// Función para obtener una lista de los primeros 50 Pokémon
async function obtenerListaPokemons() {
    try {
        const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=50`);
        const datos = await respuesta.json();
        return datos.results;
    } catch (error) {
        console.error('Error al obtener la lista de Pokémon:', error);
    }
}

// Ejemplo de uso de las funciones
async function obtenerInformacionPokemon() {
    const detallesPokemon = await obtenerDetallesPokemon('pikachu');
    console.log('Detalles de Pikachu:', detallesPokemon);

    const habilidadesPokemon = await obtenerHabilidadesPokemon('charmander');
    console.log('Habilidades de Charmander:', habilidadesPokemon);

    const informacionTipoPokemon = await obtenerInformacionTipoPokemon('water');
    console.log('Información sobre el tipo de Pokémon Agua:', informacionTipoPokemon);

    const listaPokemons = await obtenerListaPokemons();
    console.log('Lista de los primeros 50 Pokémon:', listaPokemons);
}

obtenerInformacionPokemon();


//-------------------------------------------------------------------------------------------------------//

// Función para obtener los detalles de un Pokémon por nombre
async function obtenerDetallesPokemon(nombre) {
    try {
        const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);
        const datos = await respuesta.json();
        return datos;
    } catch (error) {
        console.error('Error al obtener detalles del Pokémon:', error);
    }
}

// Función para obtener el nombre y el tipo de la evolución de un Pokémon
async function obtenerEvolucionPokemon(urlEvolucion) {
    try {
        const respuesta = await fetch(urlEvolucion);
        const datos = await respuesta.json();
        return datos;
    } catch (error) {
        console.error('Error al obtener detalles de la evolución del Pokémon:', error);
    }
}

// Función para obtener el nombre y el tipo de un Pokémon, así como el nombre y el tipo de su evolución
async function obtenerInformacionCompletaPokemon(nombrePokemon) {
    try {
        // Obtener detalles del Pokémon
        const detallesPokemon = await obtenerDetallesPokemon(nombrePokemon);
        const nombrePokemon = detallesPokemon.name;
        const tipoPokemon = detallesPokemon.types[0].type.name;

        // Obtener detalles de la evolución del Pokémon (si existe)
        const especieUrl = detallesPokemon.species.url;
        const especie = await obtenerEvolucionPokemon(especieUrl);
        const evolucionUrl = especie.evolution_chain.url;
        const evolucion = await obtenerEvolucionPokemon(evolucionUrl);
        const nombreEvolucion = evolucion.chain.species.name;
        const tipoEvolucion = evolucion.chain.evolves_to[0].species.name;

        // Mostrar la información obtenida
        console.log(`Nombre del Pokémon: ${nombrePokemon}`);
        console.log(`Tipo del Pokémon: ${tipoPokemon}`);
        console.log(`Nombre de la Evolución: ${nombreEvolucion}`);
        console.log(`Tipo de la Evolución: ${tipoEvolucion}`);
    } catch (error) {
        console.error('Error al obtener información del Pokémon:', error);
    }
}

// Ejemplo de uso de la función
obtenerInformacionCompletaPokemon('pikachu');
