const landscapeMode = window.matchMedia("(orientation: landscape)");
const userAgent = navigator.userAgent;

let imageTag = document.createElement('img');

const sunContainer = document.querySelector('.sunContainer');
console.log(sunContainer);

landscapeMode.addEventListener('change', (e) => {
    if (e.matches && userAgent.includes("Mobile")) {

        console.log(sunContainer.children[0].firstElementChild.remove());
        imageTag.classList.add('sunImage');
        imageTag.setAttribute('src', "Images/SolarSystem/Mobile/sun.png");
        sunContainer.children[0].append(imageTag);

    }
})