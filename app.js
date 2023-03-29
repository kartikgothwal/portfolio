const hamburger = document.querySelector('.hamburger');
const navbarlinks = document.querySelector('.navbar-links');
hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    navbarlinks.classList.toggle('active');

})
document.querySelectorAll('.nav-links').forEach((n) => {
    n.addEventListener('click',()=>{
        hamburger.classList.toggle('active');
        navbarlinks.classList.toggle('active');
    })
})