const human = document.querySelector(".human-result"),
    computer = document.querySelector(".computer-result"),
    humanResult = human.querySelector(".result"),
    computerResult = computer.querySelector(".result"),
    humanIcon = humanResult.querySelector("i"),
    computerIcon = computerResult.querySelector("i");
const crownHuman = human.querySelector(".fa-crown"),
    crownComputer = computer.querySelector(".fa-crown");
const humanScore = document.querySelector(".human-score"),
    humanScoreNum = humanScore.querySelector("span"),
    computerScore = document.querySelector(".computer-score"),
    computerScoreNum = computerScore.querySelector("span");

const reset = document.querySelector(".reset");

function randomFunction() {
    const list = ["fa-hand-rock", "fa-hand-paper", "fa-hand-scissors"];
    const random = Math.floor(Math.random() * 3)
    
    
    computerIcon.className = "";
    computerIcon.classList.add("far", list[random]);
}
function rockFunction(event) {
    humanIcon.className = "";
    humanIcon.classList.add("far", "fa-hand-rock");
    crownComputer.className = "";
    crownHuman.className = "";
    crownComputer.classList.add("fas", "fa-crown");
    crownHuman.classList.add("fas", "fa-crown");
    randomFunction();
    if (computerIcon.classList.contains("fa-hand-rock")) {
        //pass
        crownComputer.classList.add("show");
        crownHuman.classList.add("show");
    } else if (computerIcon.classList.contains("fa-hand-paper")) {
        computerScoreNum.textContent = parseInt(computerScoreNum.textContent) + 1;
        crownHuman.classList.add("show");

    } else {
        humanScoreNum.textContent = parseInt(humanScoreNum.textContent) + 1;
        crownComputer.classList.add("show");
    }
}
function paperFunction(event) {    
    humanIcon.className = "";
    humanIcon.classList.add("far", "fa-hand-paper");
    crownComputer.className = "";
    crownHuman.className = "";
    crownComputer.classList.add("fas", "fa-crown");
    crownHuman.classList.add("fas", "fa-crown");
    randomFunction();
    if (computerIcon.classList.contains("fa-hand-rock")) {
        humanScoreNum.textContent = parseInt(humanScoreNum.textContent) + 1;
        crownComputer.classList.add("show");
    } else if (computerIcon.classList.contains("fa-hand-paper")) {
        //pass
        crownComputer.classList.add("show");
        crownHuman.classList.add("show");
    } else {
        computerScoreNum.textContent = parseInt(computerScoreNum.textContent) + 1;
        crownHuman.classList.add("show");
    }
}
function scissorFunction(event) {
    humanIcon.className = "";
    humanIcon.classList.add("far", "fa-hand-scissors");
    crownComputer.className = "";
    crownHuman.className = "";
    crownComputer.classList.add("fas", "fa-crown");
    crownHuman.classList.add("fas", "fa-crown");
    randomFunction();
    if (computerIcon.classList.contains("fa-hand-rock")) {
        computerScoreNum.textContent = parseInt(computerScoreNum.textContent) + 1;
        crownHuman.classList.add("show");
    } else if (computerIcon.classList.contains("fa-hand-paper")) {
        humanScoreNum.textContent = parseInt(humanScoreNum.textContent) + 1;        
        crownComputer.classList.add("show");
    } else {
        //pass
        crownComputer.classList.add("show");
        crownHuman.classList.add("show");
    }
}

function paintResult() {
    const rock = document.querySelector(".fa-hand-rock");
    const paper = document.querySelector(".fa-hand-paper");
    const scissors = document.querySelector(".fa-hand-scissors");
    rock.addEventListener("click", rockFunction);
    paper.addEventListener("click", paperFunction);
    scissors.addEventListener("click", scissorFunction);
}

function resetFunction(event) {
    computerScoreNum.innerHTML= "00";
    humanScoreNum.innerHTML = "00";
    computerIcon.className = "";
    humanIcon.className = "";
    console.log(computerResult);
    console.log(computerScore);
}

function init() {
    paintResult();
    reset.addEventListener("click", resetFunction)
    
}

init()