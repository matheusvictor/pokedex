const apiVersion = 'v2';
const source = 'pokemon'

const  pokeApi = {};

function convertPokeApiDetailsToPokemon(pokemonDetails) {
    // debugger

    const types = pokemonDetails.types.map((typeSlot) => typeSlot.type.name);
    const [mainType] = types

    return new Pokemon(
        pokemonDetails.id,
        pokemonDetails.name,
        types,
        mainType,
        pokemonDetails.image = pokemonDetails.sprites.other.dream_world.front_default
    );
}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
                            .then((response) => response.json())
                            .then(convertPokeApiDetailsToPokemon);
}

pokeApi.getMoreDetailsOfPokemon = (pokemonNumber) => {
    const URL = `https://pokeapi.co/api/${apiVersion}/${source}/${pokemonNumber}`;

    return fetch(URL)
                    .then((response) => response.json())
                    .then((data) => {

                        console.log(data)
                        let stats = data.stats.map(stat => stat.base_stat);

                        const otherDetails = {
                            height: (data.height) / 10,
                            weight: data.weight / 10,
                            hp: data.stats.find((stat) => stat.stat.name).base_stat,
                            attack: stats[1],
                            defense: stats[2],
                            specialAttack: stats[3],
                            specialDefense: stats[4],
                            speed: stats[5]
                        };

                        console.log(otherDetails)
                        alert(`Pokémon: ${data.name}\nPeso: ${otherDetails.weight},\nAltura: ${otherDetails.height}`);
                    })
                    .catch((error) => console.log(error));
}

pokeApi.getAllPokemons = (offset = 0, limit = 5) => {
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
