var ourData;
var url = 'https://bhuvnesht26.github.io/api/projects.json';
document.addEventListener("DOMContentLoaded", function () {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', url);
    ourRequest.onload = function () {
        if (ourRequest.status >= 200 && ourRequest.status < 400) {
        // This is where we'll do something with the retrieved data
            ourData = JSON.parse(ourRequest.responseText);
            console.log(ourData);
            renderHTML(ourData.articles);
            }
        else {
                    console.log("We connected to the server, but it returned an error.");
                }
            };

    ourRequest.onerror = function() {
        console.log("Connection error");
        };

    ourRequest.send();

});

function newsTemplate(news) {

     return `
        <a href="${news.url}" target="_blank">
            <div class="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet mdl-cell--4-col-phone mdl-card mdl-shadow--2dp">
              <div class="mdl-card__media">
                <img src="${news.img}">
              </div>
              <div class="mdl-card__title">
                <h4 class="mdl-card__title-text">${news.title}</h4>
              </div>
            </a>
          
            </div>
        `;
}

function renderHTML(htmlData) {
document.getElementById("news-container").innerHTML = `
  ${htmlData.map(newsTemplate).join("")}
`;
}