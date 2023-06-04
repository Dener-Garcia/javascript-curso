// exemplo de um laco FOR simples

console.error("laco FOR")
for (let i = 0; i < 5; i++) {
    console.log(i)
}

// exemplo de um laco WHILE simples

console.error("laco While")
var i2 = 0
while (i2 < 10) {
    i2++
    console.log(i2)

}

// exemplo de um laco DO WHILE simples

console.error("laco DO WHILE")
var i3 = 10
do {
    i3++
    console.log(i3)
} while (i3 < 10);

// exemplo de uso de um FOR para atribuir o parametro _Blank a varios links de uma so vez

console.error("Pegando varios itens")

var meusLinks = document.querySelectorAll(".meus-links")

console.log(meusLinks)

// enquanto meu indice chamado de "i" for menor que meus links, dai o .lenght para ter um numero de retorno ele ira executar um if que criei dentro dele

for (var i = 0; i < meusLinks.length; i++){ 
    if (!meusLinks[i].hasAttribute("target")) {
        meusLinks[i].setAttribute("target", "_Blank")
    }
    console.log("estamos dentro do loop")
}

console.log(meusLinks)
