function getData(){
    let firstNumber = document.getElementById("firstNumber")
    let secondNumber = document.getElementById("secondNumber")
    let result = document.getElementById("result")
}

function somar(){
    getData()
    let resultadoSoma = parseInt(firstNumber.value) + parseInt(secondNumber.value)
    let tagResposta = document.createAttribute("h3")
    result.innerHTML = `<h3>Resultado da Soma: ${resultadoSoma}</h3>`

}

function subtrair(){
    getData()
    let resultadoSubtracao = parseInt(firstNumber.value) - parseInt(secondNumber.value)
    console.log(resultadoSubtracao)
    result.innerHTML = `<h3>Resultado da Subtração: ${resultadoSubtracao}</h3>`

}