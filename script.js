document.addEventListener("DOMContentLoaded", function () {

    // ANNO NEL FOOTER
    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }


    // MENU
    const menu = document.getElementById("menu");
    const navlinks = document.getElementById("navlinks");

    if (menu && navlinks) {

        menu.addEventListener("click", function () {
            navlinks.classList.toggle("open");
        });

        navlinks.querySelectorAll("a").forEach(function (link) {

            link.addEventListener("click", function () {
                navlinks.classList.remove("open");
            });

        });
    }


    // ANIMAZIONE RIQUADRI MUSICA
    const sezioneMusica = document.querySelector("#musica");
    const cards = document.querySelectorAll("#musica .cards article");

    if (sezioneMusica && cards.length > 0) {

        const observerMusica = new IntersectionObserver(function (entries) {

            if (entries[0].isIntersecting) {

                cards.forEach(function (card, index) {

                    setTimeout(function () {
                        card.classList.add("musica-visibile");
                    }, index * 500);

                });

                observerMusica.disconnect();
            }

        }, {
            threshold: 0.25
        });

        observerMusica.observe(sezioneMusica);
    }


    // ANIMAZIONE COPERTINA LIBRO
    const copertinaLibro = document.querySelector("#libro > img");

    if (copertinaLibro) {

        const observerLibro = new IntersectionObserver(function (entries) {

            if (entries[0].isIntersecting) {
                copertinaLibro.classList.add("libro-visibile");
                observerLibro.disconnect();
            }

        }, {
            threshold: 0.25
        });

        observerLibro.observe(copertinaLibro);
    }

});
