const hamBtn = document.getElementById('hamburgerMenu');
const hamImg = document.getElementById('hamImg');
const navBar = document.getElementsByTagName('nav')[0];

let i=0;
hamBtn.addEventListener('click', () => {
    navBar.classList.toggle('active');
    if(i%2 === 0){
        hamImg.src = "Images/Icons/hamMenuClose.png"; //Here relative path is used because hamImg.src is setting the path to index.html file and index.html is at root. So Images/Icons/hamMenuClose.png can be used. 
        i++;
    }
    else{
        hamImg.src = "Images/Icons/hamMenu.png"; // Same as above.
        i++;
    }
});