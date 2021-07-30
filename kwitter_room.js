
  var firebaseConfig = {
      apiKey: "AIzaSyD1hd7h9tiYMzpoZu11P-fbjbrO6ngmuak",
      authDomain: "kwitter-9ba7b.firebaseapp.com",
      databaseURL: "https://kwitter-9ba7b-default-rtdb.firebaseio.com",
      projectId: "kwitter-9ba7b",
      storageBucket: "kwitter-9ba7b.appspot.com",
      messagingSenderId: "977135035973",
      appId: "1:977135035973:web:19a00b50f42cf38ee4252c",
      measurementId: "G-4F7Z4B6RM6"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";
function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name - " + Room_names);
row = "<div class='room_name' id=" + Room_names + "onclick = 'redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
document.getElementById("output").innerHTML += row;
      });});}
getData(); 
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}