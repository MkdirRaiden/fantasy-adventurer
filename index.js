

// all elements stored in variables
const toolbar = document.querySelector(".toolbar");
const toolbarExitBtn = document.querySelector(".toolbar-exitBtn");
const adventureSection = document.querySelector("#adventure");
const togleMenuBtn = document.querySelector(".toggleMenu");
const logo = document.querySelector(".logo");
const ufoImage = document.querySelector("#ufoImage");
const dropDownMenu = document.querySelector(".drop-down-menu");
const cancelMenu = document.querySelector("#cancelMenu");
const searchBar = document.querySelector(".searchBar");
const logRegDisplay = document.querySelector(".content-container");
const logRegBox = document.querySelector(".logreg-box");
const login = document.querySelector(".loginBox");
const register = document.querySelector(".registerBox");
const signUpLink = document.querySelector("#sign-up-link");
const signInLink = document.querySelector("#sign-in-link");
const loginResisterBtn = document.querySelectorAll(".loginResisterBtn");
const logRegExitBtn = document.querySelector(".log-reg-exitBtn");
const upArrow = document.getElementById("up-arrow");
const downArrow = document.getElementById("down-arrow");
const header = document.getElementById("header");
const footer = document.getElementById("footer");
const parentContainer = document.getElementById("parent-container");

gsap.from('body', { duration: 3.5, y: '-100%', ease: 'elastic', delay: '0' })
gsap.from('#header', { duration: 1.5, y: '-100%', ease: 'bounce', delay: '3' })
gsap.from('.userProfile', { duration: 1.5, x: '100%', ease: 'bounce', delay: '3' })

upArrow.addEventListener("click", ()=>{
  gsap.to('#header', { duration: 1, y: '-100%', ease: 'back' });
  upArrow.style.display= "none";
  downArrow.style.display= "block";
  downArrow.style.opacity= "100%";
  downArrow.style.translate= "0 10px";
})
downArrow.addEventListener("click", ()=>{
  gsap.to('#header', { duration: 1, y: '0%', ease: 'bounce' })
  gsap.from('.userProfile', { duration: 1.5, x: '100%', ease: 'bounce', delay: '0' })
  downArrow.style.display= "none";
  upArrow.style.display= "block";
})


ufoImage.addEventListener("click",()=>{
  toolbar.style.translate = "0 0";
  toolbar.style.scale = "1 1";
  toolbar.style.transform="skew(0deg, 0deg)";
  ufoImage.style.scale = "0 0";
  logo.style.visibility= "hidden";
  togleMenuBtn.style.translate = "0 -200px";
})
toolbarExitBtn.addEventListener("click",()=>{
  toolbar.style.transform="skew(45deg, 45deg)";
  toolbar.style.translate = "-100px -160px";
  toolbar.style.scale = "0 0";
  ufoImage.style.scale = "1 1";
  logo.style.visibility= "visible";
  togleMenuBtn.style.translate = "0 0";
})

// login register button clicked method
loginResisterBtn.forEach(element => {
    element.addEventListener("click", ()=>{
    gsap.to('#header', { duration: 1, y: '-100%', ease: 'back' }); 
    dropDownMenu.style.translate = "-350px";
    logRegDisplay.style.rotate = "0deg";
    logRegDisplay.style.scale = "1 1";
    togleMenuBtn.style.translate = "0 -100px";
    searchBar.style.scale =" 0 0";
    adventureSection.style.translate = "-2000px ";
    toolbar.style.translate ="-1000px";
    parentContainer.style.background = "url(images/space06.jpg) no-repeat center";
    parentContainer.style.backgroundSize = "cover";
    header.style.background = "rgba(223, 164, 128, 0.391)";
  }) 
}) 
// logregdisplay exit method
logRegExitBtn.addEventListener("click", ()=>{
  logRegDisplay.style.rotate = "180deg";
  logRegDisplay.style.scale = "0 0";
  togleMenuBtn.style.translate = "-4px -4px"; 
  ufoImage.style.scale = "1";
  searchBar.style.scale ="1";
  ufoImage.style.visibility = "visible";
  logo.style.visibility = "visible";
  adventureSection.style.translate = "0";
  toolbar.style.translate ="0px";
  parentContainer.style.background = "url(images/space04.jpg) no-repeat center";
  parentContainer.style.backgroundSize = "cover";
  header.style.background = "rgba(44, 66, 171, 0.37)";
  gsap.to('#header', { duration: 1, y: '0%', ease: 'bounce' })
  gsap.from('.userProfile', { duration: 1.5, x: '100%', ease: 'bounce', delay: '0' })
}) 
// sign up method
signUpLink.addEventListener("click", ()=>{
 
  login.style.translate = "0 -610px";
  setTimeout(()=>{
    register.style.translate = "0 -610px";
  },250 )
 
})
// sign in method
signInLink.addEventListener("click", ()=>{
  register.style.translate = "0 0px";
 
  setTimeout(()=>{
    login.style.translate = "0 0px";
   
  },250 )


})
// toglemenubtn method
togleMenuBtn.addEventListener("click", ()=>{
  togleMenuBtn.style.translate = "0 -200px";
  dropDownMenu.style.translate = "-4px  -4px";
  searchBar.style.scale = ".75 "
  ufoImage.style.scale = "0"; 
  ufoImage.style.visibility = "hidden";
  logo.style.visibility = "hidden";
})

cancelMenu.addEventListener("click", cancelFunction);

function cancelFunction(){
    dropDownMenu.style.translate = "-350px";
    setTimeout(()=>{
      togleMenuBtn.style.translate = "0";
      ufoImage.style.scale = "1";
      searchBar.style.scale ="1";
      ufoImage.style.visibility = "visible";
      logo.style.visibility = "visible";
    }, 1000)
  }
const parallexImageContainer = document.getElementById('parallex-image-container');
console.log(parallexImageContainer);
const adventure = document.getElementById("text");
const adventure1 = document.getElementById("text1");
const sectionButton = document.getElementById("section-button");
  window.addEventListener('scroll', ()=>{

    let value = window.scrollY;
    console.log(value);
    if(value == 692){
      gsap.from('footer', { duration: 1.5, y: '100%', ease: 'elastic', delay: '1.5' })
      gsap.from('.links', {duration: 1, opacity: 0, delay: 2.5, stagger: .35})
      
    }
   
    parallexImageContainer.style.marginTop= value * -.3 + "px";
    adventure.style.marginBottom = value * 2.5 + "px";
    adventure1.style.marginBottom = value * 1 + "px";
    sectionButton.style.marginBottom = value * -1.5 + "px";

  })

  const buttons = document.querySelectorAll("[data-carousel-button]");

  buttons.forEach(button => {

    button.addEventListener("click", () => {
      const offset = button.dataset.carouselButton === "next" ? 1 : -1;
      const slides = button
        .closest("[data-carousel]")
        .querySelector("[data-slides]");

      const activeSlide = slides.querySelector("[data-active]");
      let newIndex = [...slides.children].indexOf(activeSlide) + offset;
      if (newIndex < 0) newIndex = slides.children.length-1;
      if(newIndex >= slides.children.length) newIndex = 0;  

      slides.children[newIndex].dataset.active = true;
      delete activeSlide.dataset.active;
    })

  })

 