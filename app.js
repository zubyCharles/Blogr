const navToggler = document.querySelector('.hamburger-close');
const navbar = document.querySelector('.nav-list');
const toggleIcon = document.querySelector('#toggler');
const connectBtn = document.querySelector('.connect');
const connectDiv = document.querySelector('.ul-div');
const arrowImg = document.querySelector('#arrow');
const arrows = document.querySelectorAll('.arrow');

window.addEventListener('load', () => {
  arrows.forEach((e) => {
    if (window.screen.width >= 750) {
      e.src = './images/icon-arrow-light.svg';
    }
  });
});

let navIsToggled = false;
let connectIsToggled = false;

function resetConnectDiv() {
  connectDiv.style.display = 'none';
  connectIsToggled = false;
  arrowImg.style.transform = 'rotateX(360deg)';
}

navToggler.addEventListener('click', () => {
  if (!navIsToggled) {
    navbar.style.top = '13%';
    toggleIcon.src = './images/icon-close.svg';
  } else {
    navbar.style.top = '-100%';
    toggleIcon.src = './images/icon-hamburger.svg';
    resetConnectDiv();
  }
  navIsToggled = navIsToggled ? false : true;
  //console.log(navIsToggled);
});

connectBtn.addEventListener('click', () => {
  if (!connectIsToggled) {
    connectDiv.style.display = 'block';
    arrowImg.style.transform = 'rotateX(180deg)';
  } else {
    connectDiv.style.display = 'none';
    arrowImg.style.transform = 'rotateX(360deg)';
  }
  connectIsToggled = connectIsToggled ? false : true;
  //console.log(connectIsToggled);
});

