let images = [
    "Dice/dice-01.svg",
    "Dice/dice-02.svg",
    "Dice/dice-03.svg",
    "Dice/dice-04.svg",
    "Dice/dice-05.svg",
    "Dice/dice-06.svg",
];

let dice = document.querySelectorAll("img");

document.querySelector("button").addEventListener("click", roll);
function roll() {
    dice.forEach(function (die) {
        die.classList.add("shake");
    });
    setTimeout(function () {
        dice.forEach(function (die) {
            die.classList.remove("shake");
        });
        let dieOneValue = Math.floor(Math.random() * 6);
        let dieTwoValue = Math.floor(Math.random() * 6);

        document.querySelector("#die-1").setAttribute("src", images[dieOneValue]);
        document.querySelector("#die-2").setAttribute("src", images[dieTwoValue]);
        document.querySelector("#count").innerHTML =
            "Your roll is " + ((dieOneValue + 1) + (dieTwoValue + 1));
    }, 1000);
}