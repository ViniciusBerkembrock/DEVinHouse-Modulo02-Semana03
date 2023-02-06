let mensagem = document.getElementById("mensamgem")
let show = document.getElementById("show")
let showLS = document.getElementById("showLocalStorage")
let indexAdd = 0

function salvarMensagem() {
    localStorage.setItem(`${indexMensagemSalva()}`, mensagem.value)
}

function indexMensagemSalva(){
    let index = localStorage.length
    index += 1
    return index
}

function indexMensagemAdicionada(){
    indexAdd += 1
    return indexAdd
}

function adicionarMensagem(){
    show.innerHTML += `Mensagem Nº ${indexMensagemAdicionada()} ${mensagem.value}<br>`
}

function mostrarMensagem() {
    let arr =[]
    for (var i = 1; i <= localStorage.length; i++) {
        // showLS += `Mensagem Nº ${localStorage.key(element)} ${localStorage.getItem(element+1)}<br>`
        // arr.push(i, "xx")
        // // console.log(localStorage.key(i))
        // // console.log(localStorage.getItem(i))
        // console.log(arr)
        var key = localStorage.key(i)
        console.log(key + localStorage.getItem(key))
    }
    
}