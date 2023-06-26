let URL = 'https://pokeapi.co/api/v2/pokemon/';

for (let i = 1; i <= 10; i++) {
    fetch(URL + i)
        .then(res => res.json())
        .then(data => console.log(data))
} // showPokemon function