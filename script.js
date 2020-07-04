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

function closeTab(currentShow) {

    currentShow.classList.remove("show");
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
    // DOM is loaded and ready for manipulation here
    for (let $i = 0; $i <= 6; $i++) {

        // ACCORDION //

        let header = document.getElementById('section' + $i);
        let parent = header.parentElement;
        let parentTop = parent.offsetTop;

        let show;

        header.addEventListener("click", function () {

            let currentShow = document.getElementsByClassName("show")[0];

            if (currentShow) {

                closeTab(currentShow)
                return show = false;
            };

            if (currentShow != parent) {

                openTab(parent, parentTop)
                return show = true;
            }
        });

        // SCROLL HOVER //

        let currentTitle = document.getElementsByClassName("tab-title" + $i)[0];
        let fixedTitle = currentTitle.getElementsByTagName("h1")[0];
        let marqueeTitle = document.createElement("marquee");
        let marqueeContent = document.createElement("h1");

        let titleContent = fixedTitle.textContent;
        marqueeContent.textContent = titleContent + " " + titleContent + " " + titleContent + " " + titleContent;

        header.addEventListener("mouseover", function () {

            let defile = false;

            if (!show) {
                if (!defile) {

                    startScrolling(currentTitle, fixedTitle, marqueeTitle, marqueeContent);
                    defile = true;

                    if (defile) {
                        header.addEventListener("click", function () {

                            stopScrolling(currentTitle, fixedTitle, marqueeTitle)
                            defile = false;
                        })

                        header.addEventListener("mouseleave", function () {

                            stopScrolling(currentTitle, fixedTitle, marqueeTitle)
                            defile = false;
                        });

                        header.addEventListener("mouseout", function () {

                            stopScrolling(currentTitle, fixedTitle, marqueeTitle)
                            defile = false;
                        });
                    };

                    return defile;
                };
            }
        });
    };
});