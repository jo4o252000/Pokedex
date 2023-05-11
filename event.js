import { infosPokemon } from "./infosModal.js"

function eventClickPokedex(){
    const teste = document.querySelectorAll("#pokedex")
    for(let i = 0; i < teste.length; i++){
        teste[i].addEventListener('click', () => {
            infosPokemon(teste[i].classList.value)
        })
    }
}

export {eventClickPokedex}