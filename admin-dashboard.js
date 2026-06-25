window.onload = function(){

document
.getElementById("logoutBtn")
.onclick = function(){

localStorage.clear();

alert("Admin Logged Out");

window.location.href =
"index.html";

};

};
