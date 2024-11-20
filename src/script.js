const navLink = document.querySelectorAll('.nav-link');
const navMenu = document.getElementById('nav-menu');
const hamburger = document.getElementById('hamburger');


hamburger.addEventListener('click', () =>{
   navMenu.classList.toggle('left-[0]')
   hamburger.classList.toggle('ri-close-large-line')
})

navLink.forEach(link =>{
    link.addEventListener('click', () =>{
        navMenu.classList.toggle('left-[0]')
        hamburger.classList.toggle('ri-close-large-line')
    })
})

var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  const readMoreContainer = document.querySelector('.about-container');  

  readMoreContainer.addEventListener('click', event =>{

    const current = event.target;

    const IsreadMoreBtn = current.className.includes('read-more-btn');
    if(!IsreadMoreBtn) return;

    const currentText = event.target.parentNode.querySelector('.read-more-text');

    currentText.classList.toggle('read-more-text-show');

    current.textContent = current.textContent.includes("Read More") ? "Read Less..." : "Read More...";
  })


  // scroll sticky sidebar
  
  const header = document.getElementById('nav-bar');
  window.addEventListener('scroll', () =>{
    if(document.documentElement.scrollTop > 20){
      header.classList.add("sticky");
    } else{
      header.classList.remove("sticky");
    }
  })
