function chng_img(number, imageToChange) {
    document.querySelectorAll("img")[imageToChange].setAttribute("src", `images/dice${number}.png`);
}

function roll() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    chng_img(randomNumber1, 0); // changes 1st image

    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    chng_img(randomNumber2, 1); // changes 2nd image

    // var heading1ToChange = document.querySelector("body div h1").innerHTML;
    if (randomNumber1 > randomNumber2) {
        document.querySelector("body div h1").innerHTML = "🚩 Player 1 Wins!!";
    } else if (randomNumber2 > randomNumber1) {
        document.querySelector("body div h1").innerHTML = "Player 2 Wins!! 🚩";
    } else {
        document.querySelector("body div h1").innerHTML = "Draw!!";
    }
}
roll()

function refreshPage() {
    window.location.reload()
}
