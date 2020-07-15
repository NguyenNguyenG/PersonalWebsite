function animate(){
    console.log("called");
    var timeline = anime.timeline({
        easing: 'linear',
        duration: 3500,
    });

    timeline.add({
        targets: '.bullet',
        opacity: 1,
        duration: 500,
    }).add({
        targets: '.line',
        height: '220px',
        opacity: 1,
        duration: 1000,
    }).add({
        targets: '.bullet2',
        opacity: 1,
        duration: 500,
    }).add({
        targets: '.line2',
        height: '280px',
        opacity: 1,
        duration: 1000,
    }).add({
        targets: '.bullet3',
        opacity: 1,
        duration: 500,
    });

    var timeline2 = anime.timeline({
        easing: 'linear',
        duration: 3500,
    });

    timeline2.add({
        targets: '#exp-fb',
        opacity: 1,
        duration: 1500,
    }).add({
        targets: '#exp-amazon',
        opacity: 1,
        duration: 1500,
    }).add({
        targets: '#exp-viasat',
        opacity: 1,
        duration: 1500,
    });
}

const exp = document.getElementById('experience');

const config = {
    root: null,
    threshold: 0.4
};

const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0.09) {
        animate();
        io.unobserve(entry.target);
      }
    });
}, config);

io.observe(exp);


