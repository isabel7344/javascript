let days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi','Dimanche'];
// let gras=['Samedi','Dimanche'] texte.value.style.fontStyle = "bold";

let Row = document.getElementById('Row');

days.forEach(element => {
    let isabelTd=document.createElement('td');
    isabelTd.innerHTML =element;
    Row.appendChild(isabelTd);    
});



