
const Piedra = "Piedra";
const Papel = "Papel";
const Tijera = "Tijera";

const TIE = 0;
const WIN = 1;
const LOST = 2;

let isPlaying = false;

const rockBtn = document.getElementById("Piedra");
const paperBtn = document.getElementById("Papel");
const scissorsBtn = document.getElementById("Tijera");
const resultText = document.getElementById("start-text");
const userImg = document.getElementById("user-img");
const machineImg = document.getElementById("machine-img");
let puntosUsuario = 0;
let puntosComputadora = 0;
let puntajesUsuario = document.querySelector(".puntajeJ");
let puntajesComputadora = document.querySelector(".puntajeC");

rockBtn.addEventListener("click", () => {
    play(Piedra);
});
paperBtn.addEventListener("click", () => {
    play(Papel);
});
scissorsBtn.addEventListener("click", () => {
    play(Tijera);
});

function play(userOption) {
    if (isPlaying) return;

    isPlaying = true;

    userImg.src = "img/" + userOption + ".png";

    resultText.innerHTML = "Eligiendo!";

    const interval = setInterval(function () {
        const machineOption = calcMachineOption();
        machineImg.src = "img/" + machineOption + ".png";
    }, 200);

    setTimeout(function () {

        clearInterval(interval);

        const machineOption = calcMachineOption();
        const result = calcResult(userOption, machineOption);

        machineImg.src = "img/" + machineOption + ".png";

        switch (result) {
            case TIE:
                resultText.innerHTML = "Es un Empate!";
                
                break;
            case WIN:
                resultText.innerHTML = "Ganaste!"
                puntosUsuario++
                puntajesUsuario.textContent = "Puntaje igual a :" + puntosUsuario;
                break;
            case LOST:
                resultText.innerHTML = "Perdiste"
                puntosComputadora++
                puntajesComputadora.textContent = "Puntaje igual a :" + puntosComputadora;
                break;
        }
        isPlaying = false;
    }, 2000);
}

function calcMachineOption() {
    const number = Math.floor(Math.random() * 3);
    switch (number) {
        case 0:
            return Piedra;
        case 1:
            return Papel;
        case 2:
            return Tijera;
    }
}

function calcResult(userOption, machineOption) {
    if (userOption === machineOption) {
        return TIE;

    } else if (userOption === Piedra) {

        if (machineOption === Papel) return LOST;
        if (machineOption === Tijera) return WIN;

    } else if (userOption === Papel) {

        if (machineOption === Tijera) return LOST;
        if (machineOption === Piedra) return WIN;

    } else if (userOption === Tijera) {

        if (machineOption === Piedra) return LOST;
        if (machineOption === Papel) return WIN;

    }
}