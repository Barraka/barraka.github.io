
import animatemenu from './menuanimation.js';
import bb1 from './assets/bb1.jpg';
import bb2 from './assets/bb2.jpg';
import bb3 from './assets/bb3.jpg';
import bb4 from './assets/bb4.jpg';
import lobby from './assets/lobby1.jpg';
export default function gohome() {
    let maincontent = document.querySelector('.maincontent');
    let title = document.querySelector('.title');
    let outer = document.createElement('div');
    let backgroundimage = document.createElement('img');
    let scrollpics = document.createElement('div');
    let scrollcontainer = document.createElement('div');
    let scrollpic1 = document.createElement('img');
    let scrollpic2 = document.createElement('img');
    let scrollpic3 = document.createElement('img');
    let scrollpic4 = document.createElement('img');
    let description = document.createElement('div');
    
    scrollpics.classList.add('scrollpics');
    scrollcontainer.classList.add('scrollcontainer');
    scrollpic1.classList.add('scroll');
    scrollpic2.classList.add('scroll');
    scrollpic3.classList.add('scroll');
    scrollpic4.classList.add('scroll');
    description.classList.add('description');
    scrollpic1.id='scroll1';
    scrollpic2.id='scroll2';
    scrollpic3.id='scroll3';
    scrollpic4.id='scroll4';
    scrollpic1.src=bb1;
    scrollpic2.src=bb2;
    scrollpic3.src=bb3;
    scrollpic4.src=bb4;
    backgroundimage.classList.add('backgroundimage');
    backgroundimage.src=lobby;
    outer.appendChild(backgroundimage);
    scrollcontainer.appendChild(scrollpic1);
    scrollcontainer.appendChild(scrollpic2);
    scrollcontainer.appendChild(scrollpic3);
    scrollcontainer.appendChild(scrollpic4);
    scrollpics.appendChild(scrollcontainer);
    outer.appendChild(scrollpics);
    outer.appendChild(description);    
    
    backgroundimage.style.height=window.innerHeight-title.clientHeight+'px';
    description.style.height=window.innerHeight-title.clientHeight+'px';
    description.style.width=backgroundimage.style.width*0.35+'px';
    
    maincontent.innerHTML='';
    maincontent.appendChild(outer);
    animatemenu();
}