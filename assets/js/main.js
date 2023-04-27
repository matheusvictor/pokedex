function convertPokemonToListItem(pokemon) {
    return `
        <li class="pokemon">
        <span class="number">#${pokemon.number}</span>
        <span class="name">
            ${pokemon.name}
        </span>

        <div class="details">
            <ol class="types">
                ${pokemon.types.map((type) => `<li class="type">${type}</li>`).join('')}
            </ol>      
            <img src="${pokemon.image}" alt="${pokemon.name}">
        </div>
    </li>
    `;
}

var pokemonList = document.getElementById("pokemonList");

pokeApi.getAll().then((pokemons = []) => {
    pokemonList.innerHTML += pokemons.map(
                                (pokemon) => convertPokemonToListItem(pokemon)).join('')
});
