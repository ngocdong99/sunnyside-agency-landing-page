const clickMenu = document.querySelector('.header-mobile-nav')
const activeMenu = document.querySelector('.header-nav')
const menuList = document.querySelectorAll('.header-nav a')
const menu = document.querySelector('.header-nav.active')

clickMenu.addEventListener('click', ()=>{
    activeMenu.classList.toggle('active')
})

menuList.forEach((a)=> {
    a.onclick = function(){
        activeMenu.classList.remove('active')
    }
})

