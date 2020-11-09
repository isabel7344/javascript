let Forename = document.getElementById("Forename").cloneElement(true);
let Age = document.getElementById("Age").cloneElement(true);
let onclick = document.getElementById("clone");
let copycat =document.getElementById("copycat").cloneElement(true);

button.onclick = function() {
let clone = Forename.cloneNode(true);
document.getElementById("copycat").appendChild(clone)
let clone =Age.cloneNode(true)
document.getElementById("copycat").appendChild(clone)
} 

// const cloned = document.getElementById('cloned');

// cloned.addEventListener('click' , clonedInput)

// function clonedInput(e) {
//     e.preventDefault();
//     let name = document.getElementById("form").cloneNode(true);
//     document.getElementById('formName').appendChild(name);
// }