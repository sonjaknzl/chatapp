var searchbar = document.getElementById("search");
var searchreq = document.getElementById("searchbutton");

searchreq.addEventListener("click", request);

function request() {
  searchbar.classList.add("open");
  var currenttext = searchbar.ariaValueText;
}
