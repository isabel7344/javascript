 let imgBeach  = document.querySelector('img');
 imgBeach.onclick = function() 
 {
     if (imgBeach.src.match('plage.jpg')) 
     {
         imgBeach.src = "img/lion.jpg";
         imgBeach.title= "lion";
     }
     else
     {
        imgBeach.src = "img/plage.jpg";
    }
}
    imgBeach.onmouseover = function () 
{
	imgBeach.style.width = "50rem";
}

    imgBeach.onmouseleave = function () {
	imgBeach.style.width = "40rem";
}

 