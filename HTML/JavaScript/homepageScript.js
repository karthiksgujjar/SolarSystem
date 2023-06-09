const hamBtn = document.getElementById('hamburgerMenu');
const hamImg = document.getElementById('hamImg');
const navBar = document.getElementsByTagName('nav')[0];

let i=0;
hamBtn.addEventListener('click', () => {
    navBar.classList.toggle('active');
    if(i%2 === 0){
        hamImg.src = "/HTML/Images/Icons/hamMenuClose.png";
        i++;
    }
    else{
        hamImg.src = "/HTML/Images/Icons/hamMenu.png";
        i++;
    }
});