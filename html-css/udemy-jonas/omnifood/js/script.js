/* Mobile navigation */

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", () => headerEl.classList.toggle("nav-open"));

/* Scrolling animation */

const allLinks = document.querySelectorAll('a:link');
allLinks.forEach(link => link.addEventListener('click', event => {
    event.preventDefault();
    const href = link.getAttribute('href');
    if (href === '#') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (href !== '#' && href.startsWith('#')) {
        const sectionEl = document.querySelector(href);
        sectionEl.scrollIntoView({ behavior: 'smooth' });
    }

    if (link.classList.contains('main-nav-link')) {
        headerEl.classList.toggle("nav-open")
    }
}));

/* Sticky navigation */

const sectionHeroEl = document.querySelector('.section-hero');
const obs = new IntersectionObserver(entries => {
    const entry = entries[0];
    if (!entry.isIntersecting) {
        document.body.classList.add('sticky');
    } else if (entry.isIntersecting) {
        document.body.classList.remove('sticky');
    }
}, {
    root: null,
    threshold: 0,
    rootMargin: '-80px',
})
obs.observe(sectionHeroEl)
