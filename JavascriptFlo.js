var searchbar = document.getElementById("addFriend");
var searchreq = document.getElementById("addButton");

searchbar.addEventListener("click", request);

function request() {

    searchbar.classList.add("open");
    var currenttext = searchbar.ariaValueText;
    // console.log(searchbar.classList);
}
