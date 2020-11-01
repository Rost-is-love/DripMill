import './vendor/just-validate.min.js';
import './functions/start-animation';
import './_vars';
import './functions/fullscreen-mobile';
import './functions/active-menu';
import './functions/menu-work';
import './functions/form';
import './functions/close-popup';

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

/* import {
  pageId
} from './functions/active-menu'; */
/* import {
  resizeContent
} from './functions/resize';
import {
  scrollTo
} from './functions/smooth-scroll';
import {
  disableScroll,
  enableScroll
} from './functions/stop-scroll'; */

//disableScroll(fix) // fix -> class of element with position: fixed
