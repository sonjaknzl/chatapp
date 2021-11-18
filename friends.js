// console.log("1");
var searchbar = document.getElementById("addFriend");
var searchreq = document.getElementById("addButton");

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        let data = JSON.parse(xmlhttp.responseText);
        // console.log(data);
        var List = document.getElementById("results");
        data.forEach(element => {
            var newOption = document.createElement("option");
            newOption.value=element;
            List.appendChild(newOption);
        });
    }
};
xmlhttp.open("GET", "https://online-lectures-cs.thi.de/chat/351e804e-1e63-4d05-b153-70267c73f8cb/user", true);
// Add token, e. g., from Tom
xmlhttp.setRequestHeader('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiVG9tIiwiaWF0IjoxNjM3MTYzMDkzfQ.osyCiLw5DFV4lzTaVDme43m1llZJdnWjlfd-7VNOYrM');
xmlhttp.send();



