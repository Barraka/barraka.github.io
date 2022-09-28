import './styles.css';
import './contact.css';
import './menu.css';
import gohome from './home.js';
import gomenu from './menu.js';
import gocontact from './contact.js';
import animatemenu from './menuanimation.js';
import loadpage from './loadpage.js';
import resetsize from './resetsize.js';

loadpage();
gohome();
animatemenu();

let headeritem1 = document.querySelector('.headeritem1');
let headeritem2 = document.querySelector('.headeritem2');
let headeritem3 = document.querySelector('.headeritem3');
headeritem1.addEventListener('click',gohome);
headeritem2.addEventListener('click',gomenu);
headeritem3.addEventListener('click',gocontact);

window.animatemenu=animatemenu;
setTimeout(resetsize,100);