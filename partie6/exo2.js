let container = document.getElementById("container");

for (let number = 0; number<= 100; number++) {
    let para = document.createElement("p");
   
    if ( % 15 == 0){
        para.innerHTML = "... "; 
    }
    else{
        para.innerHTML=number;
    }
    container.appendChild(para);
}
