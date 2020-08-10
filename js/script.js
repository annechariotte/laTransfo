// recuperer toutes les sections de l'accordeon 
const tabs = document.getElementsByClassName("tab");

// Aucune section ouverte au debut
let lastSelectedTab = null;

function tabScrollTop(tab) {
    let offsetTab;
    if (window.matchMedia("(max-width: 759px)").matches) {
        offsetTab = tab.offsetTop - 140;
    } else {
        offsetTab = tab.offsetTop - 100;
    }
    window.scrollTo(0, offsetTab);
};

function displayTab(tab, header) {
    // s'il n'y a aucune section d'ouverte : premier click
    if (lastSelectedTab == null) {

        // afficher son contenu
        tab.classList.add("show");
        // définir la section comme dernère section ouverte
        lastSelectedTab = tab;

        // positionner son header en haut de la fenetre
        tabScrollTop(tab);
    }
    // s'il y a deja une section ouverte
    else {

        // si le click est sur la meme section
        if (tab.classList.contains("show")) {

            // masquer son contenu
            tab.classList.remove("show");

            // se repositionner en haut de la page
            tabScrollTop(tab);

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
            tabScrollTop(tab);

        }
    }

    // fixer le header de la section au scroll
    window.onscroll = function () {
        // si la section est ouverte
        if (tab.classList.contains("show")) {

            // calculer la position initiale de la section, avec le décalage de la nav bar
            let tabMinOffset;
            // en responsive
            if (window.matchMedia("(max-width: 759px)").matches) {
                tabMinOffset = tab.offsetTop - 140;
            } else {
                tabMinOffset = tab.offsetTop - 100;
            }

            let tabMaxOffset;
            if (window.matchMedia("(max-width: 759px)").matches) {
                if (tab == tabs[2]) {
                    tabMaxOffset = 3200;
                } else {
                    tabMaxOffset = 4200;
                }
            } else {
                if (tab == tabs[2]) {
                    tabMaxOffset = 4200;
                } else {
                    tabMaxOffset = 5200;
                }
            }

            // fixer le header si il est situé entre sa position Y initiale et le prochain header
            if (tabMinOffset < window.pageYOffset && window.pageYOffset < tabMaxOffset) {
                header.classList.add("sticky");
            }
            // ne plus fixer le header au dela de ces positions
            else {
                header.classList.remove("sticky");
            }
        }
    }

    // ne plus fixer le header quand la section est fermée
    header.classList.remove("sticky");
    // arreter le scroll horizontal du titre
    tab.querySelector(".tab-title").classList.remove("marquee");
};

// boucler sur chaque section
for (const tab of tabs) {

    // recuperer le header de la section
    let header = tab.children[0];

    // au click sur le header
    header.addEventListener("click", function () {
        displayTab(tab, header);
    })

    // quand la souris est sur une section
    tab.addEventListener("mouseenter", function () {

        // si la section n'est pas ouverte
        if (!tab.classList.contains("show")) {

            // commencer scroll horizontal du titre
            tab.querySelector(".tab-title").classList.add("marquee");
        }
    });

    // quand la souris n'est plus sur la section
    tab.addEventListener("mouseleave", function () {

        // arreter le scroll horizontal le titre
        tab.querySelector(".tab-title").classList.remove("marquee");
    });
};

// recuperer le parametre en bout d'URL
const urlParams = new URLSearchParams(window.location.search);
const tabParam = urlParams.get('tab');

// s'il y a une parametre en bout d'URL
if (tabParam != null) {
    // recuperer la section correspondant au parametre
    let tab = document.getElementById(tabParam);
    // recuperer son header
    let header = tab.children[0];

    // ouvrir la section
    displayTab(tab, header);

};