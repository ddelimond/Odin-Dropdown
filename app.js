let hoverBtn = document.querySelector('.dropdown');
let dropdownMenu = document.querySelector('.dropdownList');
let list = document.querySelector('.dropdownListList');
let mainContent = document.querySelector('.main');

console.log("hello");
hoverBtn.addEventListener('mouseover', ()=>{
    dropdownMenu.classList.add('visible');
})

dropdownMenu.addEventListener('mouseleave', ()=>{
    dropdownMenu.classList.remove('visible');
});