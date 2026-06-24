console.log("DB CHECK");
console.log(typeof db);
window.onload = async function(){

const params =
    new URLSearchParams(
        window.location.search
    );

const day =
    params.get("day");

document
    .getElementById("dayTitle")
    .innerText =
    "Day " + day;

const snapshot =
    await db.ref(
        "content/day" + day
    ).once("value");

if(snapshot.exists()){

    const data =
        snapshot.val();

    document
        .getElementById("dayTitle")
        .innerText =
        data.title;

    document
        .getElementById("dayImage")
        .src =
        data.image;

    document
        .getElementById("pdfBtn")
        .onclick = function(){

            window.open(
                data.pdf,
                "_blank"
            );

        };

}

document
    .getElementById("startTestBtn")
    .onclick = function(){

        window.location.href =
            "test.html?day=" + day;

    };

};