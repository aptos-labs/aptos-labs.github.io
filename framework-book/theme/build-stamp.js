// Appends a build-stamp footer to every page.
//
// The literal "2026-08-12 06:45 UTC (aptos-framework main 745df2e; tooling aptos-core f3dbdda8)" is the placeholder that `deploy.sh` substitutes
// with the deploy timestamp + source commit hash. Local mdbook builds leave
// it untouched, signalling that the page wasn't deployed.
(function () {
  function addStamp() {
    var main = document.querySelector('main');
    if (!main || main.querySelector('.build-stamp')) return;
    var p = document.createElement('p');
    p.className = 'build-stamp';
    p.innerHTML = '<em>Build: 2026-08-12 06:45 UTC (aptos-framework main 745df2e; tooling aptos-core f3dbdda8)</em>';
    main.appendChild(p);
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addStamp);
  } else {
    addStamp();
  }
})();
