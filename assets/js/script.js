window.onload = () => document.getElementsByClassName('preloader')[0].classList.add('loaded');



butter.init();



var parallaxElements = $('.parallax'),
  parallaxQuantity = parallaxElements.length

$(window).on('scroll', function () {
  window.requestAnimationFrame(function () {
    for (var i = 0; i < parallaxQuantity; i++) {
      var currentElement = parallaxElements.eq(i)
      var scrolled = $(window).scrollTop()
      
      console.log(1 + (scrolled * 0.03));

      currentElement.css({
        transform: 'translate3d(0,' + scrolled * -0.3 + 'px, '+scrolled+'px) scale('+(1 + (scrolled * 0.0004))+')',
      })
    }
  })
})