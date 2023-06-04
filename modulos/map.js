// exemplo do map

const array1 = [1, 2, 3, 4, 5]
console.log(array1)

array1.map((item) => item * 2 ) // retuno: [2, 4, 6, 8, 10]

// exemplo do forEach

const array2 = [1, 2, 3, 4, 5]
console.log(array2)

array2.forEach((item) => item * 2 ) // retuno: [2, 4, 6, 8, 10]

// Exercicios praticos

// Comecando com o MAP

// crie 2 objetos chamado maca e laranja que armazenei uma constante, 

const maca = {
    value: 2,
}

const laranja = {
    value: 3,
}

// Na funcao mapComThis eu posso mandar um array no lugar do array3 e depois posso mandar um objeto no thisArg que vai ser utilizado como um "this"

// ou seja se eu mandar a maca como this ele vai olhar para a maca.value e vai fazer a maca * meu array

function mapComThis(array3, thisArg){
    return array3.map(function(item){
       return item * this.value;
    },thisArg)
}

// criando um array para minha funcao

const nums = [1, 2]

// vendo o resultado da mapComThis 
console.log("quando this for maca", mapComThis(nums, maca))
console.log("quando this for laranja", mapComThis(nums, laranja))

// Funcao sem this, vamos multiplicar um array

function mapSemThis(array4){
    return array4.map(function(item){
        return item * 2
    })
}

const nums2 = [2, 4, 6, 8, 10]

console.log("funcao map sem this", mapSemThis(nums2))

// Comecando com o Filter

// Vamos filtar e retornar todos os numeros pares de um array

function filtPares(array5){
    return array5.filter(callback1)
}

// fazendo uma funcao de callback, o % leia-se modulo de 2

function callback1(item){
    return item % 2 === 0
}

// criando um array de numeros pares e impares para usar no filter

const array6 = [1, 23, 3, 6, 7, 20, 10, 2, 5, 6]

console.log("usando minha funcao de filtrar um array so com pares", filtPares(array6))

// Comecando com o reduce

// vamos somar todos os numeros de um array com o reduce, vou retornar o meu valor anterior com a soma do meu valor atual

function somaNumeros(array7){
   return array7.reduce(function(prev, current){
        console.log("valor de prev", prev)
        console.log("valor de prev", current)
        return prev + current;

    },//aqui tambem posso por um valor inicial sem nada é 0
    )
}

// criando o array para usar no reduce

const array8 = [1, 2]

console.log("o resultado [e que ele pegou o numero do meu primeiro array 1 e somou com o segundo numero do array 2, prev + current = 3", somaNumeros(array8))

// Outro exemplo do reduce

// criando uma lista que recebe uma lista de precos e um numero representando o saldo disponivel para compra, calcule qual sera o saldo final apos subtrair todos os precos da lista enviada

// basicamente teremos um valor inicial pra meu reduce e vou subtrai-lo de acordo com uma lista de precos que sera um array

// criando a lista
console.error("trabalhando com reduce com valor inicial")
const list = [
    {
        name: "sabao em po",
        preco: 26
    },
    {
        name: "detergente",
        preco: 4
    },
    {
        name: "desinfetante",
        preco: 20
    },
]

const saldoDisponivel = 100;

// funcao para calcular quanto vou ter depois de pagar tudo. repare que ;

function calculaSaldo(saldoDisponivel, lista){
    return lista.reduce(function(prev, current, index) {
        console.log("rodada do index", index + 1)
        console.log("este eh o prev", prev)
        console.log("este eh o currente", current)
      return prev - current.preco
    }, saldoDisponivel)
}

console.log(calculaSaldo(saldoDisponivel, list))
