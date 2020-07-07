function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
};

function openTab(parent) {
    parent.classList.add("show");
    window.scrollTo(0, 0);

};

function closeTab(currentElement) {
    currentElement.classList.remove("show");
    window.scrollTo(0, 0);
};

docReady(function () {

    for (let $i = 0; $i <= 6; $i++) {

        // ACCORDION //

        let header = document.getElementById('section' + $i);
        let currentTabShow = header.parentElement;
        // let tabTop = currentTabShow.offsetTop;

        header.addEventListener("click", function () {
            let lastTabShow = document.getElementsByClassName("show")[0];

            if (!lastTabShow) {
                openTab(currentTabShow);
            }

            if (lastTabShow) {
                closeTab(lastTabShow);

                if (lastTabShow != currentTabShow) {
                    openTab(currentTabShow);
                }
            }

        });

        // SCROLL HOVER //

        let currentTitle = document.getElementsByClassName("tab-title" + $i)[0];

        header.addEventListener("mouseenter", function () {

            currentTitle.classList.add("marquee");

        });
        header.addEventListener("mouseleave", function () {

            currentTitle.classList.remove("marquee");
        });

    };
});

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
// window.onscroll = function () {

//     for (let $i = 0; $i <= 6; $i++) {
//         let lastHeader = document.getElementById("section" + ($i - 1));
//         let currentHeader = document.getElementById("section" + $i);
//         let nextHeader = document.getElementById("section" + ($i + 1));

//         let currentSticky = currentHeader.offsetTop;
//         let nextSticky;

//         if (window.pageYOffset > currentSticky) {
//             currentHeader.classList.add("sticky");
//             if (lastHeader !== null) {
//                 lastHeader.classList.remove("sticky");
//             }
//         }
//         console.log(currentSticky);

//         if (nextHeader !== null) {
//             nextSticky = nextHeader.offsetTop;
//             if (window.pageYOffset < currentSticky || window.pageYOffset > nextSticky - 100 || window.pageYOffset < 100) {
//                 currentHeader.classList.remove("sticky");
//                 nextHeader.classList.remove("sticky");
//             }
//             console.log(currentSticky);
//         }

//     }
// };