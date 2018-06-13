document.addEventListener("DOMContentLoaded", function () {
   
            renderFooter();
});

function renderFooter() {
    
    document.getElementById("footer-container").innerHTML = `
    
        <div class="mdl-mega-footer--top-section">
           <div class="mdl-mega-footer--left-section">
              <p class="mdl-typography--font-light"><span style="font-size:1.8em;">NUUZ</span> <strong>Media</strong> © 2018 </p>
          </div>
            <div class="mdl-mega-footer--right-section">
              <a class="mdl-typography--font-light" href="#top">
                Back to Top
                <i class="material-icons">expand_less</i>
              </a>
            </div>
          </div>

        `;
}