// declarando as variaveis da sessao figure

var minhaImagem = document.querySelector(".minha-imagem")

// pegando o atributo alt da imagem dentro de figure do meu HTML     
var imagem = document.querySelector(".minha-imagem img")

// criando uma variavel para armazenar o atributo alt do HTML

var altText = imagem.getAttribute("alt")

// criando o elemento (tag) de legenda HTML figcaption

var captionElemento = document.createElement("figcaption")

// criando o nó de texto, que vai conter o texto do alt que foi feito no HTML e agora vai no texto da legenda de figcaption

var captionText = document.createTextNode(altText)

// vendo o elemento criado pelo console.log

console.log(captionElemento)
console.log(captionText)

// adicionando o elemento criado no HTML pelo appendchild, para isso vou adicionar a variavel captionText ao meu elemento que chamei de captionElemento

captionElemento.appendChild(captionText)

// agora podemos adicionar o figcaption na arvore do HTML, no caso ele vai criar a tag figcaption abaixo da minha imagem

minhaImagem.appendChild(captionElemento)

// como a ideia era pegar o texto alternativo da imagem para criar uma figcaption eu posso simplesmente deletar o conteudo do texto alt para leitores de tela nao repetirem a informação aos visitantes do site

imagem.setAttribute("alt","deletado")