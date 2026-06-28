// Appends a build-stamp footer to every page.
//
// The literal "2026-06-28 07:38 UTC (aptos-core f3e3806f move-book main tip)" is the placeholder that `deploy.sh` substitutes
// with the deploy timestamp + source commit hash. Local mdbook builds leave
// it untouched, signalling that the page wasn't deployed.
(function () {
  function addStamp() {
    var main = document.querySelector('main');
    if (!main || main.querySelector('.build-stamp')) return;
    var p = document.createElement('p');
    p.className = 'build-stamp';
    p.innerHTML = '<em>Build: 2026-06-28 07:38 UTC (aptos-core f3e3806f move-book main tip)</em>';
    main.appendChild(p);
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addStamp);
  } else {
    addStamp();
  }
})();
