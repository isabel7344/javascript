// Traduire la fonction en fonction fléchée.

// function getStringLength(string){
//   let stringLength;
//   if(string.length === 1){
//     stringLength = 'La chaîne contient qu'un seul caractère';
//   } else {
//     stringLength = `La chaîne contient ${string.length} caractères`;
//   }
//   return stringLength;
// }

// avec des if
(string) =>{
    let stringLength;
  if(string.length === 1){
    stringLength = 'La chaîne contient qu'un seul caractère';
  } else {
    stringLength = `La chaîne contient ${string.length} caractères`;
  }
  return stringLength;
}

// en une fois 

(string) => string.length === 1 ? "La chaîne contient qu'un seul caractère" : `La chaîne contient ${string.length} caractères`;
// condition ? si vrai : si faux
