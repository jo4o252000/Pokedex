import { criaHTMLpokemon, criarHTMLTypePokemon } from "./createPokedex.js"
import { eventClickPokedex } from "./event.js"

async function pegarAllPokemon(){
    const response = await fetch(" https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")//limite = limite de pokemon que eu quero pegar offSet = a partir de qual numero eu quero pegar pokemon (EX: LIMITE de 151 pokemon APARTIR DA POSIÇÃO 0)
    const pokemon = await response.json()
    let allPokemon = await pokemon.results.map((result) => result.name)
    
    for(let i = 0; i < allPokemon.length; i++){
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${allPokemon[i]}`)
        const pokemon = await response.json()
        const type = await pokemon.types.map((result) => result.type.name) //pegando todos os tipos do pokemon(retorna um array)
        
        criaHTMLpokemon(pokemon.name, pokemon.sprites.other.home.front_default)
        criarHTMLTypePokemon(pokemon.name, type)
    }
    eventClickPokedex()
}
export {pegarAllPokemon}


