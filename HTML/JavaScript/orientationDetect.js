// const landscapeMode = window.matchMedia("(orientation: landscape)");
// const userAgent = navigator.userAgent;


// landscapeMode.addEventListener('change', (e) => {
//     if (e.matches && userAgent.includes("Mobile")) {

//         let planetContainer = document.querySelector('.sunContainer');
//         let imageTag = document.createElement('img');

//         planetContainer.children[0].firstElementChild.remove();
//         imageTag.id = "sunImage";
//         imageTag.setAttribute('src', "Images/SolarSystem/Mobile/sun.png");
//         planetContainer.children[0].append(imageTag);
       
//         planetContainer = document.querySelector('.mercuryContainer');
//         // console.log(planetContainer.children[0].firstElementChild);
//         planetContainer.children[0].firstElementChild.remove();
//         imageTag.id = "mercuryImage";
//         imageTag.setAttribute('src', "Images/SolarSystem/Mobile/mercury.png");
//         planetContainer.children[0].append(imageTag);
//     }
// })