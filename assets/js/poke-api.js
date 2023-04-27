const apiVersion = 'v2';
const source = 'pokemon'

const  pokeApi = {}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url).then((response) => response.json());
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
