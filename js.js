// function links
let home= document.getElementById('home');
let about = document.getElementById('about');
let call = document.getElementById('call');
function lin(){
home.onclick = ()=>{
    location.href = 'home.html';
}
about.onclick = _=>{
    location.href = 'about-us.html';
}
call.onclick = _=>{
    location.href = 'contact.html';
}
}
lin();
// down load book
let img = document.querySelectorAll('.book .container .row .col-md-4 img');
function download(){
img[0].onclick = ()=>{
    location.href = 'https://foulabook.com/book/downloading/970545775';
}
img[1].onclick = ()=>{
    location.href = 'https://www.kotobati.com/book/download/5ad72c81-3523-4a7e-8069-6e52b253af11';
}
img[2].onclick = ()=>{
    location.href = 'https://ia802304.us.archive.org/28/items/250-manip-techniq-a-upd/250%20manip%20techniq%20-%20A%20UPD.pdf';
}
img[3].onclick = ()=>{
    location.href = 'https://books-library.net/files/download-pdf-ebooks.org-1532040888Lr6Q9.pdf';
}
img[4].onclick = ()=>{
    location.href = 'https://books-library.net/files/download-pdf-ebooks.org-1458837147Ot9X1.pdf';
}
img[5].onclick = ()=>{
    location.href = 'file:///C:/Users/HP/Saved%20Games/Desktop/New%20folder/3.pdf';
}
img[6].onclick = ()=>{
    location.href = 'https://www.kotobati.com/book/download/6eb23ce1-5614-4e9f-8110-5d22265cbc9b';
}
img[7].onclick = ()=>{
    location.href = 'https://www.kotobati.com/book/download/a241fcf5-ce1f-4610-9a99-2cc4a91ac7a7';
}
img[8].onclick = () => {
    location.href = 'https://www.kotobati.com/book/download/a241fcf5-ce1f-4610-9a99-2cc4a91ac7a7';
}
img[9].onclick = ()=>{
    location.href = 'https://www.kotobati.com/book/download/33ed80bb-2133-4470-9c8c-8360d87846eb';
}
img[10].onclick = ()=>{
location.href = 'https://books-library.net/files/books-library.online_noo0fb4c46df8b9be0a8a5c7d-26083.pdf';
}
img[11].onclick = ()=>{
    location.href = 'https://www.kotobati.com/book/download/bfcb5d4b-6a67-4276-898f-b04682fc793d';
}
}
download();