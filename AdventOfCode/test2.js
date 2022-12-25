
const play=document.querySelector('.play');
const puzzle=document.querySelector('.puzzle');
const container=document.querySelector('.container');
play.addEventListener('click', solve);
function solve() {
    // const temp1 = text.split(/\r?\n/);
    container.innerHTML='';
    const temp1 = puzzle.value.split(/\r?\n/);
    if(!temp1[0])return;
    const temp3 =[];
    temp1.forEach(x=> temp3.push(...x.split(' ')));
    let cycle=1;
    let total=1; //=sprite
    let score=0;
    let crt=0;
    let line=[];
    let lineDom=[];
    const stops={20:20,60:60,100:100,140:140,180:180,220:200};
    
    function dom() {
        const s=lineDom.shift();
        const pixel = document.createElement('div');
        pixel.classList.add('pixel');
        s==='.' ? pixel.classList.add('empty', 'start') : pixel.classList.add('full', 'start');
        if(container.childElementCount)container.lastElementChild.classList.add('end');
        container.appendChild(pixel);
        if(lineDom.length===0) {
            clearInterval(show);
            pixel.classList.add('end');
        }
    }
    function pause(ms=1000) {
        return new Promise(resolve=>setTimeout(resolve, ms));
    }
    function display() {
        (crt>=total-1 && crt<=total+1) ? line.push('█') : line.push('.');
        crt++;
        if(line.length>=40) {
            lineDom.push(...line);
            line=[];
            crt=0;
        }    
    }
    temp3.forEach( x=> {
        display();    
        if(!isNaN(parseInt(x)))total+=parseInt(x);
        cycle++;
        if(stops[cycle])score+=(cycle*total);   
    });
    console.log('Score: ', score);
    const show=setInterval(dom, 100);
}
