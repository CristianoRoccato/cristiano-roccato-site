document.addEventListener("DOMContentLoaded", function () {

    // Anno nel footer
    const year = document.getElementById("year");
    if (year) {
        year.textContent = new Date().getFullYear();
    }

    // Menu
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

    // Animazione riquadri Musica
   const observerMusica = new IntersectionObserver(function(entries) {

        if (entries[0].isIntersecting) {

            cards.forEach(function(card, index) {

                setTimeout(function() {
                    card.classList.add("musica-visibile");
                }, index * 500);

            });

            observerMusica.disconnect();
        }

    }, {
        threshold: 0.35
    });

    observerMusica.observe(sezioneMusica);
}

});

const copertinaLibro = document.querySelector("#libro > img");

if (copertinaLibro) {
    const observerLibro = new IntersectionObserver(function(entries) {
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
 
