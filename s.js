score = 0;
cross = true;

over = new Audio('gameover.mp3');
music = new Audio('music.mp3');

setTimeout(() => {
    music.play()
}, 1000);

document.onkeydown = function (e) {
    console.log("This is the codekey :", e.key)
    if (e.key == 'ArrowUp') {
        dino = document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(() => {
            dino.classList.remove('animateDino')
        }, 700);
    }
    if (e.key == 'ArrowRight') {
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'))
        dino.style.left = dinoX + 122 + "px";
    }
    if (e.key == 'ArrowLeft') {
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'))
        dino.style.left = dinoX - 122 + "px";
    }

}

setInterval(() => {
    dino = document.querySelector(".dino");
    Gameover = document.querySelector(".Gameover");
    obsticle = document.querySelector(".obsticle");

    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obsticle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obsticle, null).getPropertyValue('top'));

    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);
    // console.log(offsetX, offsetY)
    if (offsetX < 93 && offsetY < 60) {
        Gameover.style.visibility = 'visible';
        obsticle.classList.remove('absticleani');
        over.play()
        setTimeout(() => {
            over.pause()
            music.pause()
        }, 1000);
    }
    else if (offsetX < 73 && cross) {
        score += 1;
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000)
        scoreupdate(score)

        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obsticle, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.1;
            if (newDur >2.1) {
                obsticle.style.animationDuration = newDur + 's';
            }
            else {
                obsticle.style.animationDuration = 2.1 + 's';
            }
            console.log(newDur)
        }, 500);


    }

}, 10);

function scoreupdate(score) {
    ScoreCont.innerHTML = "Your score :" + score
}



