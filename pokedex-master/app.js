const getPokemonUnl = (id) => `https://pokeapi.co/api/v2/pokemon/${id}`;

const regiao = "kanto";

const generatePokemonPromises = () =>
  Array(649)
    .fill()
    .map((_, index) =>
      fetch(getPokemonUnl(index + 1)).then((response) => response.json())
    );

const genereteHTML = (pokemons) => {
  return pokemons.reduce((acumulator, { name, id, types, sprites }) => {
    const elementTypes = types.map((typeInfo) => typeInfo.type.name);
    acumulator += `
        <li class="card ${elementTypes[0]}">
        <img class="card-image " alt="${name}" src="${sprites.other.dream_world.front_default}"/>
        <h2 class="card-title">#${id}. ${name}</h2>
        <p class="card-subtitle ${elementTypes[0]}">${elementTypes[0]}</p>
        <p class="card-subtitle ${elementTypes[1]}">${elementTypes[1]}</p>
        </li>
        `;
    return acumulator;
  }, "");
};

const insertPokemonsIntoPage = (pokemons) => {
  const ul = document.querySelector('[data-js="pokedex"]');
  ul.innerHTML += pokemons;
};

const pokemonPromises = generatePokemonPromises();

/**for (let i = 1; i <= 150; i++) {
    pokemonPromises.push(
      fetch(getPokemonUnl(i)).then((response) => response.json())
    );
  }**/

Promise.all(pokemonPromises).then(genereteHTML).then(insertPokemonsIntoPage);
