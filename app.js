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

    console.log("Register Button Clicked");

}

async function loginStudent(){

    console.log("Login Button Clicked");

}

function adminLogin(){

    console.log("Admin Button Clicked");

}
