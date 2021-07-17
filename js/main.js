document.addEventListener('DOMContentLoaded', () => {
    const elementosCarousel = document.querySelectorAll ('.carousel');
    M.Carousel.init(elementosCarousel, {
        duration: 250,
        dist:-80,
        shift:5,
        paddit: 5,
        //numVisible:5,
        indicators: true,
        noWrap: true
    });
});