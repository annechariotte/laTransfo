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

function startScrolling(currentTitle, fixedTitle, marqueeTitle, marqueeContent) {
    currentTitle.appendChild(marqueeTitle);
    marqueeTitle.appendChild(marqueeContent);
    currentTitle.removeChild(fixedTitle);
};

function stopScrolling(currentTitle, fixedTitle, marqueeTitle) {
    currentTitle.removeChild(marqueeTitle);
    currentTitle.appendChild(fixedTitle);
};

docReady(function () {

    for (let $i = 0; $i <= 6; $i++) {

        // ACCORDION //

        let header = document.getElementById('section' + $i);
        let tab = header.parentElement;
        let tabTop = tab.offsetTop;

        let show;

        header.addEventListener("click", function () {
            let currentTabShow = document.getElementsByClassName("show")[0];

            if (!currentTabShow) {
                openTab(tab, tabTop);

                show = true;
            }

            if (currentTabShow) {
                closeTab(currentTabShow);

                show = false;

                if (currentTabShow != tab) {
                    openTab(tab, tabTop);

                    show = true;
                }
            }
            return show;
        });

        // SCROLL HOVER //

        // let currentTitle = document.getElementsByClassName("tab-title" + $i)[0];
        // let fixedTitle = currentTitle.getElementsByTagName("h1")[0];
        // let marqueeTitle = document.createElement("marquee");
        // let marqueeContent = document.createElement("h1");

        // let titleContent = fixedTitle.textContent;
        // marqueeContent.textContent = titleContent + " " + titleContent + " " + titleContent;

        // let defile;

        // header.addEventListener("mouseover", function () {

        //     defile = false;

        //     if (!show) {
        //         if (!defile) {
        //             startScrolling(currentTitle, fixedTitle, marqueeTitle, marqueeContent);
        //             defile = true;

        //             header.addEventListener("mouseout", function () {
        //                 stopScrolling(currentTitle, fixedTitle, marqueeTitle)
        //                 defile = false;
        //             });
        //         };

        //         header.addEventListener("click", function () {
        //             stopScrolling(currentTitle, fixedTitle, marqueeTitle)
        //             defile = false;
        //         })

        //         return defile;
        //     }
        // });
    };
});