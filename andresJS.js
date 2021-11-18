
var xmlhttp = new XMLHttpRequest();
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
            sTime.textContent = "Datum:"+element.time;
            sTime.className = "time";
            pName.appendChild(sTime);

            /*
            const chatFrom = document.getElementById('name');
            let from = element.from+":";
            chatFrom.innerText = from;

            const chatMsg = document.getElementById('msg'); 
            let msg = element.msg;
            chatMsg.innerText = msg;

            const chatTime = document.getElementById('time'); 
            let time = "Datum:"+element.time;
            chatTime.innerText = time;
            */
        }

        console.log(data);
        
    } 
};

xmlhttp.open("GET", "https://online-lectures-cs.thi.de/chat/e50a4ae0-c42b-4fb5-93f3-24a961b1cca8/message/Jerry", true);

// Add token, e. g., from Tom
xmlhttp.setRequestHeader('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiVG9tIiwiaWF0IjoxNjM3MTk5MDMxfQ.cBHfStPmORIZXQMenda4FIODPY79wvqCvSzmeEtzf9s');
xmlhttp.send();

window.setInterval(function() { console.log("Hallo, Welt!");
}, 1000);



