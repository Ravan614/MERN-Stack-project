var header = document.getElementById("header");
var appear = document.getElementById("rest");
header.addEventListener("click", function() {
    var headerText = header.innerHTML.toLowerCase(); // Convert to lowercase for case-insensitive comparison

    if (headerText.includes("try your luck")) {
        var randomNumber1 = Math.floor(Math.random() * 6) + 1;
        var randomDiceImage = "dice" + randomNumber1 + ".png";
        var randomImageSource = "images/" + randomDiceImage;
        var image1 = document.querySelectorAll("img")[0];
        image1.setAttribute("src", randomImageSource);

        var randomNumber2 = Math.floor(Math.random() * 6) + 1;
        var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
        document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

        //If player 1 wins
        if (randomNumber1 > randomNumber2) {
            document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
        } else if (randomNumber2 > randomNumber1) {
            document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
        } else {
            document.querySelector("h1").innerHTML = "Draw!";
        }
        appear.style.display="inline";
    }
});
var reset = document.getElementById("rest");

reset.addEventListener("click", function() {

    document.querySelector("h1").innerHTML = "Try Your Luck";
    document.querySelectorAll("img")[0].setAttribute("src", "images/dice6.png");
    document.querySelectorAll("img")[1].setAttribute("src", "images/dice6.png");
    appear.style.display="none";

});
    //  else {
        
     

