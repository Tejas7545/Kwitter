
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = { 
      apiKey: "AIzaSyBrFOnwOCZt-DI8PdzqQq_Hi5D3yQF1gvs",
      authDomain: "kwitter-website-7b3b5.firebaseapp.com",
      databaseURL: "https://kwitter-website-7b3b5-default-rtdb.firebaseio.com",
      projectId: "kwitter-website-7b3b5",
      storageBucket: "kwitter-website-7b3b5.appspot.com",
      messagingSenderId: "985281797605",
      appId: "1:985281797605:web:ffbcaa9ad7a914ff77e30c"
}; // Initialize Firebase 
firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
function addRoom(){
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
   purpose : "adding room name" 
  });
  localStorage.setItem("room_name",room_name);
  window.location="kwitter_page.html";

}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
      //Start code
      console.log("Room Name-" +Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
    });
  });
}
getData();
function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html";
}
function logout(){
  localStorage.removeItem ("user_name");
  localStorage.removeItem ("room_name");
  window.location="index.html";
}