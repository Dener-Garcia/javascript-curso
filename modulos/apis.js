// exemplo de consumo de uma api

// começamos gerando uma constante para armazenar minha url porque eu posso fazer outras requisições de outra apis no futuro então para não escrever uma string toda vez

const BASE_URL = "https://api.github.com/users/dener-garcia"

// criando funcao para carregar os gatinhos

const getCats = async () => {
    try{
    const dados = await fetch(BASE_URL)
    // aqui minha funcao vai retornar os dados de uma promise entao vamos pegar isso e jogar num json pois vamos receber em string
    
    const meuJson = await dados.json()

console.log(meuJson)
    // aqui eu decido o que vou retornar, devo olhar para api e ver qual dado eu quero
    return meuJson.avatar_url
} catch(deuErro){
    console.error("seu erro foi:", deuErro.message)
}
}


// interagindo com a dom para jogar a imagem nela

const trocaGatos = document.querySelector("#troca-gato")

// essa funcao vai dar um await no getCats, sempre que eu quiser uma imagem
const loadImg = async () =>{
    const gatos = document.querySelector("#gatos")
    // aqui estou pegando a imagem da funcao getCats e jogando ela dentro do src da imagem
    gatos.src = await getCats()
}

trocaGatos.addEventListener("click", loadImg)

// para a pagina ja comecar com uma imagem eu ja chamo a funcao uma vez aqui
loadImg()