/* =========================================
   PARAMOUNT ACADEMY
   app.js v2.0
   PART 1 (CORE)
========================================= */

window.onload = function () {

    console.log("App Started");

    // Firebase Check
    if (typeof firebase === "undefined") {
        alert("Firebase Library Not Loaded");
        return;
    }

    if (typeof db === "undefined") {
        alert("Firebase Database Not Ready");
        return;
    }

    console.log("Firebase Ready");

    // Buttons
    const registerBtn = document.getElementById("registerBtn");
    const loginBtn = document.getElementById("loginBtn");
    const adminBtn = document.getElementById("adminLoginBtn");

    if (registerBtn) {
        registerBtn.addEventListener("click", registerStudent);
    }

    if (loginBtn) {
        loginBtn.addEventListener("click", loginStudent);
    }

    if (adminBtn) {
        adminBtn.addEventListener("click", adminLogin);
    }

};


// ===============================
// Navigation
// ===============================

function showSection(sectionId){

    document
    .querySelectorAll(".card")
    .forEach(card=>{

        card.classList.add("hidden");

    });

    const section =
    document.getElementById(sectionId);

    if(section){

        section.classList.remove("hidden");

    }

}

window.showSection = showSection;


// ===============================
// Empty Functions
// ===============================

async function registerStudent(){

try{

const name =
document.getElementById("regName").value.trim();

const mobile =
document.getElementById("regMobile").value.trim();

const password =
document.getElementById("regPassword").value.trim();

if(name==="" || mobile==="" || password===""){

alert("Please Fill All Fields");

return;

}

// Mobile Check

const check =
await db.ref("users")
.orderByChild("mobile")
.equalTo(mobile)
.once("value");

if(check.exists()){

alert("Mobile Already Registered");

return;

}

// Create Student ID

const studentId =
"STU" + Date.now();

// Save User

await db.ref("users/"+studentId).set({

studentId:studentId,

name:name,

mobile:mobile,

password:password,

date:new Date().toLocaleString()

});

// Save Local Storage

localStorage.setItem(
"studentId",
studentId
);

localStorage.setItem(
"studentName",
name
);

alert("Registration Successful");

// Clear Form

document.getElementById("regName").value="";

document.getElementById("regMobile").value="";

document.getElementById("regPassword").value="";

// Redirect

window.location.href="dashboard.html";

}catch(error){

console.error(error);

alert(error.message);

}

}
