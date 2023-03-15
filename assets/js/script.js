////////////////////////////////////////////////////////
// Preloader
////////////////////////////////////////////////////////
window.onload = () => {
    document.getElementsByClassName('preloader')[0].classList.add('loaded');
}


$('.carousel').slick({
    arrows: false,
    dots: false,
    infinite: false,
    edgeFriction: 1,
    swipeToSlide: true,
    variableWidth: true,
    slidesToShow: 6
});

    
window.onscroll = () => {
        let markers = document.querySelectorAll('[menu-marker]');
        let nearest = {
                y: -Infinity,
                i: 0
            }

        for (let i = 0; i < markers.length; i++) {
            let markerY = Math.round(markers[i].getBoundingClientRect().y);
            if (markerY <= 0 && nearest.y < markerY) {
                nearest.y = markerY;
                nearest.i = i;
            }
        }

        let bg = markers[nearest.i].getAttribute('menu-bg'),
            color = markers[nearest.i].getAttribute('menu-color'),
            padding = '10px 0';

        if (window.pageYOffset == 0) {
            color = 'white';
            bg = 'rgba(0,0,0,0)';
            padding = '3.5vh 0';
        }

        document.querySelector('nav').style.background = bg;
        document.querySelector('nav').style.color = color;
        document.querySelector('nav').style.padding = padding;

    }



////////////////////////////////////////////////////////
// Parallax
////////////////////////////////////////////////////////
const parallaxList = document.querySelectorAll('.parallax')

window.addEventListener('scroll', () => {
    window.requestAnimationFrame(() => {
        for (let i = 0; i < parallaxList.length; i++) {
            let parallax = parallaxList[i]
      
            let y = window.pageYOffset * -.3,
                z = window.pageYOffset,
                scale = window.pageYOffset * .0004 + 1

            parallax.style.transform = `
                translate3d(0, ${y}px, ${z}px) 
                scale(${scale})`
        }
    })
});
