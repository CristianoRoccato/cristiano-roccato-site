document.getElementById('year').textContent=new Date().getFullYear();const m=document.getElementById('menu'),n=document.getElementById('navlinks');m.addEventListener('click',()=>n.classList.toggle('open'));n.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>n.classList.remove('open')));

const observerMusica = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {

            cardsMusica.forEach((card, index) => {
                setTimeout(() => {
                    card.classList.add('musica-visibile');
                }, index * 600);
            });

            observerMusica.disconnect();
        }
    });
}, {
    threshold: 0.3
});

if (cardsMusica.length > 0) {
    observerMusica.observe(cardsMusica[0]);
}
