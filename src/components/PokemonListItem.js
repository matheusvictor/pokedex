class PokemonListItem extends HTMLElement {

    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' });
        shadow.appendChild(this.build());
        shadow.appendChild(this.setStyle());
    }

    build() {
        const componentRoot = document.createElement('section');
        componentRoot.setAttribute('class', 'pokedex-content');

        const pokemonList = document.createElement('ol');
        pokemonList.setAttribute('class', 'pokemon-list');
        pokemonList.appendChild(listItem);

        const listItem = document.createElement('li');
        listItem.setAttribute('class', 'pokemon-card type');
        pokemonList.appendChild(pokemonNumber);

        const pokemonNumber = document.createElement('span');
        pokemonNumber.setAttribute('class', 'pokemon-number');

        const pokemonName = document.createElement('span');
        pokemonName.setAttribute('class', 'pokemon-name');
       
        const pokemonDetails = document.createElement('div');
        pokemonDetails.setAttribute('class', 'pokemon-details');

        const pokemonTypes = document.createElement('ol');
        pokemonTypes.setAttribute('class', 'pokemon-types');

        const pokemonType = document.createElement('li');
        pokemonType.setAttribute('class', 'pokemon-type');

        const pokemonImageContainer = document.createElement('div');
        pokemonImageContainer.setAttribute('class', 'pokemon-image');

        const image = document.createElement('img');

        componentRoot.appendChild(pokemonList);

        return componentRoot;
    }

    setStyle() {

    }

}

customElements.define('pokemon-list-item', PokemonListItem);
