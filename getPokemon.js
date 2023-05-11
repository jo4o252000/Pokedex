
async function getPokemon(namePokemon){
    const fetchPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${namePokemon}`)
    const pokemon = await fetchPokemon.json()
    

    return pokemon
}
async function getTypePokemon(namePokemon){
    const fetchPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${namePokemon}`)
    const pokemon = await fetchPokemon.json()
    const type = pokemon.types.map((result) => result.type.name)

    return type
}

export {getPokemon, getTypePokemon}