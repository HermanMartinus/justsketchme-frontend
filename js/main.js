var headerOffset = 65;
var activeItem = 'home';
// When the user clicks on the button, scroll to the top of the document

function navScrollTo(target) {
    target
    window.scrollTo({
        left: 0,
        top: $('#' + target).offset().top - headerOffset,
        behavior: 'smooth'
    });

    setActiveLink(target);
}

function setActiveLink(activeItem) {
    $(".nav-item").removeClass("active");
    $("#" + activeItem + "-link").addClass("active");
}

// function onScroll() {

//     if (this.isAnyPartOfElementInViewport(this.scrollSlide01.nativeElement)) {
//         this.activeSlide = this.slides[0];
//     }
// }

function isAnyPartOfElementInViewport(el) {

    var rect = el.getBoundingClientRect();
    // DOMRect { x: 8, y: 8, width: 100, height: 100, top: 8, right: 108, bottom: 108, left: 8 }
    var windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    var vertInView = (rect.top <= windowHeight) && ((rect.top) >= -50);

    return (vertInView);
}

setActiveLink("home");
// window.addEventListener('scroll', this.onScroll, true);