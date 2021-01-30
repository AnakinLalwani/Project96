var firebaseConfig = {
    apiKey: "AIzaSyBiIa6cPK3f-kOBqtvyoqHTnm3TFBLyYb8",
    authDomain: "kwitter-539fb.firebaseapp.com",
    databaseURL: "https://kwitter-539fb-default-rtdb.firebaseio.com",
    projectId: "kwitter-539fb",
    storageBucket: "kwitter-539fb.appspot.com",
    messagingSenderId: "402351123114",
    appId: "1:402351123114:web:ef9391a9908b661a32fed3",
    measurementId: "G-27XN2FXHJZ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //ADD YOUR FIREBASE LINKS HERE
  user_name = localStorage.getItem("username");
  function addroom() {
    room_name = document.getElementById("roomname").value; 
    firebase.database().ref("/").child(room_name).update({
      purpose: "adding a room"
    });
    localStorage.setItem("Roomname", room_name);
    window.location = "chat_page.html";
  }
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
         Room_names = childKey;
        //Start code
        console.log(Room_names);
        row = "<div class = 'room_name' id="+Room_names+" onclick= 'redirectToRoomname(this.id)'> #" + Room_names + "</div><hr>";
        document.getElementById("output").innerHTML += row;
        //End code
        });});}
  getData();
  function redirectToRoomname(name) {
    console.log(name);
    localStorage.setItem("Roomname", name);
    window.location = "chat_page.html";
  }
  function logout() {
    localStorage.removeItem("username");
    localStorage.removeItem("Roomname");
    window.location = "index.html";
  }