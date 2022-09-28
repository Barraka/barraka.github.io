import bg1 from './assets/burger1.jpg';
import bg2 from './assets/burger2.jpg';
import bg3 from './assets/burger3.jpg';
import bg4 from './assets/burger4.jpg';
import menubg from './assets/menubg.jpg';
export default function gomenu() {
    let maincontent = document.querySelector('.maincontent');
    let title = document.querySelector('.title');
    let backimage = document.createElement('img');
    let menucontainer = document.createElement('div');
    
    backimage.classList.add('backimage');
    backimage.src=menubg;
    menucontainer.classList.add('menucontainer');
    
    let contentwidth=maincontent.clientWidth;
    let contentheight=maincontent.clientHeight;
    backimage.style.height=window.innerHeight-title.clientHeight+'px';
    
    let burger1=generateburgertext(bg1,'The Grandiose','Beetroot and caramel sauce','£75')
    let burger2=generateburgertext(bg2,'The Eloquent','Patagonian bacon, authentic French cheese','£68')
    let burger3=generateburgertext(bg3,'The Sudden Death','Concentration of calorie-intensive oil, marinated in an assortiment of greases.','£81')
    let burger4=generateburgertext(bg4,'The "Royal" Cheese','Your classic quarter-pounder with cheese.','£15')
    
    function generateburgertext(b,t,d,p) {
        let outer = document.createElement('div');
        let burger = document.createElement('img');    
        let itembtext = document.createElement('div');
        let itemtitle = document.createElement('div');
        let itemdescription = document.createElement('div');
        let itemprice = document.createElement('div');
        let svg = document.createElement('div');
        outer.classList.add('outer');
        burger.classList.add('burgers');
        burger.src=b;
        svg.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="m12.1 38 10.5-14-10.5-14h3.7l10.5 14-10.5 14Zm12.6 0 10.5-14-10.5-14h3.7l10.5 14-10.5 14Z"/></svg>';
        itembtext.classList.add('itemtext');
        itemtitle.classList.add('itemtitle');
        itemdescription.classList.add('itemdescription');
        itemprice.classList.add('itemprice');
        itemtitle.textContent=t;
        itemdescription.textContent=d;
        itemprice.textContent=p;
        itembtext.appendChild(itemtitle);
        itembtext.appendChild(itemdescription);
        itembtext.appendChild(itemprice);
        itembtext.appendChild(svg);
        outer.appendChild(burger);
        outer.appendChild(itembtext);    
        outer.style.width=contentwidth*0.4;
    
        return outer;
    }
    
    maincontent.innerHTML='';
    menucontainer.appendChild(burger1);
    menucontainer.appendChild(burger2);
    menucontainer.appendChild(burger3);
    menucontainer.appendChild(burger4);
    maincontent.appendChild(backimage);
    maincontent.appendChild(menucontainer);
    
}