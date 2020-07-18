const involve = document.getElementById("involve");
const multi = document.getElementById("multi");
const rhythm = document.getElementById("rhythm");
const concrete = document.getElementById("concrete");

involve.addEventListener("click", function () {
    window.open("index.html?tab=involveAndForm");
});

multi.addEventListener("click", function () {
    window.open("index.html?tab=multidisciplinary");
});

rhythm.addEventListener("click", function () {
    window.open("index.html?tab=programRhythm");
});

concrete.addEventListener("click", function () {
    window.open("index.html?tab=concreteCase");
});