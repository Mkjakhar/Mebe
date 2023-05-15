const openNav = () => {
    document.getElementById("Nav").classList.add("openNav");
    document.body.classList.add("overflow-hidden");
};
const hideNav = () => {
    document.getElementById("Nav").classList.remove("openNav");
    document.body.classList.remove("overflow-hidden");
};

// back-to-top
const BackToTop = document.getElementById("BackToTop");
BackToTop.addEventListener("click", function moveToTop() {
    document.documentElement.scrollTop = 0;
});
window.onscroll = () => scrollFunction();

function scrollFunction() {
    if (document.documentElement.scrollTop > 150) {
        BackToTop.style.display = "block";
    } else {
        BackToTop.style.display = "none";
    }
}

// slider
$(".slider").slick({
    dots: false,
    infinite: true,
    speed: 300,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    nextArrow: ".next-arrow",
    prevArrow: ".prev-arrow",
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
});

// second-slider
$(".my-slider").slick({
    dots: false,
    infinite: true,
    speed: 900,
    draggable: true,
    arrows: true,
    fade: true,
    nextArrow: ".nex-arrow",
    prevArrow: ".pre-arrow",
    slidesToShow: 1,
    slidesToScroll: 1,
});

// slider with counter
$(function () {
    $(".custom-slider")
        .on("init", function (event, slick) {
            $(this).append(
                '<div class="slick-counter"><span class="current"></span> / <span class="total"></span></div>'
            );
            $(".current").text(slick.currentSlide + 1);
            $(".total").text(slick.slideCount);
        })
        .slick({
            dots: false,
            infinite: true,
            speed: 900,
            arrows: true,
            fade: true,
            cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
            nextArrow: ".custom-next",
            prevArrow: ".custom-prev",
            slidesToShow: 1,
            slidesToScroll: 1,
            touchThreshold: 100,
            asNavFor: ".we-work-slider",
        })
        .on("beforeChange", function (event, slick, currentSlide, nextSlide) {
            $(".current").text(nextSlide + 01);
        });
});

// we-work-slider
$(".we-work-slider").slick({
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    fade: true,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: ".custom-slider",
});