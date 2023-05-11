import { converterAltura, converterPeso } from "./convertStats.js"
import { getPokemon, getTypePokemon } from "./getPokemon.js"

const modalInfos = document.getElementById("infosPokemon")

async function infosPokemon(namePokemon){
    modalInfos.showModal()
    const dataPokemon=  await getPokemon(namePokemon)
    const typePokemon = await getTypePokemon(namePokemon)
    const peso = converterPeso(dataPokemon.weight.toString())
    const altura = converterAltura(dataPokemon.height.toString())

    const uperNamePokemon = namePokemon[0].toUpperCase() + namePokemon.substring(1)
    console.log(dataPokemon)
    modalInfos.innerHTML = `
    <div class = "cardHeader">
        <div class = "imgFechar" id="fechar"><img src="./IMG/cross.png" alt=""></div>
    </div>
    <div class = "cardBody">
        <div class = "nameAndStasts">
            <div calss = "idAndName">
                <h4 class = "idH4">#${dataPokemon.id}</h4>
                <h2 class = "nameH2">${uperNamePokemon}</h2>
            </div>
            <div class = "alturaAndPeso">
                <h2>Altura: ${altura} m</h2>
                <h2 class = "pesoH2">Peso: ${peso} Kg</h2>
            </div>    
        </div>
        <div class= "imagePokemonCard">
            <img src="${dataPokemon.sprites.other.home.front_default}" alt="">
        </div>
        <div class = "statuAndTypePokemon">
            <div id = 'typePokemon' class = "typePokemon"></div>
            <div class = "statusPokemon">
                <h3>Status base: </h3>
                <div id = "statusPokemonAll" class = "statusPokemonAll">
                </div>
            </div>
            
        </div>
    </div>
    `
    modalInfos.classList.add(`infos_${typePokemon[0]}`)
    renderTypePokemon(typePokemon)
    renderStatusPokemon(dataPokemon)
    eventButtonClose(`infos_${typePokemon[0]}`)

}

function renderStatusPokemon(dataPokemon){
    const divStatusPokemon = document.getElementById("statusPokemonAll") 

    for(let i = 0; i < dataPokemon.stats.length; i++){
        divStatusPokemon.innerHTML += `
            <div class = "statusPokemon2">
                <p>${dataPokemon.stats[i].stat.name[0].toUpperCase() + dataPokemon.stats[i].stat.name.substring(1)} : ${dataPokemon.stats[i].base_stat}</p>
            </div>
        `
    }
}
function renderTypePokemon(typePokemon){
    const divTypePokemon = document.getElementById("typePokemon")

    for(let i = 0; i < typePokemon.length; i++){
        divTypePokemon.innerHTML += `<img src="./IMG/${typePokemon[i]}.png" alt="">`
    }
}
function eventButtonClose(classDiologModal){
    const button = document.getElementById("fechar")
    button.addEventListener('click', () => {
        modalInfos.classList.remove(classDiologModal)
        modalInfos.close()
    })
}


export {infosPokemon}