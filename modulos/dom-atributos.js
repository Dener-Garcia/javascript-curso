// criando um atributo de href para um link com JS

var meuLink = document.querySelector(".meu-link")

console.log("vendo os atributos de um link com tag <a>", meuLink.attributes)

meuLink.setAttribute("target", "_blank")

console.log("vendo os atributos de um link com tag <a>", meuLink.attributes)