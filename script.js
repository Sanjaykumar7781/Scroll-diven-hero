gsap.registerPlugin(ScrollTrigger);

const intro = gsap.timeline({ defaults: { ease: "power3.out" } });

intro.from(".nav", { y: -25, opacity: 0, duration: .8 })
  .from(".eyebrow", { y: 20, opacity: 0, duration: .55 }, "-=.45")
  .from(".headline span", {
    yPercent: 110, opacity: 0, duration: .9, stagger: .12
  }, "-=.25")
  .from(".subcopy", { y: 20, opacity: 0, duration: .6 }, "-=.5")
  .from(".hero-object", { scale: .82, opacity: 0, rotate: -5, duration: 1.15 }, "-=.55")
  .from(".stat", { y: 25, opacity: 0, duration: .6, stagger: .12 }, "-=.55")
  .from(".scroll-hint", { opacity: 0, duration: .5 }, "-=.25");

const object = document.querySelector(".hero-object");
const shadow = document.querySelector(".object-shadow");

gsap.to(object, {
  y: -170,
  x: 70,
  rotation: 12,
  scale: .72,
  ease: "none",
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: 1.1
  }
});

gsap.to(shadow, {
  x: 100,
  scale: .62,
  opacity: .25,
  ease: "none",
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: 1.1
  }
});

gsap.to(".orb-a", {
  x: 180, y: -140, scale: 1.8, ease: "none",
  scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 1.5 }
});
gsap.to(".orb-b", {
  x: -120, y: 100, scale: .5, ease: "none",
  scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 1.5 }
});

gsap.to(".line-1", { x: 180, scaleX: .5, ease:"none",
  scrollTrigger:{trigger:".hero",start:"top top",end:"bottom top",scrub:1.3}});
gsap.to(".line-2", { x: -130, scaleX: 1.4, ease:"none",
  scrollTrigger:{trigger:".hero",start:"top top",end:"bottom top",scrub:1.3}});

gsap.from(".story-inner > *", {
  y: 45, opacity: 0, stagger: .12, duration: .8, ease: "power3.out",
  scrollTrigger: { trigger: ".story", start: "top 70%" }
});

window.addEventListener("resize", () => ScrollTrigger.refresh());
