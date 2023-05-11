function criaHTMLpokemon(nomePokemon, imagePokemon){
    const pokedex = document.getElementById('allpokedex')
    pokedex.innerHTML += `
        <div class = "${nomePokemon}" id="pokedex"> 
            <img src="${imagePokemon}" alt="" srcset="">
            <p>${nomePokemon}</p>
            <div class = "typePokemon" id="type${nomePokemon}"></div>
        </div>`
}

function criarHTMLTypePokemon(nomePokemon, typePokemon){
    const divPokemon = document.getElementById(`type${nomePokemon}`)
    for(let i = 0; i < typePokemon.length; i++){
        divPokemon.innerHTML += `
            <div class="${typePokemon[i]}">
                <span>${typePokemon[i]}</span> 
            </div>
        `
    }
}


export {criaHTMLpokemon, criarHTMLTypePokemon}