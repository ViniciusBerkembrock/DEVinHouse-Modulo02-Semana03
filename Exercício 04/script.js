var seconds = 30

function attClock() {

    let clock = document.getElementById("clock")

    if (seconds < 0) {
        clearInterval(contador) 
        clock.innerHTML = `Tempo Finalizado` 
    } else if (seconds < 10) {
        clock.innerHTML = `00:0${seconds}` 
    }else{
        clock.innerHTML = `00:${seconds}`
    }
    seconds = seconds - 1
}

let contador = setInterval(attClock,1000)
