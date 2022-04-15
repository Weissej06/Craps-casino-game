// the function is the starting point of all the actions made using the code.

function play() {
    var roll1 = Math.ceil(Math.random() * 6);
    var roll2 = Math.ceil(Math.random() * 6);
// Math.random generates random numbers which the game depends on
    var sum = roll1 + roll2;

    document.getElementById("roll1").innerHTML = "roll1 = " + roll1;
    document.getElementById("roll2").innerHTML = "roll2 = " + roll2;
    document.getElementById("sumRes").innerHTML = "sum = " + sum;

    //This "if" and "else if" tells the browser that if the sum = 7 or 11 you lose, doubles make you win, and if you do not have either then its a draw
    if (sum == 7 || sum == 11) {

        document.getElementById("finalRes").innerHTML = "CRAPS - you lose";
    }
    else if (roll1 == roll2 && roll1 % 2 == 0) {

        document.getElementById("finalRes").innerHTML = "DOUBLES! WINNER! ";
    } else {

        document.getElementById("finalRes").innerHTML = "DRAW! Try again! ";
    }



     

}
