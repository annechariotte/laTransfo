console.log("?????");

const experimental = document.getElementById("experimental");
const involveAndForm = document.getElementById("involveAndForm");
const multidisciplinary = document.getElementById("multidisciplinary");
const programRhythm = document.getElementById("programRhythm");
const concreteCase = document.getElementById("concreteCase");
const ecosysteme = document.getElementById("ecosysteme");
const project = document.getElementById("project");

const experimentalMobile = document.getElementById("experimental-mobile");
const involveAndFormMobile = document.getElementById("involveAndForm-mobile");
const multidisciplinaryMobile = document.getElementById("multidisciplinary-mobile");
const programRhythmMobile = document.getElementById("programRhythm-mobile");
const concreteCaseMobile = document.getElementById("concreteCase-mobile");
const ecosystemeMobile = document.getElementById("ecosysteme-mobile");
const projectMobile = document.getElementById("project-mobile");

if (experimental) {
    experimental.addEventListener("click", function () {
        window.open("index.html?tab=experimental");
    })

    experimentalMobile.addEventListener("click", function () {
        window.open("index.html?tab=experimental");
    })
};

involveAndForm.addEventListener("click", function () {
    window.open("index.html?tab=involveAndForm");
});
if (involveAndFormMobile) {
    involveAndFormMobile.addEventListener("click", function () {
        window.open("index.html?tab=involveAndForm");
    })
};

multidisciplinary.addEventListener("click", function () {
    window.open("index.html?tab=multidisciplinary");
});
if (multidisciplinaryMobile) {
    multidisciplinaryMobile.addEventListener("click", function () {
        window.open("index.html?tab=multidisciplinary");
    })
};

programRhythm.addEventListener("click", function () {
    window.open("index.html?tab=programRhythm");
});
if (programRhythmMobile) {
    programRhythmMobile.addEventListener("click", function () {
        window.open("index.html?tab=programRhythm");
    })
};

concreteCase.addEventListener("click", function () {
    window.open("index.html?tab=concreteCase");
});
if (concreteCaseMobile) {
    concreteCaseMobile.addEventListener("click", function () {
        window.open("index.html?tab=concreteCase");
    })
};

if (ecosysteme) {
    ecosysteme.addEventListener("click", function () {
        window.open("index.html?tab=ecosysteme");
    });
    ecosystemeMobile.addEventListener("click", function () {
        window.open("index.html?tab=ecosysteme");
    })
};

if (project) {
    project.addEventListener("click", function () {
        window.open("index.html?tab=project");
    });
    projectMobile.addEventListener("click", function () {
        window.open("index.html?tab=project");
    })
};