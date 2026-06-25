/* =====================================
PARAMOUNT ACADEMY
APP.JS v2.0 STABLE
PART 1
===================================== */

window.onload = function(){

console.log("App Started");

// Firebase Check

if(typeof firebase === "undefined"){

alert("Firebase Library Not Loaded");

return;

}

if(typeof db === "undefined"){

alert("Database Not Ready");

return;

}

console.log("Firebase Ready");

// Hide All Sections

hideAllSections();

// Navigation Buttons

window.showSection = function(sectionId){

hideAllSections();

const section =
document.getElementById(sectionId);

if(section){

section.classList.remove("hidden");

}

};

// Student Register Button

const registerBtn =
document.getElementById("registerBtn");

if(registerBtn){

registerBtn.onclick = registerStudent;

}

// Student Login Button

const loginBtn =
document.getElementById("loginBtn");

if(loginBtn){

loginBtn.onclick = loginStudent;

}

// Admin Login Button

const adminBtn =
document.getElementById("adminLoginBtn");

if(adminBtn){

adminBtn.onclick = adminLogin;

}

};

// =====================================
// Hide Sections
// =====================================

function hideAllSections(){

const sections =
document.querySelectorAll(".card");

sections.forEach(section=>{

section.classList.add("hidden");

});

}

// =====================================
// Empty Functions
// Part 2 & Part 3
// =====================================

async function registerStudent(){

console.log("Register Clicked");

}

async function loginStudent(){

console.log("Login Clicked");

}

function adminLogin(){

console.log("Admin Login Clicked");

}

async function registerStudent(){

try{

const name =
document.getElementById("regName").value.trim();

const mobile =
document.getElementById("regMobile").value.trim();

const password =
document.getElementById("regPassword").value.trim();

if(!name || !mobile || !password){

alert("Please fill all fields");

return;

}

const snapshot =
await db.ref("users").orderByChild("mobile").equalTo(mobile).once("value");

if(snapshot.exists()){

alert("Mobile Number Already Registered");

return;

}

const studentId =
"STU" + Date.now();

await db.ref("users/" + studentId).set({

studentId: studentId,

name: name,

mobile: mobile,

password: password,

date: new Date().toLocaleString()

});

localStorage.setItem("studentId", studentId);

localStorage.setItem("studentName", name);

alert("Registration Successful");

window.location.href = "dashboard.html";

}catch(error){

console.error(error);

alert(error.message);

}

}

async function loginStudent(){

try{

const mobile =
document.getElementById("loginMobile").value.trim();

const password =
document.getElementById("loginPassword").value.trim();

if(!mobile || !password){

alert("Please Enter Mobile & Password");

return;

}

const snapshot =
await db.ref("users")
.orderByChild("mobile")
.equalTo(mobile)
.once("value");

if(!snapshot.exists()){

alert("Student Not Found");

return;

}

let loginSuccess = false;

snapshot.forEach(child=>{

const user = child.val();

if(user.password === password){

localStorage.setItem(
"studentId",
user.studentId
);

localStorage.setItem(
"studentName",
user.name
);

loginSuccess = true;

}

});

if(loginSuccess){

alert("Login Successful");

window.location.href =
"dashboard.html";

}else{

alert("Wrong Password");

}

}catch(error){

console.error(error);

alert(error.message);

}

}
