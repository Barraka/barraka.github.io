import wood3 from './assets/wood3.jpg';

export default function loadpage() {
    let container = document.querySelector('#container');
    let title = document.createElement('div');
    let titlebg = document.createElement('img');
    let title1 = document.createElement('div');
    let title2 = document.createElement('div');
    let header = document.createElement('div');
    let maincontent = document.createElement('div');
    let footer = document.createElement('div');
    let headeritem1 = document.createElement('div');
    let headeritem2 = document.createElement('div');
    let headeritem3 = document.createElement('div');
    
    
    title.classList.add('title');
    titlebg.classList.add('titlebg');
    title1.classList.add('title1');
    title2.classList.add('title2');
    header.classList.add('header');
    maincontent.classList.add('maincontent');
    footer.classList.add('footer');
    headeritem1.classList.add('headeritem1','headeritem');
    headeritem2.classList.add('headeritem2','headeritem');
    headeritem3.classList.add('headeritem3','headeritem');
    
    title.appendChild(titlebg);
    title.appendChild(title1);
    title.appendChild(title2);
    titlebg.src=wood3;
    
    header.appendChild(headeritem1);
    header.appendChild(headeritem2);
    header.appendChild(headeritem3);
    title.appendChild(header);
    
    container.appendChild(title);
    container.appendChild(maincontent);
    container.appendChild(footer);
    
    title1.textContent="WacGonald";
    title2.textContent="Quality Burgers";
    headeritem1.textContent="Home";
    headeritem2.textContent="Menu";
    headeritem3.textContent="Contact";
    titlebg.style.height=title.clientHeight+'px';    
}