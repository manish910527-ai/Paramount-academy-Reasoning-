window.onload = function(){

document
.getElementById(
"uploadBtn"
)
.onclick = async function(){

try{

const day =
document
.getElementById(
"dayNumber"
)
.value;

const jsonText =
document
.getElementById(
"jsonData"
)
.value;

const questions =
JSON.parse(
jsonText
);

await db.ref(

"tests/day" + day

).set(
questions
);

alert(
"Questions Uploaded Successfully"
);

}
catch(error){

alert(
error.message
);

}

};

};
