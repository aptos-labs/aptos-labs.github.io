// Appends a build-stamp footer to every page.
//
// The literal "2026-08-16 06:25 UTC (aptos-framework main 7a8b308; tooling aptos-core 6f8f50c1)" is the placeholder that `deploy.sh` substitutes
// with the deploy timestamp + source commit hash. Local mdbook builds leave
// it untouched, signalling that the page wasn't deployed.
(function () {
  function addStamp() {
    var main = document.querySelector('main');
    if (!main || main.querySelector('.build-stamp')) return;
    var p = document.createElement('p');
    p.className = 'build-stamp';
    p.innerHTML = '<em>Build: 2026-08-16 06:25 UTC (aptos-framework main 7a8b308; tooling aptos-core 6f8f50c1)</em>';
    main.appendChild(p);
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addStamp);
  } else {
    addStamp();
  }
})();
