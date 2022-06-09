//? Importing HTML stuff
// Getting searchbox, HTML input
let searchBox = document.getElementById("search-box");
// Accesing searchbox placeholder
let placeholder = searchBox.placeholder;

// Getting searchbutton, HTML button
let searchButton = document.getElementById("search-box-button");
//* Next section

//? Events listeners happening
// Event onClick, HTML search box
searchBox.addEventListener("click", () => {
    searchBox.placeholder = "";
});
// Event onFocusout, HTML search box
searchBox.addEventListener("focusout", () => {
    searchBox.placeholder = "What you want to search?";
});

// Event onClick, HTML search button
searchButton.addEventListener("click", () => {
    setTimeout(window.location.assign("/"), 50000);
});
//* Next section
