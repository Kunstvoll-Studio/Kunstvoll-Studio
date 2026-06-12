// Gemeinsame UI-Effekte für alle Seiten: Navigationszustand beim Scrollen,
// Lesefortschrittsbalken, "Nach oben"-Button und Einblenden beim Scrollen.
// Muss nach i18n.js eingebunden werden (nutzt t() für Beschriftungen).

// Beobachtet .reveal-Elemente und blendet sie ein, sobald sie ins Bild kommen.
// Dynamisch erzeugte Elemente (Galerie) werden über observeReveal() angemeldet.
const revealObserver = ('IntersectionObserver' in window)
    ? new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' })
    : null;

function observeReveal(el) {
    if (revealObserver) revealObserver.observe(el);
    else el.classList.add('visible'); // Fallback für sehr alte Browser
}

document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('nav');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Lesefortschrittsbalken am oberen Rand
    const progress = document.createElement('div');
    progress.className = 'scroll-progress';
    document.body.appendChild(progress);

    // "Nach oben"-Button; aria-label wird beim Sprachwechsel mit übersetzt
    const topBtn = document.createElement('button');
    topBtn.type = 'button';
    topBtn.className = 'back-to-top';
    topBtn.innerHTML = '&#8593;';
    topBtn.setAttribute('data-i18n-aria', 'backToTop');
    topBtn.setAttribute('aria-label', typeof t === 'function' ? t('backToTop') : 'Nach oben');
    topBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' });
    });
    document.body.appendChild(topBtn);

    function onScroll() {
        const y = window.scrollY;
        if (nav) nav.classList.toggle('scrolled', y > 10);
        topBtn.classList.toggle('visible', y > 400);
        const max = document.documentElement.scrollHeight - window.innerHeight;
        progress.style.width = max > 0 ? (y / max) * 100 + '%' : '0';
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Statisch im HTML vorhandene .reveal-Elemente anmelden
    document.querySelectorAll('.reveal').forEach(observeReveal);
});
