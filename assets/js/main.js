const pokemonList = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMore');

let offset = 0;
const limit = 10;
const MAX_RECORDS = 151;

function loadMorePokemonItens(offset, limit) {
    pokeApi.getAllPokemons(offset, limit).then((pokemons = []) => {
        pokemonList.innerHTML += pokemons.map((pokemon) => `
                                            <li class="pokemon ${pokemon.mainType}" onClick="showMorePokemonDetails(${pokemon.number})">
                                                <span class="pokemon-number">#${pokemon.number}</span>
                                                <span class="name">${pokemon.name}</span>
                                    
                                                <div class="details">
                                                    <ol class="types">
                                                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                                                    </ol>      
                                                    <img src="${pokemon.image}" alt="${pokemon.name}">
                                                </div>
                                            </li>
                                            `
                                        ).join('')
    });    
}


let modalContainer = document.getElementById("modalContainer");

function showMorePokemonDetails(number) {
    pokeApi.getMoreDetailsOfPokemon(number);
    console.log(`Cliquei em ${number}`);

    console.log(modalContainer)
}

loadMorePokemonItens(offset, limit);

loadMoreButton.addEventListener('click', () => {
    // debugger
    offset += limit;
    const qtRecordsOnNextPage = offset + limit;
    
    if (qtRecordsOnNextPage >= MAX_RECORDS) {
        const newLimit = MAX_RECORDS - offset; 
        loadMorePokemonItens(offset, newLimit);   
        
        loadMoreButton.parentElement.removeChild(loadMoreButton);
    } else {
        loadMorePokemonItens(offset, limit); 
    }
});
