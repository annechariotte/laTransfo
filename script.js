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
        header.addEventListener('click', function () {
            let parent = header.parentElement,
                show = document.getElementsByClassName('show')[0];
            if (show && show != parent) {
                show.classList.remove('show')
            };
            parent.classList.contains('show') ? parent.classList.remove('show') : parent.classList.add('show');
        })
    }

});