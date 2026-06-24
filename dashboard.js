window.onload = function(){

/* ==========================
   CHECK LOGIN
========================== */

const studentName =
    localStorage.getItem("studentName");

const studentId =
    localStorage.getItem("studentId");

if(!studentName){

    window.location.href =
        "index.html";

    return;
}

/* ==========================
   SHOW STUDENT INFO
========================== */

document.getElementById(
    "welcomeName"
).innerText =
    "Welcome, " + studentName;

document.getElementById(
    "studentId"
).innerText =
    "Student ID : " + studentId;

/* ==========================
   GENERATE DAY CARDS
========================== */

const dayContainer =
    document.getElementById(
        "dayContainer"
    );

for(let i=1; i<=60; i++){

    const card =
        document.createElement("button");

    card.className =
        "day-card";

    card.innerText =
        "Day " + i;

    card.onclick = function(){

        window.location.href =
"day.html?day=" + i;

    };

    dayContainer.appendChild(card);
}

/* ==========================
   LOGOUT
========================== */

document.getElementById(
    "logoutBtn"
).addEventListener(
    "click",
    function(){

        localStorage.clear();

        window.location.href =
            "index.html";

    }
);

};