let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

document.querySelector("#loginbtn").onclick =() =>{
  document.querySelector('.login-container').classList.toggle('active');
}

document.querySelector("#close-login").onclick =() =>{
  document.querySelector('.login-container').classList.remove('active');
}

window.onscroll =() => {
  
  if(window.scrollY >0){
    document.querySelector('.header').classList.add('active');
  }
  else{
    document.querySelector('.header').classList.remove('active');
  }

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
}


window.onload =() => {
  
  if(window.scrollY >0){
    document.querySelector('.header').classList.add('active');
  }
  else{
    document.querySelector('.header').classList.remove('active');
  }
}

document.querySelector('.home').onmousemove = (e) =>{
  document.querySelectorAll('.home-parallax').forEach(elm => {
    let speed = elm.getAttribute('data-speed')

    let x = (window.innerWidth - e.pageX * speed) / 90 ;
    let y =(window.innerHeight - e.pageY * speed) / 90;
    
    elm.style.transform = `translateX(${y}px) translateY(${x}px)`;
  });
};

document.querySelector('.home').onmouseleave = (e) =>{
  document.querySelectorAll('.home-parallax').forEach(elm => {
    elm.style.transform = `translateX(0px) translateY(0px)`;
  });
};

var swiper = new Swiper(".vehicle-slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop:true,
  grabCursor:true,
  centeredSlides:true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

function auth(){

  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  if (email=="admin@gmail.com" && password=="123456"){
    window.location.assign("New.html");
    alert("Login Successfully");
  }
  else{
  alert("Invalid Information");
  return;
  }
}

document.querySelector("#rent-button1").onclick =() =>{
  document.querySelector('.rent-container').classList.toggle('active');
}

document.querySelector("#rent-button2").onclick =() =>{
  document.querySelector('.rent-container').classList.toggle('active');
}

document.querySelector("#rent-button3").onclick =() =>{
  document.querySelector('.rent-container').classList.toggle('active');
}

document.querySelector("#rent-button4").onclick =() =>{
  document.querySelector('.rent-container').classList.toggle('active');
}

document.querySelector("#rent-button5").onclick =() =>{
  document.querySelector('.rent-container').classList.toggle('active');
}

document.querySelector("#rent-button6").onclick =() =>{
  document.querySelector('.rent-container').classList.toggle('active');
}

document.querySelector("#close-rent").onclick =() =>{
  document.querySelector('.rent-container').classList.remove('active');
}