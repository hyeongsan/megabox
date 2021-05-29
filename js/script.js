
// 배너 이미지 슬라이드 //
const swiper = new Swiper('.swiper-container',{
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 5000,
    },
});

//영화차트 이미지 슬라이드//
const mySwiper = new Swiper('.swiper-container2',{
    slidesPerView: 4,
    spaceBetween: 24,
    mousewheel: {
        invert: true,
    },
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
    autoplay: {
        delay: 6000,
    },
    breakpoints: {
        600: {
            slidesPerView: 1.4,
            spaceBetween: 24
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 24
        },
        960: {
            slidesPerView: 3,
            spaceBetween: 24
        }
    }
});

// 영화 차트 탭 메뉴 //

const movBtn = $(".movie_title > ul > li");    
const movCont = $(".movie_chart > div");  

movCont.hide().eq(0).show();

movBtn.click(function(e){
    e.preventDefault();
    const target = $(this);         
    const index = target.index();  
    movBtn.removeClass("active");   
    target.addClass("active");    
    movCont.css("display","none");
    movCont.eq(index).css("display","block");
});