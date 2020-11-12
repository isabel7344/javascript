let container = document.getElementById("container");

function coco() {
  event.preventDefault();
  let firstNumber = document.getElementById("firstNumber").value;
  let secondNumber = document.getElementById("secondNumber").value;
  let total = firstNumber * secondNumber;

  if (
    firstNumber > 0 &&
    firstNumber < 11 &&
    secondNumber > 0 &&
    secondNumber < 11
  ) {
    container.innerHTML = null
    while (total < 250) {
      let result = document.createElement("p");
      result.innerHTML = total;
      container.appendChild(result);
      secondNumber = total;
      total = firstNumber * secondNumber;
    }
  } else {
    window.alert("les nombres doivent compris entre 1 et 10 ");
  }
}