$(function name(params) {
    // import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js'
    // const swiper = new Swiper(...)
    // const swiper = new Swiper(...);

    var swiper = new Swiper(".swiper", {
        slidesPerView: 3,
        loop: true,
        speed: 400,
        spaceBetween: 70,
        centeredSlides: true,
        slideToClickedSlide: true,
        toggle: true,
        initialSlide:1,
        breakpoints: {
            1200: {
                slidesPerView: 4,
            },

            992: {
                slidesPerView: 3,


            },

            600: {
                slidesPerView: 2,
            },

            320: {
                slidesPerView: 1,
            },
        },
    })
    /*открывать форму*/
    const modalWindow = document.querySelector('.modal');
    const buttonModal = document.querySelector('.main-display__button');
    /*addEventListenerпрослушиватель событий по нажатию левой кнопкой мышы*/
    buttonModal.addEventListener('click', () => {
        modalWindow.classList.add('active'); /*добовляем класс*/
    });

    /*закрытие окна*/ 
    modalWindow.addEventListener('click', (e) => {
        const isModal = e.target.closest('.modal__inner'); /*если клик в любое место кроме .modal__inner то окно закрывается */ 
        if (!isModal) {
            modalWindow.classList.remove('active');
        }
        /*добовляем класс*/
    });


    // var swiper = new Swiper(".swiper", {
    //     slidesPerView: 3,
    //     spaceBetween: 70,
    //     loop: true,
    //     loopedslides: 1,

    //     navigation: {
    //         nextEl: ".swiper-button-next",
    //         prevEl: ".swiper-button-prev",
    //     },

    //     breakpoints: {

    //         1200: {
    //             slidesPerView: 4,
    //         },

    //         992: {
    //             slidesPerView: 3,


    //         },

    //         600: {
    //             slidesPerView: 2,
    //         },

    //         320: {
    //             slidesPerView: 1,
    //         },
    //     },
    // });


    /*	$(".menu a").on("click", function (event) {
    	    event.preventDefault();
    	    var id = $(this).attr('href'),
    	        top = $(id).offset().top;
    	    $('body,html').animate({
    	        scrollTop: top
    	    }, 1500);
    	});

        /*для закрыть меню*/
    /*
              $('.menu__btn').on('click', function () {
                  $('.menu__items').toggleClass('menu__items--active');
              });
              $('.menu__btn').on('click', function () {
                  $('.menu__btn').toggleClass('active');
              });
           
            $('.home__slider').slick({
                dots: true,
                arrows: false,
                 responsive: [


                     {
                         breakpoint: 1150,
                         settings: {
                             slidesToShow: 4,
                         }
                     },
                     {
                         breakpoint: 1000,
                         settings: {
                             slidesToShow: 3,
                         }
                     },
                     {
                         breakpoint: 620,
                         settings: {
                             slidesToShow: 2,
                             slidesToScroll: 2,
                         }
                     },
                 ]
            });
           
           
           */


})