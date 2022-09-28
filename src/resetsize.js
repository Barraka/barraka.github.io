export default function resetsize() {
    let title = document.querySelector('.title');
    let titlebg = document.querySelector('.titlebg');
    titlebg.style.height=title.clientHeight+'px';
}