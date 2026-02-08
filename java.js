// Use a pre-built helper or GSAP Timeline
let loop = gsap.timeline({repeat: -1});
loop.to("#gallery img", {xPercent: -100, duration: 2, ease: "none"}); // Moves images left
// Add logic to repeat the first image to the end for seamlessness

