<<<<<<< HEAD
function changeBg(){
    var navbar = document.getElementById('navbar');
    var scrollValue = window.scrollY;
    if(scrollValue<150)
        navbar.classList.remove('bgColor');
    else
    navbar.classList.add('bgColor');
}

window.addEventListener('scroll',changeBg);

=======
function changeBg(){
    var navbar = document.getElementById('navbar');
    var scrollValue = window.scrollY;
    if(scrollValue<150)
        navbar.classList.remove('bgColor');
    else
    navbar.classList.add('bgColor');
}

window.addEventListener('scroll',changeBg);

>>>>>>> 68860e5ed5a841a589dbf944242d7f53a0bba7e7
