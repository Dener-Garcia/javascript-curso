// Comecando pelos componentes interativos do app

// 1 - detectar a primeira tecla pressionada pelo usuario afim de comecar o timer

// variaveis

const TESTWRAPPER = document.querySelector(".test-wrapper")

const TESTAREA = document.querySelector(".test-area")

const ORIGINTEXT = document.querySelector(".origin-text p")

const BTNRESET = document.querySelector(".btn-reset")

const TIMER = document.querySelector(".timer")

// 1 - detectar a primeira tecla pressionada pelo usuario afim de comecar o timer quando ele comecar a digitar na caixa de teste

function start(){
    console.log("presioando")
    let textEnteredLenght = TESTAREA.value.lenght;
    console.log(TESTAREA.value, "teste")
}

// 2- start o cronometro apos a primeira tecla for pressionada

function start(){
    let textEnteredLenght = TESTAREA.value.lenght;
    console.log(textEnteredLenght)
}

TESTAREA.addEventListener("keypress", start, true)

