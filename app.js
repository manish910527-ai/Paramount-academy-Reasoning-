/* ===================================
   PARAMOUNT ACADEMY
   APP.JS
   VERSION 1.0 STABLE
=================================== */

// -------------------------------
// Firebase Check
// -------------------------------

window.onload = function () {

    console.log("App Started");

    if (typeof firebase === "undefined") {

        alert("Firebase Library Not Loaded");

        return;

    }

    if (typeof db === "undefined") {

        alert("Firebase Database Not Ready");

        return;

    }

    console.log("Firebase Ready");

    initializeApp();

};


// -------------------------------
// Main App
// -------------------------------

function initializeApp() {

    console.log("Initializing App...");

    showLoginSection();

}


// -------------------------------
// Show Login
// -------------------------------

function showLoginSection() {

    const loginSection =
        document.getElementById("loginSection");

    if (loginSection) {

        loginSection.style.display = "block";

    }

}


// -------------------------------
// Show Section
// -------------------------------

function showSection(id) {

    document
        .querySelectorAll(".section")
        .forEach(section => {

            section.style.display = "none";

        });

    const page =
        document.getElementById(id);

    if (page) {

        page.style.display = "block";

    }

}
/* ===================================
   PART 2
   STUDENT REGISTER + LOGIN
=================================== */

const registerBtn =
document.getElementById("registerBtn");

if(registerBtn){

registerBtn.onclick = async function(){

const name =
document.getElementById("studentName").value.trim();

const mobile =
document.getElementById("studentMobile").value.trim();

if(name==="" || mobile===""){

alert("Please Fill All Details");

return;

}

const studentId =
"STU"+Date.now();

await db.ref("users/"+studentId).set({

studentId:studentId,

name:name,

mobile:mobile,

date:new Date().toLocaleString()

});

localStorage.setItem("studentId",studentId);

localStorage.setItem("studentName",name);

alert("Registration Successful");

window.location.href="dashboard.html";

};

}


/* ===================================
   STUDENT LOGIN
=================================== */

const loginBtn =
document.getElementById("studentLoginBtn");

if(loginBtn){

loginBtn.onclick = async function(){

const studentId =
document.getElementById("studentId").value.trim();

if(studentId===""){

alert("Enter Student ID");

return;

}

const snapshot =
await db.ref("users/"+studentId).once("value");

if(snapshot.exists()){

const user =
snapshot.val();

localStorage.setItem("studentId",user.studentId);

localStorage.setItem("studentName",user.name);

alert("Login Successful");

window.location.href="dashboard.html";

}else{

alert("Invalid Student ID");

}

};

}
