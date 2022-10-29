'use strict';

// document.querySelector('.message').textContent = 'Correct!';

// document.querySelector('.number').textContent = '69';
// document.querySelector('.score').textContent = '69';

// document.querySelector('.guess').value;

let number = Math.trunc(Math.random()*20+1);
let score = 20
let highScore = 0;

// document.querySelector('.number').textContent = number;

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    // console.log(typeof guess);

    if (!guess) {
        document.querySelector('.message').textContent = '⛔ No number!';
    } else if (guess === number) {
        document.querySelector('.message').textContent = '✅ Correct!';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = score;
        }
    } else if (guess > number) {
        if (score > 0) {
            document.querySelector('.message').textContent = '📉 Lower...';
            score--;
            document.querySelector('.score').textContent = score;
        } else if (score === 0) {
            document.querySelector('.message').textContent = '❌ GAME OVER ❌';
        }
    } else if (guess < number) {
        if (score > 0) {
            document.querySelector('.message').textContent = '📈 Higher...';
            score--;
            document.querySelector('.score').textContent = score;
        } else if (score === 0) {
            document.querySelector('.message').textContent = '❌ GAME OVER ❌';
        }
    }
});

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    number = Math.trunc(Math.random()*20+1);
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});