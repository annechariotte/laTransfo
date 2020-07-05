function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
};

function openTab(parent, parentTop) {
    parent.classList.add("show");
    window.scrollTo(0, parentTop);
};

function closeTab(currentElement) {
    currentElement.classList.remove("show");
    window.scrollTo(0, 100);
};

docReady(function () {

    for (let $i = 0; $i <= 6; $i++) {

        // ACCORDION //

        let header = document.getElementById('section' + $i);
        let currentTabShow = header.parentElement;
        let tabTop = currentTabShow.offsetTop;

        header.addEventListener("click", function () {
            let lastTabShow = document.getElementsByClassName("show")[0];

            if (!lastTabShow) {
                openTab(currentTabShow, tabTop);
            }

            if (lastTabShow) {
                closeTab(lastTabShow);

                if (lastTabShow != currentTabShow) {
                    openTab(currentTabShow, tabTop);
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