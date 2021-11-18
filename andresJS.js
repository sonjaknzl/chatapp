

//User Informationen
window.chatToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiVG9tIiwiaWF0IjoxNjM3MTk5MDMxfQ.cBHfStPmORIZXQMenda4FIODPY79wvqCvSzmeEtzf9s";
window.chatCollectionId = "e50a4ae0-c42b-4fb5-93f3-24a961b1cca8";
window.chatServer = "https://online-lectures-cs.thi.de/chat";

var chatUser = "/Jerry";
getMessages();

function getMessages(){
    
    var chatField = document.getElementById("chatField");
    
    while (chatField.hasChildNodes()){
        chatField.removeChild(chatField.firstChild);
    }
    
    var xmlhttp = new XMLHttpRequest();

    // Chat Server URL und Collection ID als Teil der URL
    xmlhttp.open("GET", window.chatServer + "/" + window.chatCollectionId +"/message"+ chatUser, true);

    // Das Token zur Authentifizierung, wenn notwendig 
    xmlhttp.setRequestHeader('Authorization', 'Bearer ' + window.chatToken); 
    
    
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) { 
            let data = JSON.parse(xmlhttp.responseText);
    
            for(let element of data){
                
                let pName = document.createElement('p');
                pName.textContent = element.from+": ";
                chatField.appendChild(pName);
    
                let sMessage = document.createElement('span');
                sMessage.textContent = element.msg;
                pName.appendChild(sMessage);
    
                let sTime = document.createElement('span');
    
                var timestamp = element.time;
                var date = new Date(timestamp);
                sTime.textContent = date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
                sTime.className = "time";
                pName.appendChild(sTime);
    
            }            
        } 
    };

    xmlhttp.send();
    console.log("hi1");
}


var sendButton = document.getElementById("msgSend");
sendButton.addEventListener("click", sendMessage);

function sendMessage(){

    let xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST", window.chatServer+"/"+ window.chatCollectionId+"/message", true);

    xmlhttp.onreadystatechange = function(){
        if(xmlhttp.readyState == 44 && xmlhttp.status == 204){
            console.log("XML HTTP ACTIVE");
        }
    };

    // xmlhttp.open("POST", window.chatServer+"/"+ window.chatCollectionId+"/message", true);

    xmlhttp.setRequestHeader("Content-type", "application/json");

    xmlhttp.setRequestHeader("Authorization", "Bearer window.chatToken");

    // Create request data with message and receiver
    var newMessage = document.getElementById("msgNew").value;
    let data = {
    message: newMessage,
    to: "Jerry",
    };

    let jsonString = JSON.stringify(data); // Serialize as JSON
    xmlhttp.send(jsonString); // Send JSON-data to server
    window.setTimeout(getMessages(), 2000);
}