var firebaseConfig = {
    apiKey: "AIzaSyAhYnuQkj_dLuM8b_1dLTjopdQDYUPjY3w",
  authDomain: "bonfire-f30d6.firebaseapp.com",
  databaseURL: "https://bonfire-f30d6-default-rtdb.firebaseio.com",
  projectId: "bonfire-f30d6",
  storageBucket: "bonfire-f30d6.appspot.com",
  messagingSenderId: "561658342278",
  appId: "1:561658342278:web:db2989194f6348a33a5a07",
  measurementId: "G-W1E69WY8RK"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("username");
room_name = localStorage.getItem("Roomname");

function send() {
    msg = document.getElementById("msg").value; 
    firebase.database().ref(room_name).push({
          name: user_name,
          msg: msg,
          likes: 0
    });
    document.getElementById("msg").value = "";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
    console.log(firebase_message_id);
    console.log(message_data);
    name = message_data['name'];
    msg = message_data['msg'];
    like = message_data['likes'];
    name_with_tag = "<h4>"+name+"<img class = 'user_tick' src = 'tick.png'></h4>"
    msg_with_tag = "<h4 class = 'message_h4'>"+msg+"</h4>"
    like_button = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick= 'updateLike(this.id)'>"
    span_with_tag = "<span class = 'glyphicon glyphicon-thumbs-up'>Like: "+like+"</span></button><hr>"
    row = name_with_tag+msg_with_tag+like_button+span_with_tag;
    document.getElementById("output").innerHTML+= row;
    //End code
    } });  }); }
getData();
function updateLike(message_id) {
    console.log(message_id);
    button_id = message_id;
    likes = document.getElementById(button_id).value;
    updated_likes = Number(likes)+1;
    console.log(updated_likes);
    firebase.database().ref(room_name).child(message_id).update({
          likes: updated_likes
    });
}
function logout() {
    localStorage.removeItem("Username");
    localStorage.removeItem("Roomname");
    window.location = "index.html";
}
function back() {
    window.location = "bonfire_rooms.html";
}
