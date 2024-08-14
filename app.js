const $circle = document.querySelector('#circle');
const $score = document.querySelector('#score');

function start() {
    setScore(getScore());
    setImage();
}

function setScore(score) {
    localStorage.setItem('score', score);
    $score.textContent = score;
}

function setImage() {
    if (getScore() >= 100) {
        $circle.setAttribute('src', './assets/lizzard.png');
    }
}

function getScore() {
    return Number(localStorage.getItem('score')) ?? 0;
}

function addOne() {
    setScore(getScore() + 1);
    setImage();
}

$circle.addEventListener('click', (event) => {
    const rect = $circle.getBoundingClientRect();

    // const offfsetX = event.clientX - rect.left - rect.width / 2;
    // const offfsetY = event.clientY - rect.top - rect.height / 2;

    if ($circle.classList != 'tap') {
        $circle.classList.add('tap');
        setTimeout(() => {
            $circle.classList.remove('tap');
        }, 100);
    };
    
    const plusOne = document.createElement('div');
    plusOne.classList.add('plus-one');
    plusOne.textContent = '+1';
    plusOne.style.left = `${event.clientX - rect.left}px`;
    plusOne.style.top = `${event.clienty - rect.top}px`;

    $circle.parentElement.appendChild(plusOne);

    addOne();

    setTimeout(() => {
        plusOne.remove();
    }, 1000);
})