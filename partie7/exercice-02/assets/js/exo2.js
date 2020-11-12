let boldButton = document.getElementById('bold');
let blueButton = document.getElementById('blue');
let scrollButton = document.getElementById('scroll');
let textBold = document.querySelector('div');

boldButton.onclick = function () {
    textBold.classList.toggle('bold');
}

blueButton.onclick = function () {
    textBold.classList.toggle('blue');
}

scrollButton.onclick = function () {
    textBold.classList.toggle('scroll');
}



// let buttonBold = document.getElementById('buttonBold');
// let buttonColor = document.getElementById('buttonColor');
// let buttonSize = document.getElementById('buttonSize');
// let textBold = document.querySelector('div');

// buttonBold.onclick = function () {
//     textBold.classList.toggle('textBold');
// }

// buttonColor.onclick = function () {
//     textBold.classList.toggle('redTextColor');
// }

// buttonSize.onclick = function () {
//     textBold.classList.toggle('textSize');
// }



