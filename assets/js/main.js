
const apiVersion = 'v2';
const source = 'pokemon'
const URL = `https://pokeapi.co/api/${apiVersion}/${source}`;

function convertPokemonToListItem(pokemon) {
    return `
        <li class="pokemon">
        <span class="number">#001</span>
        <span class="name">
            ${pokemon.name}
        </span>

        <div class="details">
            <ol class="types">
                <li class="type">Grass</li>
                <li class="type">Posion</li>
            </ol>      
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="${pokemon.name}">
        </div>
    </li>
    `;
}

var pokemonList = document.getElementById("pokemonList");

fetch(URL)
    .then((response) => response.json())
    .then((responseBody) => responseBody.results)
    .then((pokemons) => {
        // debugger
        for (let i = 0; i < pokemons.length; i++) {
            const pokemon = pokemons[i];
            pokemonList.innerHTML += convertPokemonToListItem(pokemon);
        }
    })
    .catch(function (error){
        console.log(error)
    })
    .finally(() => {
        console.log('Requisição finalizada!');
    });
