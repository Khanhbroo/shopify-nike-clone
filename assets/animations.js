// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", (event) => {
  // Register the ScrollTrigger plugin with GSAP
  gsap.registerPlugin(ScrollTrigger);

  // 1. Initial Page Load Animations
  // Fade in the header smoothly
  gsap.from(".header-section-wrapper", {
    y: -50,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  });

  // Hero Banner Animations
  const heroTl = gsap.timeline();
  heroTl.from(".hero-content .hero-title", {
    y: 30,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
    delay: 0.2
  })
  .from(".hero-content .hero-subtitle", {
    y: 20,
    opacity: 0,
    duration: 0.6,
    ease: "power2.out"
  }, "-=0.4")
  .from(".hero-content .hero-btn", {
    y: 20,
    opacity: 0,
    duration: 0.5,
    ease: "power2.out"
  }, "-=0.3");

  // 2. Scroll Animations for Sections

  // Featured Images Section
  gsap.from(".image-card", {
    scrollTrigger: {
      trigger: ".featured-images",
      start: "top 80%", // Animation starts when top of container hits 80% of viewport
      toggleActions: "play none none reverse"
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2, // Animate each card with a slight delay
    ease: "power2.out"
  });

  // Additional Info CTA Block
  gsap.from(".cta-wrapper", {
    scrollTrigger: {
      trigger: ".additional-info-cta",
      start: "top 85%",
      toggleActions: "play none none reverse"
    },
    scale: 0.95,
    opacity: 0,
    duration: 0.8,
    ease: "back.out(1.7)"
  });

  // Featured Products Section
  gsap.from(".product-card", {
    scrollTrigger: {
      trigger: ".products-section",
      start: "top 85%",
      toggleActions: "play none none reverse"
    },
    y: 40,
    opacity: 0,
    duration: 0.6,
    stagger: 0.15,
    ease: "power2.out"
  });

  // Featured Collections List Section
  gsap.from(".collection-card", {
    scrollTrigger: {
      trigger: ".collections-section",
      start: "top 80%",
      toggleActions: "play none none reverse"
    },
    y: 40,
    opacity: 0,
    duration: 0.6,
    stagger: 0.2,
    ease: "power2.out"
  });

  // Footer Animation
  gsap.from(".footer-column", {
    scrollTrigger: {
      trigger: ".footer-main",
      start: "top 90%",
      toggleActions: "play none none reverse"
    },
    y: 30,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: "power2.out"
  });

  // 3. Collection Page specific animations (if applicable)
  if (document.querySelector(".collection-page-sec")) {
    gsap.from(".collection-header-inner", {
      y: -20,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out"
    });
  }

  // 4. Cart Page specific animations (if applicable)
  if (document.querySelector(".cart-sec")) {
    gsap.from(".cart-title", {
      x: -30,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out"
    });
    
    gsap.from(".cart-item", {
      x: -20,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: "power2.out",
      delay: 0.3
    });

    gsap.from(".cart-summary", {
      y: 30,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
      delay: 0.5
    });
  }
});
