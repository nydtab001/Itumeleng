const hambut = document.getElementById("hamburg");
const nav = document.getElementById("navlist");
const navdiv = document.querySelectorAll(".navdiv");
const navlinks = document.querySelectorAll(".navbar li a");
const imagesect = document.querySelector(".image-sect");

document.addEventListener("DOMContentLoaded", () => {
  var computedStyle = window.getComputedStyle(document.querySelector(".outer-nav"));
  imagesect.style.marginTop = computedStyle.height;
})

hambut.addEventListener("click", toggleButton)

function toggleButton(){
    nav.classList.toggle("show")
}

navdiv.forEach((n) => n.addEventListener("click", () => clicked(n)));

function clicked(element) {
  element.style.backgroundColor = "rgb(5, 30, 69)";
 // pagecolor(element);
}

navdiv.forEach((n) => n.addEventListener("mouseover", () => buttonhover(n)));

function buttonhover(element) {
//  element.style.backgroundColor = document.querySelector(".contact-info").style.backgroundColor;
  pagecolor(element);
  element.style.color = "white";
}

function pagecolor(element) {
  switch (element) {
    case navdiv[0]:
      element.style.backgroundColor = "rgba(188, 222, 235, 1)"; // blue
   //   document.querySelector(".contact-info").style.backgroundColor = "rgba(50,50,255, 0.9)"
      break;
    case navdiv[1]:
      element.style.backgroundColor = "rgba(237, 133, 178, 1)"; // pink
   //   document.querySelector(".contact-info").style.backgroundColor = "rgba(235, 50, 50, 0.9)"
      break;
    case navdiv[2]:
      element.style.backgroundColor = "rgba(246, 226, 107, 1)"; // yellow
    //  document.querySelector(".contact-info").style.backgroundColor = "rgba(225,170,20, 0.9)"
      break;
    case navdiv[3]:
      element.style.backgroundColor = "rgba(238, 134, 29, 1)"; // green
    //  document.querySelector(".contact-info").style.backgroundColor = "rgba(50,230,50, 0.9)"
      break;
    /*case navdiv[4]:
      element.style.backgroundColor = "navy";
      break;
    case navdiv[5]:
      element.style.backgroundColor = "navy";
      break;*/
  }
//  element.style.color = "white";
}

navdiv.forEach((n) => n.addEventListener('mouseout', () => {
  // Remove the hover effect, revert to the original style
  setActiveLink(); // Sets it back to default
 // n.style.color = 'navy';
}))

/*function resetBackgroundColors() {
  navdiv.forEach((n) => {
    n.style.backgroundColor = "";
  });
}*/

// Call the setActiveLink function when the DOM content is loaded
document.addEventListener("DOMContentLoaded", setActiveLink);


// Function to set active link based on current page URL
function setActiveLink() {
  const currentpage = window.location.href;
  var normalizedCurrentPage = currentpage.replace(/index.html$/, ''); 
  normalizedCurrentPage = normalizedCurrentPage.replace(/\/$/, "");
//  console.log(normalizedCurrentPage);

  navlinks.forEach((link) => {
    var normalizedHref = link.href.replace(/index.html$/,"")
    normalizedHref = normalizedHref.replace(/\/$/, "");
    const renormalizedHref = normalizedHref.replace(/.html$/, "");
 //   console.log(normalizedHref);
    if (normalizedHref === normalizedCurrentPage) {
      // Set background color of parent div
  //    link.querySelector(".navdiv").style.backgroundColor = "rgb(5, 30, 69)";
      pagecolor(link.querySelector(".navdiv"))
      link.querySelector(".navdiv").style.color = "white";
        
    } else {
      link.querySelector(".navdiv").style.backgroundColor = "";
      link.querySelector(".navdiv").style.color = "rgb(5, 30, 69)";
    }
  });
}


const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
        slide.style.opacity = 1; // Show the slide by setting opacity to 1
    } else {
        slide.style.opacity = 0; // Hide the slide by setting opacity to 0
    }
  });
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

//nextSlide();

showSlide(currentIndex);

setInterval(nextSlide, 5000);