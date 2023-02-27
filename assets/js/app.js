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
    speed: 900,
    draggable: true,
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
            speed: 900,
            arrows: true,
            fade: true,
            cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
            nextArrow: ".custom-next",
            prevArrow: ".custom-prev",
            slidesToShow: 1,
            slidesToScroll: 1,
            touchThreshold: 100
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
        img: "./assets/img/webp/0018.webp"
    },
    {
        img: "./assets/img/webp/0019.webp"
    },
    {
        img: "./assets/img/webp/0020.webp"
    },
    {
        img: "./assets/img/webp/0021.webp"
    },
    {
        img: "./assets/img/webp/0022.webp"
    },
    {
        img: "./assets/img/webp/0023.webp"
    },
    {
        img: "./assets/img/webp/0024.webp"
    },
    {
        img: "./assets/img/webp/0025.webp"
    },
    {
        img: "./assets/img/webp/0026.webp"
    },
    {
        img: "./assets/img/webp/0027.webp"
    },
    {
        img: "./assets/img/webp/0028.webp"
    },
    {
        img: "./assets/img/webp/0029.webp"
    },
    {
        img: "./assets/img/webp/0030.webp"
    },
    {
        img: "./assets/img/webp/0031.webp"
    },
    {
        img: "./assets/img/webp/0032.webp"
    },
    {
        img: "./assets/img/webp/0033.webp"
    },
    {
        img: "./assets/img/webp/0034.webp"
    },
    {
        img: "./assets/img/webp/0035.webp"
    },
    {
        img: "./assets/img/webp/0036.webp"
    },
    {
        img: "./assets/img/webp/0037.webp"
    },
    {
        img: "./assets/img/webp/0038.webp"
    },
    {
        img: "./assets/img/webp/0039.webp"
    },
    {
        img: "./assets/img/webp/0040.webp"
    },
    {
        img: "./assets/img/webp/0041.webp"
    },
    {
        img: "./assets/img/webp/0042.webp"
    },
    {
        img: "./assets/img/webp/0043.webp"
    },
    {
        img: "./assets/img/webp/0044.webp"
    },
    {
        img: "./assets/img/webp/0045.webp"
    },
    {
        img: "./assets/img/webp/0046.webp"
    },
    {
        img: "./assets/img/webp/0047.webp"
    },
    {
        img: "./assets/img/webp/0048.webp"
    },
    {
        img: "./assets/img/webp/0049.webp"
    },
    {
        img: "./assets/img/webp/0050.webp"
    },
    {
        img: "./assets/img/webp/0051.webp"
    },
    {
        img: "./assets/img/webp/0052.webp"
    },
    {
        img: "./assets/img/webp/0053.webp"
    },
    {
        img: "./assets/img/webp/0054.webp"
    },
    {
        img: "./assets/img/webp/0055.webp"
    },
    {
        img: "./assets/img/webp/0056.webp"
    },
    {
        img: "./assets/img/webp/0057.webp"
    },
    {
        img: "./assets/img/webp/0058.webp"
    },
    {
        img: "./assets/img/webp/0059.webp"
    },
    {
        img: "./assets/img/webp/0060.webp"
    }, {
        img: "./assets/img/webp/0061.webp"
    },
    {
        img: "./assets/img/webp/0062.webp"
    },
    {
        img: "./assets/img/webp/0063.webp"
    },
    {
        img: "./assets/img/webp/0064.webp"
    },
    {
        img: "./assets/img/webp/0065.webp"
    },
    {
        img: "./assets/img/webp/0066.webp"
    },
    {
        img: "./assets/img/webp/0067.webp"
    },
    {
        img: "./assets/img/webp/0068.webp"
    },
    {
        img: "./assets/img/webp/0069.webp"
    },
    {
        img: "./assets/img/webp/0070.webp"
    },
    {
        img: "./assets/img/webp/0071.webp"
    },
    {
        img: "./assets/img/webp/0072.webp"
    },
    {
        img: "./assets/img/webp/0073.webp"
    },
    {
        img: "./assets/img/webp/0074.webp"
    },
    {
        img: "./assets/img/webp/0075.webp"
    },
    {
        img: "./assets/img/webp/0076.webp"
    },
    {
        img: "./assets/img/webp/0077.webp"
    },
    {
        img: "./assets/img/webp/0078.webp"
    },
    {
        img: "./assets/img/webp/0079.webp"
    },
    {
        img: "./assets/img/webp/0080.webp"
    }, {
        img: "./assets/img/webp/0081.webp"
    },
    {
        img: "./assets/img/webp/0082.webp"
    },
    {
        img: "./assets/img/webp/0083.webp"
    },
    {
        img: "./assets/img/webp/0084.webp"
    },
    {
        img: "./assets/img/webp/0085.webp"
    },
    {
        img: "./assets/img/webp/0086.webp"
    },
    {
        img: "./assets/img/webp/0087.webp"
    },
    {
        img: "./assets/img/webp/0088.webp"
    },
    {
        img: "./assets/img/webp/0089.webp"
    },
    {
        img: "./assets/img/webp/0090.webp"
    },
    {
        img: "./assets/img/webp/0091.webp"
    },
    {
        img: "./assets/img/webp/0092.webp"
    },
    {
        img: "./assets/img/webp/0093.webp"
    },
    {
        img: "./assets/img/webp/0094.webp"
    },
    {
        img: "./assets/img/webp/0095.webp"
    },
    {
        img: "./assets/img/webp/0096.webp"
    },
    {
        img: "./assets/img/webp/0097.webp"
    },
    {
        img: "./assets/img/webp/0098.webp"
    },
    {
        img: "./assets/img/webp/0099.webp"
    },
    {
        img: "./assets/img/webp/0100.webp"
    },
    {
        img: "./assets/img/webp/0101.webp"
    },
    {
        img: "./assets/img/webp/0102.webp"
    },
    {
        img: "./assets/img/webp/0103.webp"
    },
    {
        img: "./assets/img/webp/0104.webp"
    },
    {
        img: "./assets/img/webp/0105.webp"
    },
    {
        img: "./assets/img/webp/0106.webp"
    },
    {
        img: "./assets/img/webp/0107.webp"
    },
    {
        img: "./assets/img/webp/0108.webp"
    },
    {
        img: "./assets/img/webp/0109.webp"
    },
    {
        img: "./assets/img/webp/0110.webp"
    },
    {
        img: "./assets/img/webp/0111.webp"
    },
    {
        img: "./assets/img/webp/0112.webp"
    },
    {
        img: "./assets/img/webp/0113.webp"
    },
    {
        img: "./assets/img/webp/0114.webp"
    },
    {
        img: "./assets/img/webp/0115.webp"
    },
    {
        img: "./assets/img/webp/0116.webp"
    },
    {
        img: "./assets/img/webp/0117.webp"
    },
    {
        img: "./assets/img/webp/0118.webp"
    },
    {
        img: "./assets/img/webp/0119.webp"
    },
    {
        img: "./assets/img/webp/0120.webp"
    },
    {
        img: "./assets/img/webp/0121.webp"
    },
    {
        img: "./assets/img/webp/0122.webp"
    },
    {
        img: "./assets/img/webp/0123.webp"
    },
    {
        img: "./assets/img/webp/0124.webp"
    },
    {
        img: "./assets/img/webp/0125.webp"
    },
    {
        img: "./assets/img/webp/0126.webp"
    },
    {
        img: "./assets/img/webp/0127.webp"
    },
    {
        img: "./assets/img/webp/0128.webp"
    },
    {
        img: "./assets/img/webp/0129.webp"
    },
    {
        img: "./assets/img/webp/0130.webp"
    },
    {
        img: "./assets/img/webp/0131.webp"
    },
    {
        img: "./assets/img/webp/0132.webp"
    },
    {
        img: "./assets/img/webp/0133.webp"
    },
    {
        img: "./assets/img/webp/0134.webp"
    },
    {
        img: "./assets/img/webp/0135.webp"
    },
    {
        img: "./assets/img/webp/0136.webp"
    },
    {
        img: "./assets/img/webp/0137.webp"
    },
    {
        img: "./assets/img/webp/0138.webp"
    },
    {
        img: "./assets/img/webp/0139.webp"
    },
    {
        img: "./assets/img/webp/0140.webp"
    },
    {
        img: "./assets/img/webp/0141.webp"
    },
    {
        img: "./assets/img/webp/0142.webp"
    },
    {
        img: "./assets/img/webp/0143.webp"
    },
    {
        img: "./assets/img/webp/0144.webp"
    },
    {
        img: "./assets/img/webp/0145.webp"
    },
    {
        img: "./assets/img/webp/0146.webp"
    },
    {
        img: "./assets/img/webp/0147.webp"
    },
    {
        img: "./assets/img/webp/0148.webp"
    },
    {
        img: "./assets/img/webp/0149.webp"
    },
    {
        img: "./assets/img/webp/0150.webp"
    },
    {
        img: "./assets/img/webp/0151.webp"
    },
    {
        img: "./assets/img/webp/0152.webp"
    },
    {
        img: "./assets/img/webp/0153.webp"
    },
    {
        img: "./assets/img/webp/0154.webp"
    },
    {
        img: "./assets/img/webp/0155.webp"
    },
    {
        img: "./assets/img/webp/0156.webp"
    },
    {
        img: "./assets/img/webp/0157.webp"
    },
    {
        img: "./assets/img/webp/0158.webp"
    },
    {
        img: "./assets/img/webp/0159.webp"
    },
    {
        img: "./assets/img/webp/0160.webp"
    }, {
        img: "./assets/img/webp/0161.webp"
    },
    {
        img: "./assets/img/webp/0162.webp"
    },
    {
        img: "./assets/img/webp/0163.webp"
    },
    {
        img: "./assets/img/webp/0164.webp"
    },
    {
        img: "./assets/img/webp/0165.webp"
    },
    {
        img: "./assets/img/webp/0166.webp"
    },
    {
        img: "./assets/img/webp/0167.webp"
    },
    {
        img: "./assets/img/webp/0168.webp"
    },
    {
        img: "./assets/img/webp/0169.webp"
    },
    {
        img: "./assets/img/webp/0170.webp"
    },
    {
        img: "./assets/img/webp/0171.webp"
    },
    {
        img: "./assets/img/webp/0172.webp"
    },
    {
        img: "./assets/img/webp/0173.webp"
    },
    {
        img: "./assets/img/webp/0174.webp"
    },
    {
        img: "./assets/img/webp/0175.webp"
    },
    {
        img: "./assets/img/webp/0176.webp"
    },
    {
        img: "./assets/img/webp/0177.webp"
    },
    {
        img: "./assets/img/webp/0178.webp"
    },
    {
        img: "./assets/img/webp/0179.webp"
    },
    {
        img: "./assets/img/webp/0180.webp"
    }, {
        img: "./assets/img/webp/0181.webp"
    },
    {
        img: "./assets/img/webp/0182.webp"
    },
    {
        img: "./assets/img/webp/0183.webp"
    },
    {
        img: "./assets/img/webp/0184.webp"
    },
    {
        img: "./assets/img/webp/0185.webp"
    },
    {
        img: "./assets/img/webp/0186.webp"
    },
    {
        img: "./assets/img/webp/0187.webp"
    },
    {
        img: "./assets/img/webp/0188.webp"
    },
    {
        img: "./assets/img/webp/0189.webp"
    },
    {
        img: "./assets/img/webp/0190.webp"
    },
    {
        img: "./assets/img/webp/0191.webp"
    },
    {
        img: "./assets/img/webp/0192.webp"
    },
    {
        img: "./assets/img/webp/0193.webp"
    },
    {
        img: "./assets/img/webp/0194.webp"
    },
    {
        img: "./assets/img/webp/0195.webp"
    },
    {
        img: "./assets/img/webp/0196.webp"
    },
    {
        img: "./assets/img/webp/0197.webp"
    },
    {
        img: "./assets/img/webp/0198.webp"
    },
    {
        img: "./assets/img/webp/0199.webp"
    },
    {
        img: "./assets/img/webp/0200.webp"
    },
];
let Images = users
    .map((element) => {
        return `<div class="panel"><img class="w-100" src=${element.img} alt="img"></div>`;
    })
    .join("");
const details = () => {
    ImgElem.innerHTML = Images;
};
details();

// slider
$(".partners-slider").slick({
    dots: false,
    infinite: true,
    speed: 0,
    infinite: true,
    arrows: false,
    autoplaySpeed: 200,
    cssEase: 'linear',
    autoplay: true,
    fade: true,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
})
// .on('wheel', (function (e) {
//     e.preventDefault();

//     if (e.originalEvent.deltaY < 0) {
//         $(this).slick('slickPrev');
//     } else {
//         $(this).slick('slickNext');
//     }
// }));
// gsape
// gsap.registerPlugin(ScrollTrigger);

// let sections = gsap.utils.toArray(".panel");

// gsap.to(sections, {
//     xPercent: -100 * (sections.length - 1),
//     x: 0,
//     ease: "none",
//     scrollTrigger: {
//         trigger: ".partners-conatiner",
//         pin: true,
//         scrub: 1,
//         snap: 1 / (sections.length - 1),
//         end: () => "+=" + document.querySelector(".partners-conatiner").offsetWidth
//     }
// });