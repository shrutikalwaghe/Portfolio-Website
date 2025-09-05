

let colorMode = document.getElementById('change-color');
colorMode.addEventListener("click", ()=>{
    if (document.body.style.backgroundColor == "black") {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        let moon = document.getElementById('change-color');
        moon.innerHTML = `<i class="fa-regular fa-moon"></i>Color Mode`;
        let nav = document.getElementById('navs')
        nav.style.backgroundColor = "white";
        
    } else {
      
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        let moon = document.getElementById('change-color');
        moon.innerHTML = `<i class="fa-regular fa-sun"></i>Color Mode`;
        let nav = document.getElementById('navs')
        nav.style.backgroundColor = "black";
       
    }
});


// Projects


