
export default function animatemenu() {
    let scrollcontainer = document.querySelector('.scrollcontainer');
    let backgroundimage = document.querySelector('.backgroundimage');
    let scrollpics = document.querySelector('.scrollpics');
    let description = document.querySelector('.description');    
    let count=0;
    
    let length=scrollcontainer.childElementCount;
    let maincontentwidth=backgroundimage.clientWidth;
    let maincontentheight=backgroundimage.clientHeight;
    let prevcount=length-1;
    let nextcount=1;
    let alternate=true;
    
    scrollpics.style.top=maincontentheight*0.22+'px';
    scrollpics.style.left=maincontentwidth*0.41+'px';
    scrollpics.style.width='17.5%';
    scrollpics.style.height='45.5%';
    
    let text=['Taste the ultimate burger','Quality ingredients from local suppliers','Make you own burgers from a wide range of fresh ingredients'];
    let counttext=0;
    let textalternate=true;
    
    function animatetext() {
        if(!textalternate) {
            description.style.opacity=0;
            textalternate=true;
        }
        else {
            description.style.opacity=1;
            description.textContent=text[counttext];
            if(counttext>=text.length-1)counttext=0;
            else counttext++;
            textalternate=false;
        }        
    }
    
    function scrollitems() {
        let currentslide=scrollcontainer.childNodes[count];
        let prevslide=scrollcontainer.childNodes[prevcount];
        let nextslide=scrollcontainer.childNodes[nextcount];
        if(!alternate){
            currentslide.style.transform='translateX(-100%)';
            prevslide.style.display='none';
            prevslide.style.transform='translateX(100%)';
            nextslide.style.display='block';
            alternate=true;
            if(count<length-1)count++;
            else count=0;
            if(count===1)prevcount=0;
            else prevcount++;
            if(nextcount===length-1)nextcount=0;
            else nextcount++;
        }
        else {
            currentslide.style.transform='translateX(0%)';
            alternate=false;
        }    
    }   
    function resize() {
        maincontentwidth=backgroundimage.clientWidth;
        maincontentheight=backgroundimage.clientHeight;
        scrollpics.style.top=maincontentheight*0.22+'px';
        scrollpics.style.left=maincontentwidth*0.41+'px';
        scrollpics.style.width=maincontentwidth*0.18+'px';
        scrollpics.style.height=maincontentheight*0.455+'px';
        description.style.width=maincontentwidth*0.35+'px';
        description.style.height=maincontentheight+'px';
    }
    window.addEventListener('resize',resize);
    
    resize();
    animatetext();
    setInterval(scrollitems,4000);
    setInterval(animatetext,6000);
    if(maincontentheight===0 || maincontentwidth===0){
        setTimeout(() => {
            resize();
        }, 500);
    }
}