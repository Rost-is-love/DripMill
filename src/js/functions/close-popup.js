const thanksPopup = document.querySelector('.thanks-popup');
const closePopup = document.querySelector('.thanks-popup__close');
const closeBtn = document.querySelector('.thanks-popup__btn');
const body = document.body;

let removePopup = function () {
  thanksPopup.classList.remove('thanks-popup-open');        
}

let disableScroll = function () {
  body.classList.add('disable-scroll');  
}

let enableScroll = function () {
  body.classList.remove('disable-scroll');
}

closePopup.addEventListener('click', function(e) {
  e.preventDefault();
  removePopup ();
  enableScroll ();
});

closeBtn.addEventListener('click', function(e) {
  e.preventDefault();
  removePopup ();
  enableScroll ();
});

thanksPopup.addEventListener('click', (e) => {
  
  if (e.target == thanksPopup) {
    removePopup ();
    enableScroll ();
  }
}); 