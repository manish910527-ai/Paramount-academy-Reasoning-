console.log("DB =", window.db);
window.onload = async function(){

try{

    console.log("TEST PAGE");

    if(typeof db === "undefined"){

        alert(
            "Firebase DB Not Loaded"
        );

        return;
    }

    const params =
        new URLSearchParams(
            window.location.search
        );

    const day =
        params.get("day");

    const snapshot =
        await window.db.ref(
            "tests/day" + day
        ).once("value");

    const container =
        document.getElementById(
            "questionContainer"
        );

    container.innerHTML = "";

    if(!snapshot.exists()){

        container.innerHTML =
        "<h3>No Questions Found</h3>";

        return;
    }

    snapshot.forEach(child => {

        const q =
            child.val();

        const div =
            document.createElement("div");

        div.className =
            "card";

        div.innerHTML = `

        <p><b>${q.question}</b></p>

        <label>
        <input type="radio"
        name="${child.key}"
        value="A">
        ${q.A}
        </label><br>

        <label>
        <input type="radio"
        name="${child.key}"
        value="B">
        ${q.B}
        </label><br>

        <label>
        <input type="radio"
        name="${child.key}"
        value="C">
        ${q.C}
        </label><br>

        <label>
        <input type="radio"
        name="${child.key}"
        value="D">
        ${q.D}
        </label>

        <hr>

        `;

        container.appendChild(div);

    });

    document
    .getElementById("submitTestBtn")
    .onclick = async function(){

        let correct = 0;
        let wrong = 0;

        snapshot.forEach(child => {

            const q =
                child.val();

            const selected =
                document.querySelector(
                    `input[name="${child.key}"]:checked`
                );

            if(selected){

                if(
                    selected.value ===
                    q.answer
                ){

                    correct++;

                }else{

                    wrong++;

                }

            }

        });

        const score =
            correct -
            (wrong * 0.25);

        const studentId =
            localStorage.getItem(
                "studentId"
            );

        const studentName =
            localStorage.getItem(
                "studentName"
            );

        await window.db.ref(

            "results/" +
            studentId +
            "/day" +
            day

        ).set({

            studentId:
            studentId,

            studentName:
            studentName,

            day:
            day,

            correct:
            correct,

            wrong:
            wrong,

            score:
            score,

            date:
            new Date()
            .toLocaleString()

        });

        alert(

`Result Saved

Correct : ${correct}

Wrong : ${wrong}

Score : ${score}`

        );

    };

}
catch(error){

    console.error(error);

    alert(
        error.message
    );

}

};