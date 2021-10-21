const result = document.querySelector('.result');
const result_container = document.querySelector('.result-container');
const dicesPlayer1 = document.querySelectorAll('#player1 .dice');
const dicesPlayer2 = document.querySelectorAll('#player2 .dice');


let myInt = setInterval(flashing, 120)

function flashing() {
    if (result_container.style.opacity == 1) {
        result_container.style.opacity = 0.5;
    } else
        result_container.style.opacity = 1;

}


window.onload = (() => {
    var value1 = Math.floor((Math.random() * 6) + 1);
    var value2 = Math.floor((Math.random() * 6) + 1);



    console.log(result.innerText);

    //display result
    if (value1 > value2) {
        result.innerText = "PLAYER 1 WIN";
    } else if (value1 == value2) {
        result.innerText = "DRAW"
    } else {
        result.innerText = "PLAYER 2 WIN"

    }


    // render dices
    displayDice(value1, dicesPlayer1)
    displayDice(value2, dicesPlayer2)


})


function displayDice(dice_value, dices) {
    dices.forEach(function toggleDice(dice) {
        var className = dice.className;
        var dice_value_item = className.split(" ")[1].split("-")[1];

        if (String(dice_value) === dice_value_item) {
            dice.classList.remove('the');
        } else {
            dice.classList.add('the');
        }
    })
}