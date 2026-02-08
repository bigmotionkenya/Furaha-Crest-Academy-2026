// Hero Slideshow Logic
const track = document.querySelector(".hero-track");

if (track) {
    const images = Array.from(track.children);

    // Duplicate images for seamless loop
    images.forEach(img => track.appendChild(img.cloneNode(true)));

    let loopWidth;

    function calculateWidth() {
      loopWidth = track.scrollWidth / 2;
    }

    window.addEventListener("load", () => {
      calculateWidth();

      // GSAP base scroll timeline
      gsap.to(track, {
        x: () => -loopWidth,
        duration: 50,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize(x => parseFloat(x) % loopWidth)
        }
      });
    });

    window.addEventListener("resize", calculateWidth);
}

// Scroll Reveal Logic
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target); // Animate only once
        }
    });
}, {
    threshold: 0.15, // Trigger when 15% of the element is visible
    rootMargin: "0px 0px -50px 0px"
});

revealElements.forEach(el => revealObserver.observe(el));
let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})


