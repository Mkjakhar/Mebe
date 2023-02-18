const openNav = () => {
    document.getElementById("Nav").classList.add("openNav")
    document.body.classList.add("overflow-hidden")
}
const hideNav = () => {
    document.getElementById("Nav").classList.remove("openNav")
    document.body.classList.remove("overflow-hidden")
}
// back-to-top
const BackToTop = document.getElementById('BackToTop')
BackToTop.addEventListener('click', function moveToTop() {
    document.documentElement.scrollTop = 0
})
// slider
$('.slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    arrows: true,
    nextArrow: ".next-arrow",
    prevArrow: ".prev-arrow",
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
// second-slider

$(".my-slider").slick({
    dots: false,
    infinite: true,
    speed: 300,
    arrows: true,
    nextArrow: ".nex-arrow",
    prevArrow: ".pre-arrow",
    slidesToShow: 1,
    slidesToScroll: 1,
});
// slider with counter
$(function () {
    $('.custom-slider').on('init', function (event, slick) {
            $(this).append('<div class="slick-counter"><span class="current"></span> / <span class="total"></span></div>');
            $('.current').text(slick.currentSlide + 01);
            $('.total').text(slick.slideCount);
        })
        .slick({
            dots: false,
            infinite: true,
            speed: 300,
            arrows: true,
            nextArrow: ".custom-next",
            prevArrow: ".custom-prev",
            slidesToShow: 1,
            slidesToScroll: 1,
        })
        .on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            $('.current').text(nextSlide + 01);
        });
});