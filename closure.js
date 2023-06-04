// Closures ou escopo léxico

// Vamos criar uma simples funcao de somar

function somaNumeros() {
    a = 5
    b = 4

    var soma = a + b

    return soma
}

var resultadoDaSoma = somaNumeros()

console.log("mostrando o resultado da funcao somaNumeros", resultadoDaSoma)

// console.log(soma)

// Repare que ao tentar acessar a variavel soma que esta dentro da funcao somaNumeros, recebemos um erro de "Uncaught Reference"
// Isso se deve que estamos fora do escopo da funcao e quando ela é executada suas variaveis sao destruidas

console.error("Criando um")

function multiplicaNumeros() {
    a = 5
    b = 4

   function multiplica(){
    var multiplicando = a * b
    return multiplicando
   }

   return multiplica
}

var resultadoMultiplicacao = multiplicaNumeros()

console.log("executando a variavel resultadoMultiplicacao como uma funcao multiplicaNumeros(), recebendo o resultado da multiplicação de a * b")

console.log(resultadoMultiplicacao())