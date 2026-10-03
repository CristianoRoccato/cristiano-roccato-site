
document.getElementById('year').textContent=new Date().getFullYear();const m=document.getElementById('menu'),n=document.getElementById('navlinks');m.addEventListener('click',()=>n.classList.toggle('open'));n.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>n.classList.remove('open')));

const musicaCards = document.querySelectorAll('#musica .cards article');

if (musicaCards.length > 0) {
    const musicaObserver = new IntersectionObserver((entries, observer) => {
        if (entries[0].isIntersecting) {
            musicaCards.forEach((card, index) => {
                setTimeout(() => {
                    card.classList.add('musica-visibile');
                }, index * 350);
            });

            observer.disconnect();
        }
    }, {
        threshold: 0.25
    });

    musicaObserver.observe(musicaCards[0]);
}
