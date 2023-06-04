// Mostrando a classe de um elemento

var mainTitle = document.querySelector(".main-title")

console.log("Mostrando a classe associada a um elemento HTML")
console.log(mainTitle.classList)

// Metodos para o classList

var meuTitulo = document.querySelector(".meu-titulo")

console.log("Manipulando classes do elemento meu-titulo")

console.log("Adicionando uma classe chamada blue ao meu titulo")

meuTitulo.classList.add ("blue")

console.log(meuTitulo.classList)

console.log("Removendo uma classe chamada blue ao meu titulo")

meuTitulo.classList.remove ("blue")

console.log(meuTitulo.classList)

console.log("Alternando uma classe chamada blue ao meu titulo usando o toggle")

meuTitulo.classList.toggle ("blue")

console.log(meuTitulo.classList)

console.log("Verificando se a classe chamada blue existe no meu titulo")

if (meuTitulo.classList.contains ("red")) {
    console.log(meuTitulo.classList.contains)
}   else {console.log("Não possui a classe")}


