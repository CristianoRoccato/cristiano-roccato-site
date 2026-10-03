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
    const cards = document.querySelectorAll("#musica .cards article");
alert("Riquadri Musica trovati: " + cards.length);
    if (cards.length > 0) {

        const observer = new IntersectionObserver(function (entries) {

            if (entries[0].isIntersecting) {

                cards.forEach(function (card, index) {
                    setTimeout(function () {
                        card.classList.add("musica-visibile");
                    }, index * 600);
                });

                observer.disconnect();
            }

        }, {
            threshold: 0.2
        });

        observer.observe(cards[0]);
    }

});
