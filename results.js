window.onload = async function(){

try{

    const studentId =
    localStorage.getItem(
        "studentId"
    );

    const studentName =
    localStorage.getItem(
        "studentName"
    );

    document
    .getElementById(
        "studentName"
    )
    .innerText =
    studentName;

    const snapshot =
    await db.ref(
        "results/" +
        studentId
    ).once("value");

    const container =
    document.getElementById(
        "resultsContainer"
    );

    container.innerHTML = "";

    if(!snapshot.exists()){

        container.innerHTML =

        `<div class="card">

        No Results Found

        </div>`;

        return;
    }

    let totalTests = 0;
    let totalScore = 0;
    let bestScore = 0;

    snapshot.forEach(child => {

        const result =
        child.val();

        totalTests++;

        totalScore +=
        Number(
            result.score
        );

        if(
            Number(result.score)
            >
            bestScore
        ){
            bestScore =
            Number(
                result.score
            );
        }

        const div =
        document.createElement(
            "div"
        );

        div.className =
        "card";

        div.innerHTML =

        `<h3>

        Day ${result.day}

        </h3>

        <p>

        Score :
        ${result.score}

        </p>

        <p>

        Correct :
        ${result.correct}

        </p>

        <p>

        Wrong :
        ${result.wrong}

        </p>`;

        container.appendChild(
            div
        );

    });

    const avgScore =
    (
        totalScore /
        totalTests
    ).toFixed(2);

    document
    .getElementById(
        "testCount"
    )
    .innerText =
    "Tests Given : " +
    totalTests;

    document
    .getElementById(
        "avgScore"
    )
    .innerText =
    "Average Score : " +
    avgScore;

    document
    .getElementById(
        "bestScore"
    )
    .innerText =
    "Best Score : " +
    bestScore;

}
catch(error){

    console.error(
        error
    );

    alert(
        error.message
    );

}

};
