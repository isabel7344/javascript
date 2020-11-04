// function verifmotdepasse() {
//     let mdp = document.getElementById('Mot_de_passe'); 
//     let confirm = document.getElementById('Confirmation');
//     if (mdp.value == confirm.value) {
//      mdp.style.borderColor = 'green';
//      confirm.style.borderColor = 'green';
//     }
//     else{
//         mdp.style.borderColor = 'red';
//         confirm.style.borderColor = 'red';  
//     }
// }
    let submitButton =document.getElementById('submitButton');
        submitButton.onclick = function (e) {
        e.preventDefault();
        let mdp = document.getElementById('Mot_de_passe'); 
        let confirm = document.getElementById('Confirmation');
        if (mdp.value == confirm.value) {
         mdp.style.borderColor = 'green';
         confirm.style.borderColor = 'green';
        }
        else{
            mdp.style.borderColor = 'red';
            confirm.style.borderColor = 'red';  
        }
}