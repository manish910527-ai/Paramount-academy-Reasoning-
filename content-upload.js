window.onload = function(){

// Save Button (अभी पुराना Save Logic रहेगा)
document
.getElementById("saveContentBtn")
.onclick = async function(){

    try{

        const day =
        document.getElementById("dayNumber").value.trim();

        const title =
        document.getElementById("title").value.trim();

        const pdf =
        document.getElementById("pdfLink").value.trim();

        const image =
        document.getElementById("imageLink").value.trim();

        if(!day || !title || !pdf || !image){

            alert("Please fill all fields.");

            return;

        }

        await db.ref("content/day"+day).set({

            title:title,

            pdf:pdf,

            image:image

        });

        alert("Content Saved Successfully");

    }catch(error){

        alert(error.message);

    }

};


// Preview Button
document
.getElementById("previewBtn")
.onclick = async function(){

    try{

        const day =
        document.getElementById("dayNumber").value.trim();

        if(!day){

            alert("Enter Day Number");

            return;

        }

        const snapshot =
        await db.ref("content/day"+day).once("value");

        if(!snapshot.exists()){

            alert("Content Not Found");

            return;

        }

        const data =
        snapshot.val();

        document.getElementById("title").value =
        data.title;

        document.getElementById("pdfLink").value =
        data.pdf;

        document.getElementById("imageLink").value =
        data.image;

        document.getElementById("previewTitle").innerText =
        data.title;

        const img =
        document.getElementById("previewImage");

        img.src =
        data.image;

        img.style.display =
        "block";

        const pdfBtn =
        document.getElementById("openPdfBtn");

        pdfBtn.style.display =
        "block";

        pdfBtn.onclick = function(){

            window.open(
                data.pdf,
                "_blank"
            );

        };

    }catch(error){

        alert(error.message);

    }

};

};
