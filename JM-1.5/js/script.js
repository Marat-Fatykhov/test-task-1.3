const minMediaQuery = window.matchMedia('(min-width: 768px)');
let swiper

function swiperInit() {
    swiper = new Swiper('.swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 16,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
};

// function checkSwiper(e) {
//     if(e.matches) {
//         swiperInit();
//     } else if(swiper !== undefined) {
//         swiper.destroy();
//     } 
// }

function checkSwiper(e) {
        if(!e.matches) {
            swiperInit();
        } else if(swiper !== undefined) {
            swiper.destroy();
        } 
    }

minMediaQuery.addEventListener('change', checkSwiper);
checkSwiper(minMediaQuery);
