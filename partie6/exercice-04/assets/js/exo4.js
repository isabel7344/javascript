let days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi','Dimanche'];

let tableau = document.getElementById('tableau');

days.forEach(element => {
    let isabelTd = document.createElement('td');
    isabelTd.innerHTML = element;
    if (element == 'Samedi'|| element == 'Dimanche'){
        isabelTd.style.fontWeight = "bold";
    }
    tableau.appendChild(isabelTd);    
});

