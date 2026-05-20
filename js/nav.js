/**
 * Menu mobile: toggle, fechar ao navegar e com Escape.
 */
(function initSiteNav() {
    const menuToggle = document.getElementById('menu-toggle');
    const siteNav = document.getElementById('site-nav');
    if (!menuToggle || !siteNav) return;

    function setMenuOpen(open) {
        siteNav.classList.toggle('is-open', open);
        menuToggle.setAttribute('aria-expanded', String(open));
    }

    menuToggle.addEventListener('click', () => {
        setMenuOpen(!siteNav.classList.contains('is-open'));
    });

    siteNav.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => setMenuOpen(false));
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && siteNav.classList.contains('is-open')) {
            setMenuOpen(false);
            menuToggle.focus();
        }
    });
})();
