// Appends a build-stamp footer to every page.
//
// The literal "2026-07-17 07:04 UTC (aptos-framework main 0ea08a7; tooling aptos-core 74f4acc1)" is the placeholder that `deploy.sh` substitutes
// with the deploy timestamp + source commit hash. Local mdbook builds leave
// it untouched, signalling that the page wasn't deployed.
(function () {
  function addStamp() {
    var main = document.querySelector('main');
    if (!main || main.querySelector('.build-stamp')) return;
    var p = document.createElement('p');
    p.className = 'build-stamp';
    p.innerHTML = '<em>Build: 2026-07-17 07:04 UTC (aptos-framework main 0ea08a7; tooling aptos-core 74f4acc1)</em>';
    main.appendChild(p);
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addStamp);
  } else {
    addStamp();
  }
})();
