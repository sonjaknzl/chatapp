//User Informationen
window.chatToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiVG9tIiwiaWF0IjoxNjM2NzA4OTM3fQ.W4b2-B_0DM4Y2qtmOD56pDO9JDmp0Z9d-Eu6aiqxB0w";
window.chatCollectionId = "48b90830-5340-4e6b-9926-547d418282c8";
window.chatServer = "https://online-lectures-cs.thi.de/chat";

var chatUser = "/Jerry";

getMessages();

// Load messages from server
function getMessages() {
  var chatField = document.getElementById("chatField");
  // console.log(chatField);
  while (chatField.hasChildNodes()) {
    chatField.removeChild(chatField.firstChild);
  }

  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open(
    "GET",
    "https://online-lectures-cs.thi.de/chat/1297cbf0-c3b0-4ddb-90c0-111f14039884/message/Jerry",
    true
  );

  xmlhttp.setRequestHeader(
    "Authorization",
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiVG9tIiwiaWF0IjoxNjM3MjE5NzIzfQ.hntngevnKuPAGTKkeFwA2xuVIFBeRBNEVDnZv7vnpQE"
  );
  // Chat Server URL und Collection ID als Teil der URL
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      let data = JSON.parse(xmlhttp.responseText);

      for (let element of data) {

        let pName = document.createElement("p");
        pName.textContent = element.from + ": ";
        
        chatField.appendChild(pName);

        let sMessage = document.createElement("span");
        sMessage.textContent = element.msg;
        pName.appendChild(sMessage);

        let sTime = document.createElement("span");

        var timestamp = element.time;
        var date = new Date(timestamp);
        sTime.textContent =
          date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
        sTime.className = "time";
        pName.appendChild(sTime);

        var targetDiv = document.querySelector(".panel");
        targetDiv.scrollTop = targetDiv.scrollHeight;
      }
    }
  };
  xmlhttp.send();
  //   console.log("hi1");
}



// Set sent button as var
var addButton = document.getElementById("Add");
addButton.addEventListener("click", sendMessage);

document.getElementById("newMessage").addEventListener ("keyup", (evt) => {
	if (evt.key === "Enter") {
		console.log ("Enter Key!");
    sendMessage();
	}
});

// Send message
function sendMessage() {
  console.log("send Message");
  let xmlhttp = new XMLHttpRequest();
  xmlhttp.open(
    "POST",
    "https://online-lectures-cs.thi.de/chat/d0238fc1-f40c-4d8d-a484-58efce0bb42c/message",
    true
  );

  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 204) {
      console.log("done...");
    }
  };

  xmlhttp.open(
    "POST",
    "https://online-lectures-cs.thi.de/chat/1297cbf0-c3b0-4ddb-90c0-111f14039884/message",
    true
  );

  xmlhttp.setRequestHeader("Content-type", "application/json");
  // Add token, e. g., from Tom
  xmlhttp.setRequestHeader(
    "Authorization",
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiVG9tIiwiaWF0IjoxNjM3MjE5NzIzfQ.hntngevnKuPAGTKkeFwA2xuVIFBeRBNEVDnZv7vnpQE"
  );

  // Create request data with message and receiver
  var newMessage = document.getElementById("newMessage").value;
  let data = {
    message: newMessage,
    to: "Jerry",
  };

  let jsonString = JSON.stringify(data); // Serialize as JSON
  xmlhttp.send(jsonString); // Send JSON-data to server
  window.setTimeout(getMessages(), 1000);

  document.getElementById('newMessage').value = ''
}

// Set modal as var 
var myModal = new bootstrap.Modal(document.getElementById('myModal'))

// Remove existing child nodes
while (modalContent.hasChildNodes()) {
  modalContent.removeChild(modalContent.firstChild);
};

// Change modal text Content
let modalChange = document.createElement("p");
modalChange.textContent = "Do you really want to end your friendship?";
modalContent.appendChild(modalChange);

// Change modal title
modalTitle.textContent = "Remove Tom as Friend";

// Set modal button as var
var modalBtn = document.getElementById("removeBtn");
modalBtn.addEventListener("click", openModal);

// Open modal
function openModal() {
  console.log("modal opened");
  myModal.show();
};

// Close modal
function closeModal() {
  console.log("modal closed");
  myModal.hide();
};

// Removing friend and open Friendslist
var saveExit = document.getElementById("remove");
saveExit.addEventListener("click", () => {
  window.open("friends.html", "_top");
});