document.addEventListener("DOMContentLoaded", function () {

            renderHeader();
});

function renderHeader() {

    document.getElementById("header-container").innerHTML = `

        <div class="mdl-layout__header-row">
            <span class="android-title mdl-layout-title">
                <h2 style="color:#4CB96B;">Showcase</h2>
            </span>
          <!-- Add spacer, to align navigation to the right in desktop -->
            <div class="android-header-spacer mdl-layout-spacer"></div>

          <!-- Navigation -->
          
        </div>
        `;
}
