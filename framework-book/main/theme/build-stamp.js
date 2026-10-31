// Appends a build-stamp footer to every page.
//
// The literal "2026-10-31 06:23 UTC (aptos-framework main 0841071; tooling aptos-core d7aab37c)" is the placeholder that `deploy.sh` substitutes
// with the deploy timestamp + source commit hash. Local mdbook builds leave
// it untouched, signalling that the page wasn't deployed.
(function () {
  function addStamp() {
    var main = document.querySelector('main');
    if (!main || main.querySelector('.build-stamp')) return;
    var p = document.createElement('p');
    p.className = 'build-stamp';
    p.innerHTML = '<em>Build: 2026-10-31 06:23 UTC (aptos-framework main 0841071; tooling aptos-core d7aab37c)</em>';
    main.appendChild(p);
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addStamp);
  } else {
    addStamp();
  }
})();
