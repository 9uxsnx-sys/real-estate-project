import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Flip } from 'gsap/Flip';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, Flip);

// Animation constants
export const easings = {
  smooth: 'power3.out',
  bounce: 'back.out(1.7)',
  snappy: 'power2.out',
  dramatic: 'power4.inOut',
};

export const durations = {
  fast: 0.2,
  normal: 0.5,
  slow: 0.8,
  reveal: 1.0,
};

// Stagger delays
export const stagger = {
  fast: 0.05,
  normal: 0.1,
  slow: 0.15,
};

// Hero section animation timeline
export const createHeroTimeline = (elements: {
  bg?: string | Element;
  title?: string | Element;
  search?: string | Element;
}) => {
  const tl = gsap.timeline({ defaults: { ease: easings.smooth } });

  if (elements.bg) {
    tl.fromTo(
      elements.bg,
      { scale: 1.2, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.5 }
    );
  }

  if (elements.title) {
    tl.fromTo(
      elements.title,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      '-=0.8'
    );
  }

  if (elements.search) {
    tl.fromTo(
      elements.search,
      { y: 40, opacity: 0, scale: 0.95 },
      { y: 0, opacity: 1, scale: 1, duration: 0.6, ease: easings.bounce },
      '-=0.4'
    );
  }

  return tl;
};

// Property cards stagger animation
export const animatePropertyCards = (selector: string | Element[]) => {
  return gsap.fromTo(
    selector,
    { y: 60, opacity: 0, rotateX: 10 },
    {
      y: 0,
      opacity: 1,
      rotateX: 0,
      duration: 0.6,
      stagger: {
        amount: 0.8,
        from: 'start',
      },
      ease: easings.smooth,
      scrollTrigger: {
        trigger: selector instanceof Array ? selector[0] : selector,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    }
  );
};

// Section reveal animation
export const revealSection = (selector: string | Element, direction: 'left' | 'right' | 'up' | 'down' = 'up') => {
  const xOffset = direction === 'left' ? -80 : direction === 'right' ? 80 : 0;
  const yOffset = direction === 'up' ? 60 : direction === 'down' ? -60 : 0;

  return gsap.fromTo(
    selector,
    { x: xOffset, y: yOffset, opacity: 0 },
    {
      x: 0,
      y: 0,
      opacity: 1,
      duration: durations.slow,
      ease: easings.smooth,
      scrollTrigger: {
        trigger: selector,
        start: 'top 75%',
        toggleActions: 'play none none none',
      },
    }
  );
};

// Clip-path image reveal
export const revealImage = (selector: string | Element) => {
  return gsap.fromTo(
    selector,
    { clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' },
    {
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
      duration: durations.reveal,
      ease: easings.dramatic,
      scrollTrigger: {
        trigger: selector,
        start: 'top 75%',
        toggleActions: 'play none none none',
      },
    }
  );
};

// Counter animation
export const animateCounter = (element: Element, targetValue: number, duration: number = 2) => {
  const obj = { value: 0 };
  return gsap.to(obj, {
    value: targetValue,
    duration,
    ease: 'power2.out',
    onUpdate: () => {
      if (element) {
        element.textContent = Math.round(obj.value).toString();
      }
    },
  });
};

// 3D tilt effect for cards
export const addTiltEffect = (element: HTMLElement, intensity: number = 20) => {
  const handleMouseMove = (e: MouseEvent) => {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    gsap.to(element, {
      rotateY: ((x - centerX) / centerX) * intensity,
      rotateX: ((centerY - y) / centerY) * intensity,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = () => {
    gsap.to(element, {
      rotateY: 0,
      rotateX: 0,
      duration: 0.5,
      ease: 'power2.out',
    });
  };

  element.addEventListener('mousemove', handleMouseMove);
  element.addEventListener('mouseleave', handleMouseLeave);

  return () => {
    element.removeEventListener('mousemove', handleMouseMove);
    element.removeEventListener('mouseleave', handleMouseLeave);
  };
};

// Parallax scroll effect
export const parallaxScroll = (selector: string | Element, speed: number = 0.5) => {
  return gsap.to(selector, {
    y: () => speed * 100,
    ease: 'none',
    scrollTrigger: {
      trigger: selector,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
  });
};

// Sticky navigation with auto-hide
export const setupSmartNavigation = (navSelector: string = '.nav') => {
  let lastScroll = 0;
  const nav = document.querySelector(navSelector);
  if (!nav) return;

  ScrollTrigger.create({
    start: 'top top',
    end: 'max',
    onUpdate: (self) => {
      const currentScroll = self.scroll();
      if (currentScroll > lastScroll && currentScroll > 100) {
        gsap.to(nav, { y: -100, duration: 0.3, ease: 'power2.inOut' });
      } else {
        gsap.to(nav, { y: 0, duration: 0.3, ease: 'power2.inOut' });
      }
      lastScroll = currentScroll;
    },
  });
};

// Feature icons pop animation
export const animateFeatureIcons = (selector: string | Element[]) => {
  return gsap.fromTo(
    selector,
    { scale: 0, opacity: 0 },
    {
      scale: 1,
      opacity: 1,
      duration: 0.5,
      stagger: stagger.fast,
      ease: 'elastic.out(1, 0.5)',
      scrollTrigger: {
        trigger: selector instanceof Array ? selector[0] : selector,
        start: 'top 75%',
        toggleActions: 'play none none none',
      },
    }
  );
};

// Page transition helpers
export const pageExit = (node: HTMLElement) => {
  return gsap.to(node, {
    y: -30,
    opacity: 0,
    duration: 0.3,
    ease: 'power2.in',
  });
};

export const pageEnter = (node: HTMLElement) => {
  return gsap.fromTo(
    node,
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.4, ease: easings.smooth }
  );
};

// Kill all ScrollTriggers for a component (cleanup)
export const cleanupScrollTriggers = (container?: HTMLElement) => {
  if (container) {
    ScrollTrigger.getAll().forEach((trigger) => {
      if (trigger.vars.trigger && container.contains(trigger.vars.trigger as Element)) {
        trigger.kill();
      }
    });
  } else {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }
};
