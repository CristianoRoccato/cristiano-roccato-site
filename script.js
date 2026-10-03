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

        // =========================
    // =========================
    // ANIMAZIONE LIBRO
    // =========================

    const sezioneLibro = document.getElementById("libro");

    if (sezioneLibro) {

        const copertinaLibro = sezioneLibro.querySelector("img");
        const testoLibro = sezioneLibro.querySelector("div");

        if (copertinaLibro && testoLibro) {

            copertinaLibro.style.opacity = "0";
            copertinaLibro.style.transform = "translateY(60px) scale(0.94)";
            copertinaLibro.style.transition =
                "opacity 1.2s ease, transform 1.2s ease";

            testoLibro.style.opacity = "0";
            testoLibro.style.transform = "translateX(60px)";
            testoLibro.style.transition =
                "opacity 1s ease 0.5s, transform 1s ease 0.5s";

            const observerLibro = new IntersectionObserver(
                function (entries) {

                    entries.forEach(function (entry) {

                        if (entry.isIntersecting) {

                            copertinaLibro.style.opacity = "1";
                            copertinaLibro.style.transform =
                                "translateY(0) scale(1)";

                            testoLibro.style.opacity = "1";
                            testoLibro.style.transform =
                                "translateX(0)";

                            observerLibro.unobserve(sezioneLibro);
                        }

                    });

                },
                {
                    threshold: 0.25
                }
            );

            observerLibro.observe(sezioneLibro);
        }
    }

});
