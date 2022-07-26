
// Провірка поддержка webp, додавання класу webp або no-webp для HTML 
function isWebp() {
    // Провірка підтримки webp 
    function testWebP(callback) {

        var webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    // Додавання класу _webp або _no-webp для HTML
    testWebP(function (support) {
    
        if (support == true) {
            document.querySelector('body').classList.add('webp');
        } else {
            document.querySelector('body').classList.add('no-webp');
        }
    });
}


isWebp();

//-------------------------------------------------------------

function ibg() {

    let ibg = document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
        if (ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
        }
    }
}

ibg();

//-------------------------------------------------------------

//menu burger
const iconMenu = document.querySelector('.nav__icon');
const menuBody = document.querySelector('.header__nav');
if (iconMenu) {
    
    iconMenu.addEventListener("click", function(e) {
        document.body.classList.toggle('_lock')
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}

//-------------------------------------------------------------


 

//-----------------------------------------------------------------

function allowNumbersOnly(e) {
	var code = (e.which) ? e.which : e.keyCode;
	if (code > 31 && (code < 48 || code > 57)) {
			e.preventDefault();
	}
}

function emailTest(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}


let inputNumber = document.querySelectorAll('.input__number');
let inputEmail = document.querySelector('.input__email');
let letterFormButton = document.querySelector('.contact__button');
let contactInput = document.querySelectorAll('.contact__field');
let letterForm = document.querySelector('.letter__form');
let successSubmit = document.querySelector('.contact__success');

if(inputNumber){
    inputNumber.forEach(item => {
        item.addEventListener('keypress', (e) => {
            allowNumbersOnly(e);
        });
    })
}

if (letterFormButton) {
    letterFormButton.addEventListener('click', (e) => {
        e.preventDefault();


        for (let i = 0; i < contactInput.length; i++){

            contactInput[i].classList.remove('_error');
    
            if (!contactInput[i].value){
                contactInput[i].classList.add('_error');
            }
        }
    
        if (emailTest(inputEmail)) {
            inputEmail.classList.add('_error');
        }

        let check = [...contactInput].every(function(input){
            if(!input.classList.contains('_error') == true){
                return true;
            } else {
                return false;
            }
        })

        if(check == true){
            letterForm.classList.add('_hide');
            successSubmit.classList.add('_active');

            
        }
    
    })

}




const swiper1 = new Swiper('.slider', {
   
    loop: true,
    simulateTouch: false,
    speed: 500,
   
    // Navigation arrows
    navigation: {
      nextEl: '.arrow__right',
      prevEl: '.arrow__left',
    },
  
});


const swiper2 = new Swiper('.exhibitions__items', {
 
  loop: true,
  speed: 500,
  slidesPerView: 4.5,
  spaceBetween: 15,
  grabCursor: true,
  autoplay: {
    delay: 1500,
    stopOnLastSlide: false,
    disableOnInteraction: false
  },

  breakpoints: {
    0:{
        slidesPerView: 1,
    },
    450: {
      slidesPerView: 2,
     
    },
    500: {
      slidesPerView: 2.5,
    },
    576: {
        slidesPerView: 3,
      },
    768: {
        slidesPerView: 3.5,
      },
    992: {
        slidesPerView: 4,
      },
    1200: {
      slidesPerView: 4.5,
    }
  }

});

const swiper3 = new Swiper('.testimonials__items', {
   
    loop: true,
    simulateTouch: false,
    speed: 500,
    slidesPerView: 1,
    spaceBetween: 30,
    // Navigation arrows
    navigation: {
      nextEl: '.arrow2__right',
      prevEl: '.arrow2__left',
    },
  
});

const swiper4 = new Swiper('.artists__slider', {
   
    loop: true,
    speed: 500,
    slidesPerView: 1,
    spaceBetween: 30,
    simulateTouch: false,
    // Navigation arrows
    navigation: {
      nextEl: '.arrow__right',
      prevEl: '.arrow__left',
    },
  
});

//----------------------------------------------------------------------------

function galleryFilter() {
    const buttons = document.querySelectorAll('.propositions__tag__item');
    const cards = document.querySelectorAll('.propositions__item');

    function filter(category, items) {
        items.forEach((item) => {
            const isItemFiltered = !item.classList.contains(category)
            const isShowAll = category.toLowerCase() === 'all'
            if (isItemFiltered && !isShowAll) {
                item.classList.add('anime')
            } else {
                item.classList.remove('hide')
                item.classList.remove('anime')
            }
        })
    }

    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            const currentCategory = button.dataset.filter;
            filter(currentCategory, cards);

            buttons.forEach(button => {
                button.classList.remove('active');
            })
            let item = e.target;
            item.classList.add('active');
        })
    })

 

}

galleryFilter()