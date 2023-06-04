// Criando objetos

var curso = {
titulo :  "Javascript: Formacao basica",
instrutora : "Amanda Cavallaro",
nivel : 1,
dataDePublicacao : false,
numeroViews : 0,
}

console.log("Mostrando um objeto criado", curso)

console.log("Mostrando o parametro titulo do objeto", curso.titulo)

// Usando objetos com metodos
// Podemos criar funcoes dentro de objetos para fazermos algo com ela.

var curso2 = {
    titulo :  "Javascript: Formacao basica",
    instrutora : "Amanda Cavallaro",
    nivel : 1,
    dataDePublicacao : false,
    numeroViews : 0,
    
    atualizaViews: function(){
        return ++ curso2.numeroViews
    }
    }

    console.log("Objeto com metodo")  

// Usando construtores de objetos
// Eles sao templates que nos podemos criar objetos que definimos uma unica vez e depois podemos usar varias vezes, criamos uma funcao e depois passamos argumentos que no caso sao as variaveis que criei dentro do objeto e ate o metodo atualizaViews que criei dentro do objeto

function cadastraCurso(titulo, instrutora, nivel, dataDePublicacao, numeroViews, atualizaViews){
    // Usando o this vamos referenciar a funcao ao objeto, e depois atribuir cada propriedade dentro da funcao ao argumento do objeto relacionado
    this.titulo = titulo,
    this.instrutora = instrutora,
    this.nivel = nivel,
    this.dataDePublicacao = dataDePublicacao,
    this.numeroViews = numeroViews,
    
    this.atualizaViews = function(){
        return ++cadastraCurso.atualizaViews
    }
}

console.error("Testando construtor de objetos com o objeto cadastraCurso")

// Agora posso criar objetos com base no meu construtor de objeto

var curso10 = new cadastraCurso ("React para iniciantes", "Dener", 2, false, 100)

var curso11 = new cadastraCurso ("typescript", "garcia", 4, true, 304)

console.log("mostrando os novos objetos com base no construtor", curso10, curso11)

// Exemplo de aplicacao
// Posso criar novos objetos com base no meu construtor de funcao de objeto veja abaixo

console.error("Populando uma array com um objeto")

var cursos = [
    new cadastraCurso("Vue para iniciantes", "John", 7, false, 400),
    new cadastraCurso("NextJS para profissionais", "Dener", 5, false, 400),
    new cadastraCurso("NexJS para iniciantes", "Garcia", 2, false, 400)
]

// Para acessar o objeto cursos precisamos acessar pelo index veja no console log abaixo

console.log("acessando o segundo objeto da array de cursos", cursos[1])

console.log("acessando o titulo do primeiro objeto da array de cursos", cursos[0].titulo)

console.log("acessando a chamada do nosso metodo criado no cadastraCursos do terceiro objeto", cursos[2].atualizaViews, cursos[2].numeroViews)



