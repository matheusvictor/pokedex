class PokemonDetailsCard extends HTMLElement {
   
    constructor(){
        super();

        const shadow = this.attachShadow({ mode: 'open' });
        shadow.appendChild(this.build());
        shadow.appendChild(this.setStyle());
    }

    build() {
        const componentRoot = document.createElement('div');
        componentRoot.setAttribute('class', 'pokemon-card-details');

        const cardImageContainer = document.createElement('div');
        cardImageContainer.setAttribute('class', 'pokemon-card-image');

        const pokemonImage = document.createElement('img');
        pokemonImage.src = this.getAttribute('src');

        cardImageContainer.appendChild(pokemonImage);
        componentRoot.appendChild(cardImageContainer);

        return componentRoot
    }

    setStyle() {

    }

}

customElements.define('pokemon-details-card', PokemonDetailsCard);
