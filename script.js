function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
};

let lastSelectedTab = null;

docReady(function () {
    // recuperer toutes les sections de l'accordeon 
    let tabs = document.getElementsByClassName("tab");

    // boucler sur chaque section
    for (const tab of tabs) {

        // au click sur une section
        tab.addEventListener("click", function () {

            // s'il n'y a aucune section d'ouverte : premier click
            if (lastSelectedTab == null) {

                // afficher son contenu
                tab.classList.add("show");
                // définir la section comme dernère section ouverte
                lastSelectedTab = tab;

                // positionner son header en haut de la fenetre
                if (tab == tabs[6]) {
                    window.scrollTo(0, 100);
                } else {
                    window.scrollTo(0, 0);
                }
            }
            // s'il y a deja une section ouverte
            else {

                // si le click est sur la meme section
                if (tab.classList.contains("show")) {

                    // masquer son contenu
                    tab.classList.remove("show");

                    // se repositionner en haut de la page
                    if (tab == tabs[6]) {
                        window.scrollTo(0, 100);
                    } else {
                        window.scrollTo(0, 0);
                    }

                }
                // si le click est sur une autre section
                else {

                    // masquer le contenu de la derniere section ouvert 
                    lastSelectedTab.classList.remove("show");
                    // afficher son contenu
                    tab.classList.add("show");
                    // définir la section comme dernère section ouverte
                    lastSelectedTab = tab;

                    // positionner son header en haut de la fenetre
                    if (tab == tabs[6]) {
                        window.scrollTo(0, 100);
                    } else {
                        window.scrollTo(0, 0);
                    }

                }
            }

            // si la section est ouverte

            window.onscroll = function () {
                console.log(tab);

                if (tab.classList.contains("show")) {

                    // calculer la position initiale de la section, avec le décalage de la nav bar
                    let tabMinOffset;
                    // en responsive
                    if (window.matchMedia("(max-width: 759px)").matches) {
                        tabMinOffset = tab.offsetTop - 144;
                    } else if (window.matchMedia("(min-width: 760px) and (max-width: 999px)").matches) {
                        tabMinOffset = tab.offsetTop - 125;
                    } else {
                        tabMinOffset = tab.offsetTop - 104;
                    }

                    // fixer le header si il est situé entre sa position Y initiale et le prochain header
                    if (tabMinOffset < window.pageYOffset && window.pageYOffset < 5200) {
                        tab.children[0].classList.add("sticky");
                    }
                    // ne plus fixer le header au dela de ces positions
                    else {
                        tab.children[0].classList.remove("sticky");
                    }
                }
            }

            // ne plus fixer le header quand la section est fermée
            tab.children[0].classList.remove("sticky");
            // stopper le scroll du titre quand la section est ouverte
            tab.querySelector(".tab-title").classList.remove("marquee");

        })

        // quand la souris est sur une section
        tab.addEventListener("mouseenter", function () {

            // si la section n'est pas ouverte
            if (!tab.classList.contains("show")) {

                // faire scroller le titre
                tab.querySelector(".tab-title").classList.add("marquee");
            }
        });

        // quand la souris n'est plus sur la section
        tab.addEventListener("mouseleave", function () {

            // arreter le scroll du titre
            tab.querySelector(".tab-title").classList.remove("marquee");
        });
    }
});

// docReady(function () {
//     // recuperer toutes les sections de l'accordeon 
//     let tabs = document.getElementsByClassName("tab");

//     for (const tab of tabs) {
//         // recuperer le offset de la section 
//         let stickyOffset = tab.offsetTop;

//         tab.addEventListener("click", function () {

//             // s'il n'y a aucune section d'ouverte
//             if (lastSelectedTab == null) {

//                 // afficher son contenu
//                 tab.classList.add("show");
//                 // fixer sone header en haut de la fenetre
//                 tab.children[0].classList.add("sticky");
//                 // définir la section comme dernère section ouverte
//                 lastSelectedTab = tab;

//                 // positionner son header en haut de la fenetre
//                 window.scrollTo(0, stickyOffset);
//             }

//             // s'il y a deja une section ouverte
//             else {

//                 // si le click est sur la meme section
//                 if (tab.classList.contains("show")) {

//                     // masquer son contenu
//                     tab.classList.remove("show");
//                     // ne plus fixer son header en haut de page
//                     tab.children[0].classList.remove("sticky");

//                     // se positionner en haut de la page
//                     if (tab == tabs[6]) {
//                         window.scrollTo(0, 100);
//                     } else {
//                         window.scrollTo(0, 0);
//                     }
//                 }

//                 // si le click est sur une section differente
//                 else {

//                     // masquer le contenu de la derniere section ouvert 
//                     lastSelectedTab.classList.remove("show");
//                     // ne plus fixer en haut de page le header de la derniere section ouverte
//                     lastSelectedTab.children[0].classList.remove("sticky");

//                     // afficher son contenu
//                     tab.classList.add("show");
//                     // fixer sone header en haut de la fenetre
//                     tab.children[0].classList.add("sticky");
//                     // définir la section comme dernère section ouverte
//                     lastSelectedTab = tab;

//                     // positionner son header en haut de la fenetre
//                     window.scrollTo(0, stickyOffset);

//                 }
//             }

//             // stopper le scroll du titre quand la section est ouverte
//             tab.querySelector(".tab-title").classList.remove("marquee");
//         })

//         // quand la souris est sur une section
//         tab.addEventListener("mouseenter", function () {

//             // si la section n'est pas ouverte
//             if (!tab.classList.contains("show")) {

//                 // faire scroller le titre
//                 tab.querySelector(".tab-title").classList.add("marquee");
//             }
//         });

//         // quand la souris n'est plus sur la section
//         tab.addEventListener("mouseleave", function () {

//             // arreter le scroll du titre
//             tab.querySelector(".tab-title").classList.remove("marquee");
//         });
//     }

//     for (const tab of tabs) {

//         let tabMinOffset = tab.offsetTop - 100;
//         let tabMaxOffset = 5000;

//         tab.addEventListener("click", function () {
//             window.onscroll = function () {

//                 if (tab.children[0].classList.contains("sticky")) {

//                     if (window.pageYOffset < tabMinOffset || window.pageYOffset > tabMaxOffset) {
//                         tab.children[0].classList.remove("sticky");
//                     }

//                 } else if (tabMinOffset < window.pageYOffset && window.pageYOffset < 5000) {
//                     tab.children[0].classList.add("sticky");

//                 }
//             }
//         })
//     }

// });