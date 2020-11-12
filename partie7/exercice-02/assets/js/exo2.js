let boldButton = document.getElementById('bold');
let blueButton = document.getElementById('blue');
let scrollbutton = document.getElementById('scroll');

boldButton.onclick = function () {
    boldButton.classList.toggle('boldText');
    textChange.classList.toggle('boldText');
}

blueButton.onclick = function () {
    blueButton.classList.toggle('blueBackgroundColor');
    textChange.classList.toggle('blueTextColor');
}

// scrollButton.onclick = function () {
   
// }
// function coco() {
//     event.preventDefault();
//      if (
//         firstNumber > 0 &&
//         firstNumber < 11 &&
//         secondNumber > 0 &&
//         secondNumber < 11
//       ) {
//         container.innerHTML = null
//         while (total > 1) {
//           let result = document.createElement("p");
//           result.innerHTML = total;
//           container.appendChild(result);
//          firstNumber = total;
//           total = firstNumber / secondNumber;
//         }
//       } else {
//         window.alert("les nombres doivent compris entre 1 et 10 ");
//       }
//     }