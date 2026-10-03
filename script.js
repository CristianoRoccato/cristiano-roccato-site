document.addEventListener("DOMContentLoaded", function () {

    // =========================
    // ANNO NEL FOOTER
    // =========================

    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }


    // =========================
    // MENU
    // =========================

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


    // =========================
    // ANIMAZIONE MUSICA
    // =========================

    const sezioneMusica = document.getElementById("musica");
    const cardsMusica = document.querySelectorAll("#musica .cards article");

    if (sezioneMusica && cardsMusica.length > 0) {

        // Attiva lo stato iniziale dell'animazione
        sezioneMusica.classList.add("animazione-pronta");

        const observerMusica = new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        cardsMusica.forEach(function (card, index) {

                            setTimeout(function () {
                                card.classList.add("musica-visibile");
                            }, index * 500);

                        });

                        observerMusica.unobserve(sezioneMusica);
                    }

                });

            },
            {
                threshold: 0.15
            }
        );

        observerMusica.observe(sezioneMusica);
    }

});
