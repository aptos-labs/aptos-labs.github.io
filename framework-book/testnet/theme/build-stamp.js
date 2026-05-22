// Appends a build-stamp footer to every page.
//
// The literal "2026-05-22 07:32 UTC (aptos-framework testnet 33e99b1; tooling aptos-core 481b1f82)" is the placeholder that `deploy.sh` substitutes
// with the deploy timestamp + source commit hash. Local mdbook builds leave
// it untouched, signalling that the page wasn't deployed.
(function () {
  function addStamp() {
    var main = document.querySelector('main');
    if (!main || main.querySelector('.build-stamp')) return;
    var p = document.createElement('p');
    p.className = 'build-stamp';
    p.innerHTML = '<em>Build: 2026-05-22 07:32 UTC (aptos-framework testnet 33e99b1; tooling aptos-core 481b1f82)</em>';
    main.appendChild(p);
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addStamp);
  } else {
    addStamp();
  }
})();
