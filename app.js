window.onload = function () {

// Make showSection available to HTML buttons
window.showSection = function(sectionId) {

    const sections = document.querySelectorAll(".card");

    sections.forEach(section => {
        section.classList.add("hidden");
    });

    document
        .getElementById(sectionId)
        .classList.remove("hidden");
};

/* ==========================
   STUDENT REGISTRATION
========================== */

const registerBtn =
    document.getElementById("registerBtn");

if(registerBtn){

    registerBtn.addEventListener(
        "click",
        async function(){

            try{

                const name =
                    document.getElementById("regName").value.trim();

                const mobile =
                    document.getElementById("regMobile").value.trim();

                const password =
                    document.getElementById("regPassword").value.trim();

                if(!name || !mobile || !password){

                    alert("All fields required");
                    return;
                }

                const usersRef =
                    db.ref("users");

                const snapshot =
                    await usersRef.once("value");

                const count =
                    snapshot.numChildren() + 1;

                const studentId =
                    "PAK" +
                    String(count).padStart(3,"0");

                const newUser =
                    usersRef.push();

                await newUser.set({

                    studentId,
                    name,
                    mobile,
                    password,
                    createdAt:
                        new Date().toISOString()

                });

                alert(
                    "Registration Successful\n\nStudent ID: " +
                    studentId
                );

                document.getElementById("regName").value = "";
                document.getElementById("regMobile").value = "";
                document.getElementById("regPassword").value = "";

            }
            catch(error){

                console.error(error);

                alert(
                    "Registration Failed"
                );
            }
        }
    );
}

/* ==========================
   STUDENT LOGIN
========================== */

const loginBtn =
    document.getElementById("loginBtn");

if(loginBtn){

    loginBtn.addEventListener(
        "click",
        async function(){

            try{

                const mobile =
                    document.getElementById("loginMobile").value.trim();

                const password =
                    document.getElementById("loginPassword").value.trim();

                if(!mobile || !password){

                    alert(
                        "Enter Mobile & Password"
                    );

                    return;
                }

                const snapshot =
                    await db.ref("users")
                    .once("value");

                let loginSuccess = false;

                snapshot.forEach(child => {

                    const user =
                        child.val();

                    if(
                        user.mobile === mobile &&
                        user.password === password
                    ){

                        loginSuccess = true;

                        localStorage.setItem(
                            "studentName",
                            user.name
                        );

                        localStorage.setItem(
                            "studentId",
                            user.studentId
                        );
                    }

                });

                if(loginSuccess){

                    alert(
                        "Login Successful"
                    );
                    
                    window.location.href =
"dashboard.html";

                }else{

                    alert(
                        "Invalid Mobile or Password"
                    );
                }

            }
            catch(error){

                console.error(error);

                alert(
                    "Login Failed"
                );
            }
        }
    );
}

/* ==========================
   ADMIN LOGIN
========================== */

const adminBtn =
    document.getElementById("adminLoginBtn");

if(adminBtn){

    adminBtn.addEventListener(
        "click",
        function(){

            const username =
                document.getElementById("adminUser").value.trim();

            const password =
                document.getElementById("adminPassword").value.trim();

            if(
    username === "manishsir" &&
    password === "Paramount@2026"
){

    // Admin Login Save
    localStorage.setItem(
        "adminLoggedIn",
        "true"
    );

    alert(
        "Admin Login Successful"
    );

    // Open Admin Dashboard
    window.location.replace(
    "admin-dashboard.html"
);
}else{

    alert(
        "Invalid Admin Credentials"
    );

}
            }

        }
    );
}

};
