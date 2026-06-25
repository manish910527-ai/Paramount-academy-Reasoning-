console.log("Dashboard Loaded");
console.log(typeof db);
window.onload = async function(){

// ---------- Security ----------
if(localStorage.getItem("adminLoggedIn") !== "true"){

    alert("Access Denied");

    window.location.href = "index.html";

    return;

}

// ---------- Logout ----------
document.getElementById("logoutBtn").onclick = function(){

    localStorage.removeItem("adminLoggedIn");

    alert("Admin Logged Out");

    window.location.href = "index.html";

};

// ---------- Total Students ----------
const students =
await db.ref("users").once("value");

document.getElementById("totalStudents").innerText =
students.numChildren();

// ---------- Total Tests ----------
const tests =
await db.ref("tests").once("value");

document.getElementById("totalTests").innerText =
tests.numChildren();

// ---------- Total Results ----------
const results =
await db.ref("results").once("value");

let totalResults = 0;

results.forEach(student=>{

    totalResults +=
    student.numChildren();

});

document.getElementById("totalResults").innerText =
totalResults;

// ---------- Total Days Ready ----------
const content =
await db.ref("content").once("value");

document.getElementById("totalDays").innerText =
content.numChildren();

};
