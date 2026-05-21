// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="introduction.html">Introduction</a></li><li class="chapter-item expanded affix "><li class="part-title">Encapsulation</li><li class="chapter-item expanded "><a href="modules-and-packages.html"><strong aria-hidden="true">1.</strong> Modules, Packages, and Imports</a></li><li class="chapter-item expanded affix "><li class="part-title">Types and Values</li><li class="chapter-item expanded "><a href="primitive-types.html"><strong aria-hidden="true">2.</strong> Primitive Types</a></li><li class="chapter-item expanded "><a href="vector.html"><strong aria-hidden="true">3.</strong> Vector</a></li><li class="chapter-item expanded "><a href="references.html"><strong aria-hidden="true">4.</strong> References</a></li><li class="chapter-item expanded "><a href="tuples.html"><strong aria-hidden="true">5.</strong> Tuples and Unit</a></li><li class="chapter-item expanded "><a href="structs-and-enums.html"><strong aria-hidden="true">6.</strong> Structs, Resources, and Enums</a></li><li class="chapter-item expanded "><a href="generics-and-abilities.html"><strong aria-hidden="true">7.</strong> Generics and Type Abilities</a></li><li class="chapter-item expanded "><a href="global-storage.html"><strong aria-hidden="true">8.</strong> Global Storage</a></li><li class="chapter-item expanded "><a href="equality-and-comparison.html"><strong aria-hidden="true">9.</strong> Equality and Comparison</a></li><li class="chapter-item expanded affix "><li class="part-title">Constants and Functions</li><li class="chapter-item expanded "><a href="constants.html"><strong aria-hidden="true">10.</strong> Constants</a></li><li class="chapter-item expanded "><a href="functions.html"><strong aria-hidden="true">11.</strong> Functions</a></li><li class="chapter-item expanded "><a href="variables.html"><strong aria-hidden="true">12.</strong> Local Variables and Scopes</a></li><li class="chapter-item expanded "><a href="abort-and-assert.html"><strong aria-hidden="true">13.</strong> Abort and Assert</a></li><li class="chapter-item expanded "><a href="conditionals-and-loops.html"><strong aria-hidden="true">14.</strong> Conditionals and Loops</a></li><li class="chapter-item expanded affix "><li class="part-title">Testing</li><li class="chapter-item expanded "><a href="unit-testing.html"><strong aria-hidden="true">15.</strong> Unit Tests</a></li><li class="chapter-item expanded affix "><li class="part-title">Aptos CLI</li><li class="chapter-item expanded "><a href="cli.html"><strong aria-hidden="true">16.</strong> Overview</a></li><li class="chapter-item expanded "><a href="cli-develop.html"><strong aria-hidden="true">17.</strong> Develop</a></li><li class="chapter-item expanded "><a href="cli-deploy.html"><strong aria-hidden="true">18.</strong> Publish</a></li><li class="chapter-item expanded "><a href="cli-run.html"><strong aria-hidden="true">19.</strong> Run</a></li><li class="chapter-item expanded affix "><li class="part-title">Move Prover</li><li class="chapter-item expanded "><a href="spec-lang.html"><strong aria-hidden="true">20.</strong> Specification Language</a></li><li class="chapter-item expanded "><a href="spec-compositional.html"><strong aria-hidden="true">21.</strong> Compositional Specifications</a></li><li class="chapter-item expanded "><a href="spec-proofs.html"><strong aria-hidden="true">22.</strong> Proofs and Inference</a></li><li class="chapter-item expanded "><a href="prover-guide.html"><strong aria-hidden="true">23.</strong> User Guide</a></li><li class="chapter-item expanded affix "><li class="part-title">Reference</li><li class="chapter-item expanded "><a href="standard-library.html"><strong aria-hidden="true">24.</strong> Standard Library</a></li><li class="chapter-item expanded "><a href="coding-conventions.html"><strong aria-hidden="true">25.</strong> Coding Conventions</a></li><li class="chapter-item expanded "><a href="move-versions.html"><strong aria-hidden="true">26.</strong> Language Versions</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
