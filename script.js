function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

docReady(function () {
    // DOM is loaded and ready for manipulation here
    for (let $i = 0; $i < 7; $i++) {
        let header = document.getElementById('section' + $i);
        let parent = header.parentElement;
        let parentTop = parent.offsetTop;

        header.addEventListener('click', function () {
            let currentShow = document.getElementsByClassName('show')[0];

            if (currentShow) {
                currentShow.classList.remove('show');
                window.scrollTo(0, 100);
            };

            if (currentShow != parent) {
                parent.classList.add('show');
                window.scrollTo(0, parentTop);
            }
        })
    }
});