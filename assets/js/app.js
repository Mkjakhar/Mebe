const openNav = () => {
    document.getElementById("Nav").classList.add("openNav")
    document.body.classList.add("overflow-hidden")
}
const hideNav = () => {
    document.getElementById("Nav").classList.remove("openNav")
    document.body.classList.remove("overflow-hidden")
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