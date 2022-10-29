'use strict';

let number = Math.trunc(Math.random()*20+1);
let score = 20
let highScore = 0;

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);

    // When guess is left blank
    if (!guess) {
        document.querySelector('.message').textContent = '⛔ No number!';

    // When guess is correct
    } else if (guess === number) {
        document.querySelector('.message').textContent = '✅ Correct!';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = score;
        }

        // When guess is wrong
    } else if (guess !== number) {
        if (score > 0) {
            document.querySelector('.message').textContent = guess > number ? '📉 Lower...' : '📈 Higher...';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
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