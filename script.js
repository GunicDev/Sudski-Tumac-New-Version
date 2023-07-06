// nav bar
const navButton = document.getElementById('nav-button')
const menu =document.getElementById('menu')
const navBar = document.getElementById('myTopnav')

//all sections select
const sections = document.querySelectorAll('section');

// individual selections
const section1 = document.getElementById('home')


const computerMode = function(){
  navButton.classList.add('hidden');
  menu.classList.remove('hidden');
 }

const mobileMode = function () {
  navButton.classList.remove('hidden');
  menu.classList.add('hidden');
  menu.classList.remove('menu');
  }

//auto heigth setup on load
const autoHeightScreen = function () {
     sections.forEach((value)=>{
        value.style.height = window.innerHeight + 'px' ;
    })    
  }
  
//height and navbar change
const checkScreen = function () {
  if (window.innerWidth>720) {
    window.addEventListener("onload", autoHeightScreen());
    computerMode();
    
  }else{
    mobileMode();
  }
}
checkScreen();

menu.addEventListener('click', function () {
  slideSections();
})
  //navbar button 
  const mobileNavBar = function () {
    navBar.innerHTML = ` 
    <nav id="myTopnav">
        <div class="navbar">          
          <ul id="menu" class="menu">
            <li><a class="menu__link" href="#home">Sudski tumač</a></li>
            <li><a class="menu__link" href="#translate">Prevodi</a></li>
            <li><a class="menu__link" href="#price">Cjenovnik</a></li>
            <li><a class="menu__link" href="#contact">Kontakt</a></li>           
            </ul> 
            <h1 onclick="closeMobileBar()" class="close_moblile">X</h1>          
        </div>
      </nav>
  `
slideSections();
};

  const closeMobileBar = function () {
    navBar.innerHTML = `
    <nav id="myTopnav">
    <div class="navbar">
      <div class="logo"><a href="mailto:snjeza93@hotmail.com">sudskitumacspg@gmail.co</a></div>     
        <i id="nav-button" onclick="mobileNavBar()"  class="nav_button fi fi-rr-menu-burger"></i>
    </div>
  </nav>
    `
    
  }

// slide to sections
  // document.querySelector('.menu').addEventListener('click', function (e) {
  //   e.preventDefault();  
  //   // Matching strategy
  //   if (e.target.classList.contains('menu__link')) {
  //     const id = e.target.getAttribute('href');
  //     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  //   }
  // });

  const slideSections = function () {
    document.querySelector('.menu').addEventListener('click', function (e) {
      e.preventDefault();  
      // Matching strategy
      if (e.target.classList.contains('menu__link')) {
        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
      }
    });
  }


