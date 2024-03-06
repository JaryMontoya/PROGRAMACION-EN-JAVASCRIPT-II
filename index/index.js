// Función para obtener detalles de un Pokémon por nombre
async function obtenerDetallesPokemon(nombre) {
    try {
        const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);
        const datos = await respuesta.json();
        console.log('Detalles del Pokémon:', datos);
    } catch (error) {
        console.error('Error al obtener detalles del Pokémon:', error);
    }
}

// Función para obtener habilidades de un Pokémon específico
async function obtenerHabilidadesPokemon(nombre) {
    try {
        const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);
        const datos = await respuesta.json();
        console.log('Habilidades del Pokémon:', datos.abilities);
    } catch (error) {
        console.error('Error al obtener habilidades del Pokémon:', error);
    }
}

// Función para obtener información sobre un tipo específico de Pokémon
async function obtenerInformacionTipoPokemon(tipo) {
    try {
        const respuesta = await fetch(`https://pokeapi.co/api/v2/type/${tipo}`);
        const datos = await respuesta.json();
        console.log('Información sobre el tipo de Pokémon:', datos);
    } catch (error) {
        console.error('Error al obtener información del tipo de Pokémon:', error);
    }
}

// Función para obtener una lista de los primeros 50 Pokémon
async function obtenerListaPokemons() {
    try {
        const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=50`);
        const datos = await respuesta.json();
        console.log('Lista de los primeros 50 Pokémon:', datos.results);
    } catch (error) {
        console.error('Error al obtener la lista de Pokémon:', error);
    }
}

// Función para obtener detalles de un Pokémon y su evolución
async function obtenerDetallesYEvolucionPokemon(nombre) {
    try {
        const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);
        const datosPokemon = await respuesta.json();
        console.log('Detalles del Pokémon:', datosPokemon);

        const especieUrl = datosPokemon.species.url;
        const respuestaEspecie = await fetch(especieUrl);
        const datosEspecie = await respuestaEspecie.json();
        const cadenaEvolucionUrl = datosEspecie.evolution_chain.url;

        const respuestaCadenaEvolucion = await fetch(cadenaEvolucionUrl);
        const datosCadenaEvolucion = await respuestaCadenaEvolucion.json();
        console.log('Cadena de evolución del Pokémon:', datosCadenaEvolucion);
    } catch (error) {
        console.error('Error al obtener detalles y evolución del Pokémon:', error);
    }
}

// Invocar las funciones según sea necesario
obtenerDetallesPokemon('pikachu');
obtenerHabilidadesPokemon('charmander');
obtenerInformacionTipoPokemon('water');
obtenerListaPokemons();
obtenerDetallesYEvolucionPokemon('pikachu');
