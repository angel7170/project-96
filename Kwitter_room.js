var firebaseConfig = {
    apiKey: "AIzaSyBDlSsWgukwIrhHRiw1wGTp_CMVE9xj8bs",
    authDomain: "classtest-61a03.firebaseapp.com",
    databaseURL: "https://classtest-61a03-default-rtdb.firebaseio.com",
    projectId: "classtest-61a03",
    storageBucket: "classtest-61a03.appspot.com",
    messagingSenderId: "589071255829",
    appId: "1:589071255829:web:77c7e70502dad89c73011c"
  };
 



function addRoom()
  {
     room_name = document.getElementById("room_name").value;
     firebase.database().ref("/").child(room_name).update ({
       purpose: "adding room name"
     });

     localStorage.setItem("room_name",room_name);

     window.location = "kwitter_page.html";

  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name -" + Room_names);
      row = "div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
    });});}
getData();

function redirectToRoomName()
{
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location = "kwitter_page.html";
}
