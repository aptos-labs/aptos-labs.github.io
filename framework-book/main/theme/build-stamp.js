// Appends a build-stamp footer to every page.
//
// The literal "2026-06-05 07:48 UTC (aptos-framework main 0a50d24; tooling aptos-core e3f1cd87)" is the placeholder that `deploy.sh` substitutes
// with the deploy timestamp + source commit hash. Local mdbook builds leave
// it untouched, signalling that the page wasn't deployed.
(function () {
  function addStamp() {
    var main = document.querySelector('main');
    if (!main || main.querySelector('.build-stamp')) return;
    var p = document.createElement('p');
    p.className = 'build-stamp';
    p.innerHTML = '<em>Build: 2026-06-05 07:48 UTC (aptos-framework main 0a50d24; tooling aptos-core e3f1cd87)</em>';
    main.appendChild(p);
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addStamp);
  } else {
    addStamp();
  }
})();
