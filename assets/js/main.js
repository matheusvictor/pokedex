function convertPokemonToListItem(pokemon) {
    return `
        <li class="pokemon">
        <span class="number">#${pokemon.order}</span>
        <span class="name">
            ${pokemon.name}
        </span>

        <div class="details">
            <ol class="types">
                ${convertPokemonTypesToListItem(pokemon.types).join('')}
            </ol>      
            <img src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name}">
        </div>
    </li>
    `;
}

function convertPokemonTypesToListItem(pokemonTypes) {
    return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`);
}

var pokemonList = document.getElementById("pokemonList");

pokeApi.getAll().then((pokemons = []) => {
    pokemonList.innerHTML += pokemons.map(
                                (pokemon) => convertPokemonToListItem(pokemon)).join('')
});
