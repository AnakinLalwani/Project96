function user() {
    username = document.getElementById("username").value;
    localStorage.setItem("username", username);
    window.location = "bonfire_rooms.html"
}