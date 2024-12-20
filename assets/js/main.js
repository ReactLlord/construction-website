/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')  
      
    //    Menu show 
    if(navToggle){
         navToggle.addEventListener('click', ()=>{
         navMenu.classList.add('show-menu')
        })
    }

    // Menu hidden 
    if(navClose){
        navClose.addEventListener('click', ()=>{
            navMenu.classList.remove('show-menu')
        })
    }


/*=============== REMOVE MENU MOBILE ===============*/
   const navLink = document.querySelectorAll('.nav_link')

   const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    //when we click on each nav_link we remove the show-menu
    navMenu.classList.remove('show-menu')
   }
   navLink.forEach(n=> n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const bgHeader = () => {
    const header = document.getElementById('header')
    //Add aclass if the the bottom offset is greater than 50 of the 
    this.scrollY >= 50 ? header.classList.add('bg-header')
                        : header.classList.remove('bg-header')
}
window.addEventListener('scroll', bgHeader)
bgHeader()

/*=============== SWIPER SERVICES ===============*/ 
const swiperServices = new Swiper ('.services_swiper', {
    loop:true,
    grabCursor: true,
    spaceBetween:24,
    slidesPerView: 'auto',

    //Navigation Arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }, 
})


/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp= () => {
    const scrollUp = document.getElementById('scroll-up')
    // when the scroll is higher than 350 viewport height, add the 
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                    :scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)
scrollUp()


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.ofsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsCLass=document.querySelector('.nav_menu a[href*=' + sectionId + ']')

              if(scrollDown> sectionTop && scrollDown<= sectionTop + sectionHeight){
                sectionsCLass.classList.add('active-Link')
              }else{
                sectionsCLass.classList.remove('active-Link')
              }
    })
} 
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr =scrollReveal({
    origin: 'top',
    distance: '100px',
    duration: 2500,
    delay:400,
    //reser:true, //Animations repeat
})

sr.reveal(`.home_content, .services_data, .services_swiper, .footer_container`)
sr.reveal(`.home_images`, {origin: 'bottom', delay:1000})
sr.reveal(`.about_images, .contact_img`, {origin: 'left'})
sr.reveal(`.about_images, .contact_data`, {origin: 'right'})
sr.reveal(`.about_data`, {origin: 'right'})
sr.reveal(`.projects_card`, {ointerval: 100})

