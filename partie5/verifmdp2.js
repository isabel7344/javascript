let mdp = document.getElementById('Mot_de_passe'); 
let confirm = document.getElementById('Confirmation');
let submitButton =document.getElementById('submitButton');

        submitButton.onclick = function (e) {
        e.preventDefault();
       
        if (mdp.value == confirm.value) {
         mdp.classList.add('bordeGreen');
         confirm.classList.add('bordeGreen');
        }
        else{
            mdp.classList.add('bordeRed');
            confirm.classList.add('bordeRed');  
        }
}