let mensagem = document.getElementById("mensamgem")
let show = document.getElementById("show")
let showLS = document.getElementById("showLocalStorage")
let indexAdd = 0
let teste = 1

function salvarMensagem() {
    localStorage.setItem(`${teste}`, mensagem.value)
    teste++
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






var arr = []

function carregarMensagens(Element) {
    
    arr[Element] = localStorage.getItem(Element)

}



function mostrarMensagem(){

    Object.keys(localStorage).forEach(Element =>
        
        carregarMensagens(Element)
    )
    
    arr.sort

    for (index = 1; index < arr.length; index++){
        showLS.innerHTML += `Mensagem Nº ${index}: ${arr[index]}<br>`
    }

}
