// ==================================
// Creating a responsive navbar
// ===================================

const heroSection = document.querySelector('.section-hero');

const mobile_btn = document.querySelector('.mobile-navbar-btn');
const header_active = document.querySelector('.header');
const toggle = () => {
 header_active.classList.toggle('active');
}
mobile_btn.addEventListener('click',()=>toggle());

// ========================================
// sticky navigation
// ========================================

const observer = new IntersectionObserver(
    (entries) => {
        const ent = entries[0];

        !ent.isIntersecting ?
            document.body.classList.add("sticky") :
            document.body.classList.remove("sticky");
    }, {
        // viewport
        root: null,
        threshold: 0,
        rootMargin: "-100px",
    }
);
// when the hero section end part reached then we need to show the sticky navigation
observer.observe(heroSection);


// ==================================
// Creating a portfolio Tabbed component
// ===================================
const p_btns = document.querySelector('.p-btns');
const p_btn = document.querySelectorAll('.p-btn');
const p_img_elem = document.querySelectorAll('.img-overlay')

p_btns.addEventListener('click',(e)=>{
  const p_btn_clicked = e.target;

  const btnPresent = p_btn_clicked.classList.contains('p-btn');
  console.log(btnPresent);
  if(!btnPresent){
    return;
  }

  const btn_num = p_btn_clicked.dataset.btnNum;
  console.log(btn_num);

  const img_active = document.querySelectorAll(`.p-btn--${btn_num}`)
  console.log(img_active);

  p_img_elem.forEach((curElem)=>curElem.classList.add('p-image-not-active'))
  
  img_active.forEach((curElem)=>curElem.classList.remove('p-image-not-active'))
})

// Swiper js code

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  autoplay:{
    delay: 2500,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// media queries

const jsMedia = (widthSize)=>{

  if(widthSize.matches){
    new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      autoplay:{
        delay: 2500,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }
  else{
    new Swiper(".mySwiper", {
      slidesPerView: 2,
      spaceBetween: 30,
      autoplay:{
        delay: 2500,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

  }
}

const widthSize = window.matchMedia("(max-width: 780px)")
jsMedia(widthSize)
widthSize.addEventListener('change',jsMedia)

// ========================================
//  animate number counter
// ========================================

const workSection = document.querySelector(".section-workdata");
const countNum = document.querySelectorAll('.counter-number')

const workObserver = new IntersectionObserver((entries,observer)=>{
const [entry] = entries;

if(!entry.isIntersecting)return;


const speed = 200;
countNum.forEach(curElem => {
  
  const updateNum = () =>{
    const targetNum = parseInt(curElem.dataset.number);
    
    const initialNum = parseInt(curElem.innerText);
    const increamentNum = Math.trunc(targetNum/speed);

    if(initialNum < targetNum){
      curElem.innerText = `${initialNum + increamentNum}+`;
      setTimeout(updateNum,10)
    }
    else{
      curElem.innerText = `${targetNum}+`
    }
  };
  
  updateNum()

});
observer.unobserve(workSection);
},
{
  root: null,
  threshold: 0
}
);
workObserver.observe(workSection);



//============================
//  scroll to top
// ==============================


const footerElement = document.querySelector('.section-footer')

const scrollElement = document.createElement('div');
scrollElement.classList.add('scrollTop-style')
scrollElement.innerHTML = (`<ion-icon name="arrow-up-outline" class='scroll-top'></ion-icon>`)
footerElement.after(scrollElement)

const scrollTop = () => {
  heroSection.scrollIntoView({behavior:'smooth'})
}


scrollElement.addEventListener('click', scrollTop);



// lazy loading images


