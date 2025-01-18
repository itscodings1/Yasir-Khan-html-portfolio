const hamburgerMenu = document.querySelector(".hamburger-menu");
const centerNav = document.querySelector(".center-nav");

hamburgerMenu.addEventListener("click", () => {
    centerNav.classList.toggle("active");
});


// hero section start here 

var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 300 - Math.random() * 100;

    if (this.isDeleting) {
        delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function() {
        that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-rotate');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtRotate(elements[i], JSON.parse(toRotate), period);
        }
    }
};


// achievement section start 

document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll('.achievement-number');
    const speed = 200; // Adjust speed as desired

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const increment = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 10); // Adjust delay for speed
            } else {
                counter.innerText = target;
            }
        };

        updateCount();
    });
});

// testimonials section start here 

document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.slider-button.prev');
    const nextButton = document.querySelector('.slider-button.next');
    let currentIndex = 0;
  
    function updateSlider() {
      const slideWidth = slides[0].clientWidth;
      slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }
  
    prevButton.addEventListener('click', () => {
      currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
      updateSlider();
    });
  
    nextButton.addEventListener('click', () => {
      currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
      updateSlider();
    });
  
    // Adjust slider on window resize
    window.addEventListener('resize', updateSlider);
  });
  

//   faq's section start here.... 

document.addEventListener('DOMContentLoaded', () => {
    const faqs = document.querySelectorAll('.faq');
  
    faqs.forEach(faq => {
      const question = faq.querySelector('.faq-question');
      question.addEventListener('click', () => {
        faq.classList.toggle('open');
  
        // Close other FAQs
        faqs.forEach(otherFaq => {
          if (otherFaq !== faq) {
            otherFaq.classList.remove('open');
          }
        });
      });
    });
  });
  



//   page scroll up button start here   

  // Scroll-Up Button Logic
  const scrollUpBtn = document.getElementById('scrollUpBtn');

  // Show button when user scrolls down
  window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      scrollUpBtn.style.display = "block";
    } else {
      scrollUpBtn.style.display = "none";
    }
  };

  // Scroll to top when button is clicked
  scrollUpBtn.onclick = function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
