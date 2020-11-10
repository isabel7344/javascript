let container = document.getElementById("container");
let nombre = 2020;

while (nombre <= 2030) {
  let para = document.createElement("p");
  para.innerHTML = nombre

  if (anneebis(nombre) === true) {
    para.style.color = "#FF0000";
  }
  container.appendChild(para);
  nombre++;
}

function anneebis(year) {
  if (year % 100 === 0) {
    if (year % 400 === 0) {
      return true;
    }
  } else {
    if (year % 4 === 0) {
      return true;
    }
  }
  return false;
}
