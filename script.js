const faders = document.querySelectorAll('.fade');

const scrollAppear = new IntersectionObserver(function(entries, scrollAppear) { entries.forEach(entry => {
    if (!entry.isIntersecting) {
        return;
    } else {
        entry.target.classList.add('appear');
        scrollAppear.unobserve(entry.target);
    }
});
});

faders.forEach(fader => {
    scrollAppear.observe(fader);
});