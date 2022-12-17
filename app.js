// Function for image slider
let slideIndex = 1;
let updateImage = (n) => {
    showSlides(slideIndex += n);
}

let currentImage = (n) => {
    showSlides (slideIndex = n);
}

const showSlides = (n) => {
    let slides = document.getElementsByClassName("image-slider");
    let dots = document.getElementsByClassName("dot"); 

    if (n > slides.length){
        slideIndex = 1;
    }
    if (n < 1){
        slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active","");
    }
    slides[slideIndex-1].style.display = "block";
    dots [slideIndex-1].className += " active";
}

showSlides(slideIndex);


// function for open and close modals
let imageButtons = document.querySelectorAll('img[data-modal], span.close[data-modal]');
let modals = document.querySelectorAll('.modal');

function openModals(id) {
  let a = document.getElementById(id);
  a.style.display = "block";
}

function closeModals() {
  modals.forEach(a => {
    a.style.display = "none";
  });
}

imageButtons.forEach(a => {
  a.addEventListener('click', event => {
    closeModals();
    openModals(a.dataset.modal);
  });
});

modals.forEach(a => {
  let x = a.querySelector('.close');
  x.addEventListener('click', closeModals);
});


// Function for email validation
function emailValidation(){
  let emailInputValue = document.getElementById("email").value;
  let correctCharInput = emailInputValue.indexOf("@");
  let rangeCharInput = emailInputValue.lastIndexOf(".");

  if (correctCharInput < 1 || rangeCharInput < correctCharInput+2 || rangeCharInput+2 >= correctCharInput.length){
    alert("Alamat email tidak valid.");
    return false;
  } else {
    alert("Alamat email valid.");
  }
}


const accordion = document.getElementsByClassName('containerAccordion');

for (let i=0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}
