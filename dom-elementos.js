// pegando um elemento com query selector

console.error("Pegando e alterando um nó pelo JS")

var maintitle = document.querySelector(".main-title")

console.log("mostrando o nó completo", maintitle)
console.log("com o innerHTML consigo ver somente o conteudo do nó: ", maintitle.innerHTML)

// alterando o conteúdo pelo JS

console.log("Trocando o conteudo de um nó pelo JS")

var titleh4 = document.querySelector(".titleh4")

console.log("conteúdo antes da alteração", titleh4)

titleh4.innerHTML = "Aqui hávia um outro título, esse conteúdo foi gerado por javascript, veja o arquivo dom.JS na linha 18"

// alterando a TAG de um elemento pelo JS

var titleh5 = document.querySelector(".titleh5")
titleh5.outerHTML = "<p>Aqui havia um titulo criado em HTML com as tags h4 agora transformei ele num paragrafo e troquei seu conteudo por esse texto usando outerHTML</p>"