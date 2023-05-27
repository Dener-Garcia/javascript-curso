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