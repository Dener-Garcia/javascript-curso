// criando uma ação após um evento de click

const BTNSHOW = document.querySelector(".containerEx1 button")

const CONTEUDO = document.querySelector(".containerEx1 p")

CONTEUDO.classList.add("hide")

function mostrarElementos(){
    CONTEUDO.classList.toggle("hide")
}

// taxonomia de capturar eventos
// elemento.evento

BTNSHOW.onclick = mostrarElementos()

// testando chamar a funcao novamente por um novo onclick, veja que a anterior vai perder a funcao

// BTNSHOW.onclick = console.log("Agora a funcao de esconder nao funciona mais")

// trabalhando com o listener
// taxonomia do evento com addListener 
// elemento.addEventListener('tipoEvento', suaFuncao, valorInicialBolleano)

BTNSHOW.addEventListener('click', mostrarElementos, true)

// empilhando varios addEventListener no mesmo elemento, isso é muito útil para disparar eventos diferentes a partir do mesmo elemento 

// exemplo com uma funcao anonima

BTNSHOW.addEventListener('click', function(){
    console.log("Texto gerado pelo botao BTNSHOW")}, true)

// exemplo com uma arrow function

BTNSHOW.addEventListener('click', ()=>{
    alert("Alerta gerado pelo botao BTNSHOW")
}, true)


// Novo exemplo de evento com funcao

// pegando o botao e o texto do exemplo 2

const BTNSHOW2 = document.querySelector(".containerEx2 button")

const CONTEUDO2 = document.querySelector(".containerEx2 p")

function trocaConteudo(e, atual){
    e.preventDefault(); 

    atual.innerHTML == "Click no botao!" ? CONTEUDO2.innerHTML = "Clicado" : CONTEUDO2.innerHTML = "Voce já tentou clicar no botão acima?"
}

// Agora vamos passar o argumento atual para a funcao do listener de evento vamos colocar o chamado da funcao trocaConteudo dentro de uma funcao anonima. O this se refere ao meu proprio BTNSHOW2 que peguei usando o query selector

BTNSHOW2.addEventListener('click', function(e) {
    trocaConteudo(e, this)
}, false)