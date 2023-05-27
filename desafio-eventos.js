// desafio de eventos, criar um circulo que acompanha o mouse

// pegando o circulo no HTML

const CIRCLE = document.querySelector(".circle")

// criando uma variavel para pegar o body do HTML

const AREA = document.body;

// pegando a largura e altura da janela do navegador

var windowWidth = window.innerWidth
var windowHeight = window.innerHeight

function mousePosition(e){

    // Pegando a cordenada X (distancia da borda esquerda da janela de visualização do cliente)
    // Pegando a largura total da tela

    var horizontalPosition = windowWidth - e.clientX;
    var verticalPosition = windowHeight - e.clientY;

    // definindo a posicao do circulo

    CIRCLE.style.left = horizontalPosition + 'px';
    CIRCLE.style.top = verticalPosition + 'px';


    console.log("esta chamando a funcao", CIRCLE.style)
}

// Quando o mouse se move, chama a funcao mousePosition que eu criei

AREA.addEventListener('mousemove', mousePosition, false)

