let boldButton = document.getElementById('bold');
let blueButton = document.getElementById('blue');

boldButton.onclick = function () {
    boldButton.classList.toggle('boldText');
    textChange.classList.toggle('boldText');
}

blueButton.onclick = function () {
    blueButton.classList.toggle('blueBackgroundColor');
    textChange.classList.toggle('blueTextColor');
}

let paragraph = document.getElementById("paragraph");
    window.addEventListenner('scrool', function () {     
     paragraph.style.fontSize = "150px";
        }) ;