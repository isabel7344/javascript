let languages = ['html', 'css', 'javascript', 'php', 'mysql', 'c++','ruby','python'];
let isabelRow = document.getElementById('isabelRow');


languages.forEach(element => {
    let isabelTd=document.createElement('td');
    isabelTd.innerHTML =element;
    isabelRow.appendChild(isabelTd);    
});

// for (const element of array1) {
//     console.log(element);
//   }