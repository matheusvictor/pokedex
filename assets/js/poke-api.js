const apiVersion = 'v2';
const source = 'pokemon'

const  pokeApi = {};

function convertPokeApiDetailsToPokemon(details) {
    return new Pokemon(
        details.number,
        details.name,
        details.types.map((typeSlot) => {typeSlot.type.name}),
        details.image = details.sprites.other.dream_world.front_default
    );
}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
                            .then((response) => response.json())
                            .then(convertPokeApiDetailsToPokemon);
}

pokeApi.getAll = (offset = 0, limit = 10) => {
    const URL = `https://pokeapi.co/api/${apiVersion}/${source}?offset=${offset}&limit=${limit}`;
    
    return fetch(URL)
            .then((response) => response.json())
            .then((responseBodyToJson) => responseBodyToJson.results)
            .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
            .then((detailsRequests) => Promise.all(detailsRequests))
            .then((pokemonsDetails) => pokemonsDetails)
            .catch(function (error){
                console.log(error)
            });
}
