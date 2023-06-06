// exemplo de um laco FOR simples

console.error("laco FOR")
for (let i = 0; i < 5; i++) {
    console.log(i)
}

// exerciocio for
console.log("exercicio range de 5 numeros")

const range5 = (a, b, c) => {
    const array = []
    for (let index = 1; index <= a; index++) {
        array.push(index)    
    }
    return array
}

// como eu queria imprimir um array de 5 numeros apartir do numero 1 foi so jogar o 5 ao chamar a funcao e trocar o index de 0 para 1

console.log(range5(5))

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
