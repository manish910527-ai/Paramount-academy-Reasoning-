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
