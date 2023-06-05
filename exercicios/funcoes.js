// Somando valores

const numb1 = document.querySelector(".numb-1")
const numb2 = document.querySelector(".numb-2")
let result = document.querySelector(".result")

function soma(nr1, nr2){
    return parseInt(nr1) + parseInt(nr2)
    // usamos o parseInt para transformar em numeros    
}

// sempre que houver uma alteração nos valores imediatamente a função atualiza

numb1.addEventListener ("change", function(){
    result.innerHTML = soma(numb1.value, numb2.value)
    console.log(result.innerHTML)
})

numb2.addEventListener ("change", function(){
    result.innerHTML = soma(numb1.value, numb2.value)
    console.log(result.innerHTML)
})





