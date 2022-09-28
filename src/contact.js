import contactmap from './assets/map.png';
import back from './assets/menubg.jpg';
export default function gocontact() {
    
    let maincontent = document.querySelector('.maincontent');
    let title = document.querySelector('.title');
    let backimage = document.createElement('img');
    
    backimage.classList.add('backimage');
    backimage.src=back;
    backimage.style.height=window.innerHeight-title.clientHeight+'px';

    let form = document.createElement('div');
    form.classList.add('form');
    let map = document.createElement('img');
    map.classList.add('map');
    let contact = document.createElement('div');
    contact.classList.add('contact');
    map.src=contactmap;    

    let address = document.createElement('div');
    let addresssvg = document.createElement('div');
    let addresstxt = document.createElement('div');
    address.classList.add('contactitem');
    addresssvg.classList.add('contactsvg');
    addresstxt.classList.add('contacttxt');

    let phone = document.createElement('div');
    let phonesvg = document.createElement('div');
    let phonetxt = document.createElement('div');
    phone.classList.add('contactitem');
    phonesvg.classList.add('contactsvg');
    phonetxt.classList.add('contacttxt');

    let mail = document.createElement('div');
    let mailsvg = document.createElement('div');
    let mailtxt = document.createElement('div');
    mail.classList.add('contactitem');
    mailsvg.classList.add('contactsvg');
    mailtxt.classList.add('contacttxt');    

    mailsvg.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M8 42V18L24.1 6 40 18v24H28.3V27.75h-8.65V42Zm3-3h5.65V24.75H31.3V39H37V19.5L24.1 9.75 11 19.5Zm13-14.65Z"/></svg>';
    phonesvg.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M38.8 23.65q-.25-6.05-4.45-10.25T24.1 8.95v-3q3.6.1 6.775 1.525Q34.05 8.9 36.45 11.3q2.4 2.4 3.825 5.575Q41.7 20.05 41.8 23.65Zm-8.45 0q-.25-2.5-2-4.225Q26.6 17.7 24.1 17.45v-3q3.75.25 6.375 2.85t2.875 6.35ZM39.75 42q-6.1 0-12.125-3T16.8 31.2Q12 26.4 9 20.375 6 14.35 6 8.25q0-.95.65-1.6Q7.3 6 8.25 6h7q.7 0 1.225.475.525.475.675 1.275l1.35 6.3q.1.7-.025 1.275t-.525.975l-5 5.05q2.8 4.65 6.275 8.1Q22.7 32.9 27.1 35.3l4.75-4.9q.5-.55 1.15-.775.65-.225 1.3-.075l5.95 1.3q.75.15 1.25.75T42 33v6.75q0 .95-.65 1.6-.65.65-1.6.65Zm-28.3-23.4 4.05-4.1L14.35 9H9q0 1.95.6 4.275t1.85 5.325ZM29.9 36.75q2.05.95 4.45 1.55 2.4.6 4.65.7v-5.35l-5.15-1.05ZM11.45 18.6ZM29.9 36.75Z"/></svg>';
    addresssvg.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M7 40q-1.2 0-2.1-.9Q4 38.2 4 37V11q0-1.2.9-2.1Q5.8 8 7 8h34q1.2 0 2.1.9.9.9.9 2.1v26q0 1.2-.9 2.1-.9.9-2.1.9Zm17-15.1L7 13.75V37h34V13.75Zm0-3L40.8 11H7.25ZM7 13.75V11v26Z"/></svg>';
    addresstxt.textContent='21 Jump Street, 12345 London';
    phonetxt.textContent='081-948-6892';
    mailtxt.textContent='contactus@mail.com';

    address.appendChild(addresssvg);
    address.appendChild(addresstxt);
    phone.appendChild(phonesvg);
    phone.appendChild(phonetxt);
    mail.appendChild(mailsvg);
    mail.appendChild(mailtxt);
    contact.appendChild(address);
    contact.appendChild(phone);
    contact.appendChild(mail);    
    form.appendChild(map);
    form.appendChild(contact);

    maincontent.innerHTML='';
    maincontent.appendChild(backimage);
    maincontent.appendChild(form);
}