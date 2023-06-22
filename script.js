// For player 1
var randomNumder1 = Math.random();
randomNumder1 = Math.floor(randomNumder1 * 6) + 1;

var randomDiceImage1 = "dice" + randomNumder1 + ".png";
var randomImageSoure1 = "images\\" + randomDiceImage1;


document.querySelectorAll("img")[0].setAttribute("src", randomImageSoure1);

// For player 2
var randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2 * 6) + 1;

var randomSourceImage2 = "dice" + randomNumber2 + ".png";
var randomImageSoure2 = "./images/" + randomSourceImage2;

document.querySelectorAll("img")[1].setAttribute("src", randomImageSoure2);


if(randomNumder1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}else if(randomNumber2 > randomNumder1){
    document.querySelector("h1").innerHTML = "🚩 Player 2 Wins!"
}else{
    document.querySelector("h1").innerHTML = "Draw";
}


