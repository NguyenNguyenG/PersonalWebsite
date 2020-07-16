function animateExperience(){
    var timeline = anime.timeline({
        easing: 'linear',
        duration: 5200,
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
        duration: 1200,
    }).add({
        targets: '.bullet3',
        opacity: 1,
        duration: 500,
    }).add({
        targets: '.line3',
        height: '340px',
        opacity: 1,
        duration: 1500,
    });

    var timeline2 = anime.timeline({
        easing: 'linear',
        duration: 4500,
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

function animateEducation(){
    var timeline = anime.timeline({
        easing: 'linear',
        duration: 2500,
    });

    timeline.add({
        targets: '.bullet4',
        opacity: 1,
        duration: 500,
    }).add({
        targets: '.line4',
        height: '530px',
        opacity: 1,
        duration: 1500,
    });

    anime({
        targets: '#education-card',
        opacity: 1,
        duration: 1500,
        easing: 'linear',
    })
}

const config = {
    root: null,
    threshold: 0.4
};

const exp = document.getElementById('experience');
const edu = document.getElementById('education');

const ioExp = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0.09) {
        animateExperience();
        io.unobserve(entry.target);
      }
    });
}, config);

ioExp.observe(exp);

const ioEdu = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0.09) {
        animateEducation();
        io.unobserve(entry.target);
      }
    });
}, config);
ioEdu.observe(edu);


