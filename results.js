window.onload = function(){

document
.getElementById(
"studentName"
)
.innerText =

localStorage.getItem(
"studentName"
);

document
.getElementById(
"resultsContainer"
)
.innerHTML =

`
<div class="card">

Day 1 : 18.75

</div>

<div class="card">

Day 2 : 20.50

</div>
`;

};
