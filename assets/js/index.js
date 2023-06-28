const pokemonList = document.getElementById('pokemon-list')
let URL = 'https://pokeapi.co/api/v2/pokemon/';

for (let i = 1; i <= 151; i++) {
    fetch(URL + i)
        .then(res => res.json())
        .then(data => showPokemon(data))
}

function showPokemon(poke) {

    let elementalTypes = poke.types.map((type) => `<div class="${type.type.name} ${type.slot === 2 ? 'round' : ''} type"><p>${type.type.name}</p></div>`);
    elementalTypes = elementalTypes.join(``);

    let pokeId = poke.id.toString();
    if (pokeId.length === 1) {
        pokeId = '00' + pokeId;
    } else if(pokeId.length === 2) {
        pokeId = '0' + pokeId;
    }

    let cardBackground = poke.types[0].type.name;
    let iconType = '';
    if(cardBackground === 'normal') {
        cardBackground = 'normal-light';
        iconType = 'doughnut-chart';
    }
    if(cardBackground === 'grass') {
        cardBackground = 'grass-light';
        iconType = 'leaf';
    }
    if(cardBackground === 'fire') {
        cardBackground = 'fire-light';
        iconType = 'hot';
    }
    if(cardBackground === 'water') {
        cardBackground = 'water-light';
        iconType = 'shower';
    }
    if(cardBackground === 'electric') {
        cardBackground = 'electric-light';
        iconType = 'bolt';
    }
    if(cardBackground === 'ice') {
        cardBackground = 'ice-light';
        iconType = 'popsicle';
    }
    if(cardBackground === 'fighting') {
        cardBackground = 'fighting-light';
        iconType = 'hand';
    }
    if(cardBackground === 'poison') {
        cardBackground = 'poison-light';
        iconType = 'skull';
    }
    if(cardBackground === 'ground') {
        cardBackground = 'ground-light';
        iconType = 'landscape';
    }
    if(cardBackground === 'flying') {
        cardBackground = 'flying-light';
        iconType = 'paper-plane';
    }
    if(cardBackground === 'psychic') {
        cardBackground = 'psychic-light'
        iconType = 'brain';
    }
    if(cardBackground === 'bug') {
        cardBackground = 'bug-light'
        iconType = 'bug';
    }
    if(cardBackground === 'rock') {
        cardBackground = 'rock-light'
        iconType = 'component';
    }
    if(cardBackground === 'ghost') {
        cardBackground = 'ghost-light'
        iconType = 'ghost';
    }
    if(cardBackground === 'dragon') {
        cardBackground = 'dragon-light'
        iconType = 'castle';
    }
    if(cardBackground === 'fairy') {
        cardBackground = 'fairy-light'
        iconType = 'star';
    }
    if(cardBackground === 'steel') {
        cardBackground = 'steel-light'
        iconType = 'shield-alt-2';
    }

    const div = document.createElement('div');
    div.classList.add('card');
    div.classList.add(cardBackground)
    div.innerHTML = `
        <div class="pokemon-number">
            <p>#${pokeId}</p>
        </div>

        <div class="pokemon-name">
            <i class='type-icon bx bxs-${iconType}'></i>
            <p>${poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}</p>
        </div>

        <img src="${poke.sprites.other["official-artwork"].front_default}" alt="${poke.name}" class="pokemon">
        
        ${elementalTypes}
    `;
    pokemonList.append(div)
}