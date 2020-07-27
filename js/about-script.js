const experimental = document.getElementById("experimental");
const involveAndForm = document.getElementById("involveAndForm");
const multidisciplinary = document.getElementById("multidisciplinary");
const programRhythm = document.getElementById("programRhythm");
const concreteCase = document.getElementById("concreteCase");
const ecosysteme = document.getElementById("ecosysteme");
const project = document.getElementById("project");

experimental.addEventListener("click", function () {
    window.open("index.html?tab=experimental");
});

involveAndForm.addEventListener("click", function () {
    window.open("index.html?tab=involveAndForm");
});

multidisciplinary.addEventListener("click", function () {
    window.open("index.html?tab=multidisciplinary");
});

programRhythm.addEventListener("click", function () {
    window.open("index.html?tab=programRhythm");
});

concreteCase.addEventListener("click", function () {
    window.open("index.html?tab=concreteCase");
});

ecosysteme.addEventListener("click", function () {
    window.open("index.html?tab=ecosysteme");
});

project.addEventListener("click", function () {
    window.open("index.html?tab=project");
});