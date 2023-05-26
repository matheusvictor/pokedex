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
 
        const listItem = document.createElement('li');
        listItem.setAttribute('class', 'pokemon-card type');
        listItem.setAttribute('onclick', 'onclick="showMorePokemonDetails()"');        
       
        const pokemonNumber = document.createElement('span');
        pokemonNumber.setAttribute('class', 'pokemon-number');
        pokemonNumber.textContent = '#' + this.getAttribute('pokemonNumber');

        const pokemonName = document.createElement('span');
        pokemonName.setAttribute('class', 'pokemon-name'); 
        pokemonName.textContent = this.getAttribute('pokemonName');
       
        const pokemonDetails = document.createElement('div');
        pokemonDetails.setAttribute('class', 'pokemon-details');

        const pokemonTypes = document.createElement('ol');
        pokemonTypes.setAttribute('class', 'pokemon-types');

        const pokemonPrimaryType = document.createElement('li');
        pokemonPrimaryType.setAttribute('class', 'pokemon-type');
        pokemonPrimaryType.textContent = this.getAttribute('pokemonPrimaryType');

        const pokemonSecoundType = document.createElement('li');
        pokemonSecoundType.setAttribute('class', 'pokemon-type');
        pokemonSecoundType.textContent = this.getAttribute('pokemonSecoundType');

        const pokemonImageContainer = document.createElement('div');
        pokemonImageContainer.setAttribute('class', 'pokemon-image');

        const image = document.createElement('img');
        image.src = this.getAttribute('image')

        componentRoot.appendChild(pokemonList);
        pokemonList.appendChild(listItem);
        listItem.appendChild(pokemonNumber);
        listItem.appendChild(pokemonName);
        listItem.appendChild(pokemonDetails);

        pokemonDetails.appendChild(pokemonTypes);
        pokemonTypes.appendChild(pokemonPrimaryType);
        pokemonTypes.appendChild(pokemonSecoundType);

        pokemonDetails.appendChild(pokemonImageContainer);
        pokemonImageContainer.appendChild(image);

        return componentRoot;
    }

    setStyle() {
        const style = document.createElement('style');
        
        style.textContent = `
            .pokedex-content {
                height: 100vh;
                width: 100vw;
                padding: 1rem;
            }
            
            .pokemon-list {
                margin: 0;
                padding: 0;
                display: grid;
                list-style: none;
                grid-template-columns: 1fr;
            }
            
            .pokemon-card {
                margin: 0.5rem;
                padding: 0rem 1rem;
                border-radius: 1rem;
                display: flex;
                flex-direction: column;
                background-color: #403f46;
            }

            .pokemon-card:hover {
                cursor: pointer;
            }

            .pokemon-number {
                color: whitesmoke;
                text-align: center;
                font-size: 0.825rem;
                padding: .8rem 1rem;
                align-self: flex-end;
                background-color: blueviolet;
                border-radius: 0 0 0.5rem 0.5rem;
            }

            .pokemon-name {
                color: white;
                text-align: left;
                font-size: 1.5rem;
                padding: 1rem 0;
                font-weight: 400;
            }

            .pokemon-details {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
            }

            .pokemon-details .pokemon-types {
                padding: 0;
                margin: 0;
                list-style: none;
            }

            .pokemon-details .pokemon-types .pokemon-type {
                color: #fff;
                padding: .25rem .8rem;
                margin: .25rem 0;
                font-size: .8rem;
                border-radius: 1rem;
                text-align: center;
                filter: brightness(1.1);
                background-color: blueviolet;
            }

            .pokemon-image img {
                max-width: 100%;
                height: 120px;
                margin: 0.5rem;
                display: block;
                align-self: flex-end;
                filter: drop-shadow(0 0 0.8rem rgb(0, 0, 0));
            }

            .bug .pokemon-image:hover img{
                filter: drop-shadow(0 0 0.8rem var(--bug));
            }

            .dark .pokemon-image:hover img{
                filter: drop-shadow(0 0 0.8rem var(--dark));
            }`;

        return style;
    }

}

customElements.define('pokemon-list-item', PokemonListItem);
