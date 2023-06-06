// funcao simples declaration function

function digaOi(){
    console.log("oi eu sou uma função simples")
}

digaOi() // esse tipo de funcao nao retorna nada tudo acontece dentro dela se atribuir a ela uma variavel nada vai ser mostrado repare

const testeOi = digaOi()
console.log(testeOi, "repare que a funcao foi chamada novamente porem nada aconteceu a variavel testeOi ela ficou como undefined")


// funcao com parametros mas sem retorno declaration function

function digaOiPara(nomePessoa){
    console.log("Oi para " + nomePessoa)
}

digaOiPara("Dener")

function digaOiParaTemplateString(namePessoa){
    console.log(`Oi para ${namePessoa}`)
}
digaOiParaTemplateString("Mara")

// funcao com retorno

function digaOla(){
    return "Ola sou uma funcao com retorno"
}

// agora para usar esse retorno preciso armazenar ele em algum lugar

let ola = digaOla()
console.log(ola);

// funcao anônima

(function (a,b,c){
    console.log("Sou uma funcao anonima")
    return a + b + c
}())

// para usar esse tipo de funcao basta atribuir uma variavel a ela

const somar = function (a,b,c){
    return a + b + c
}

// mostrando o resultado de somar no console de duas formas diferentes, diretamente e jogando dentro de outra const

console.log(somar(30,30,30))

const resuSomar = somar(30,30,30)
console.log(resuSomar)

// criando variavel que sera atribuida a mesma funcao

const outraSoma = somar
console.log(outraSoma(30,30,30))

// Arrow function

const incrementaN = (n) =>{
    console.log('Arrow function incrementaN')
    return n + 1
}

console.log(incrementaN(99))

// exemplo funcao callback
// na funcao anonima calcula o primeiro argumento chamado de operacao é uma funcao tambem, então a funcao calcula vai executar a funcao operacao com os dois argumentos que ela recebeu chamados num1 e num2

const calcula = function(operacao, num1, num2){
    return operacao(num1,num2)
    }
 
// nas funcoes abaixo a funcao soma e sub vai executar os argumentos

    const soma = function(num1, num2){
    return num1 + num2
    }
    
    const sub = function(num1, num2){
    return num1 - num2
    }
    
// abaixo temos o variavel resultSoma que está executando a funcao calcula e esta enviando de callback a funcao soma e seus argumentos para a funcao calcula    
    const resultSoma = calcula(soma, 1, 2)
    const resultSub = calcula(sub, 1, 2)
    
    console.log(resultSub)
    console.log(resultSoma)

// funcao com this exemplo

    const pessoa = {
        firstName: "Andre",
        lastName: "Soares",
        id: "1",
        fullName: function(){
            return this.firstName + "" + this.lastName
        },
        gedId: function(){
            return this.id;
        }
    }

    pessoa.fullName()
    // "Andre Soares"
    pessoa.gedId()
    // 1

    const btnThis = document.querySelector(".btn-this")

    btnThis.addEventListener("click", console.log("this", btnThis.this))

// exemplo de uma arrow function 

const helloWorld = () => {
    return "hello world com arrow function"
}

console.log(helloWorld)