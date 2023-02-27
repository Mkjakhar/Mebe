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
window.onscroll = () => scrollFunction();

function scrollFunction() {
    if (document.documentElement.scrollTop > 150) {
        BackToTop.style.display = "block";
    } else {
        BackToTop.style.display = "none";
    }
}
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
$(".partners-slider").slick({
    dots: false,
    infinite: true,
    speed: 600,
    arrows: false,
    autoplay: true,
    pauseOnHover: false,
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



// slide-animation
const ImgElem = document.getElementById("Slides");
// map cards
const users = [{
        img: "./assets/img/webp/0001.webp"
    },
    {
        img: "./assets/img/webp/0002.webp"
    },
    {
        img: "./assets/img/webp/0003.webp"
    },
    {
        img: "./assets/img/webp/0004.webp"
    },
    {
        img: "./assets/img/webp/0005.webp"
    },
    {
        img: "./assets/img/webp/0006.webp"
    },
    {
        img: "./assets/img/webp/0007.webp"
    },
    {
        img: "./assets/img/webp/0008.webp"
    },
    {
        img: "./assets/img/webp/0009.webp"
    },
    {
        img: "./assets/img/webp/0010.webp"
    },
    {
        img: "./assets/img/webp/0011.webp"
    },
    {
        img: "./assets/img/webp/0012.webp"
    },
    {
        img: "./assets/img/webp/0013.webp"
    },
    {
        img: "./assets/img/webp/0014.webp"
    },
    {
        img: "./assets/img/webp/0015.webp"
    },
    {
        img: "./assets/img/webp/0016.webp"
    },
    {
        img: "./assets/img/webp/0017.webp"
    },
    {
        img: "./assets/img/webp/0020.webp"
    },

];
let Images = users
    .map((element) => {
        return `<div class="panel"><img src=${element.img} alt="img"></div>`;
    })
    .join("");
const details = () => {
    ImgElem.innerHTML = Images;
};
details();

// gsape
gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".panel");

gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    x: 0,
    ease: "none",
    scrollTrigger: {
        trigger: ".partners-conatiner",
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + document.querySelector(".partners-conatiner").offsetWidth
    }
});