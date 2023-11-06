let result = document.getElementById('result');
let value = document.querySelector('#select-value');
let input = document.getElementById('input');

function disableBtn() {
    document.getElementById("myBtn").innerHTML = 'Restart';
    document.getElementById("myBtn").onclick  = () => {location.reload()};
    input.parentElement.remove();
}

let low = 5;
let high = 20;
let counter = 0;
let rand = (min, max) => {
    let num = Math.random() * (max - min + 1) + min;
    return Math.floor(num);
}

let random_num = rand(low, high);
value.innerHTML = `"Guess a number between ${low} to ${high}."`;

let checkGuess = (random_num, user_num, count) => {
    if(random_num == user_num) {
        result.className = 'alert alert-success';
        result.innerHTML = `You Win!`;
        disableBtn();
    } else if(count > 2) {
        result.className = 'alert alert-danger';
        result.innerHTML = `You Lose!`;
        disableBtn();
    } else if(random_num > user_num) {
        result.innerHTML = `Correct answer is greater! <br>Your have ${3-count} guess left.`;
    } else if(random_num < user_num) {
        result.innerHTML = `Correct answer is smaller! <br>Your have ${3-count} guess left.`;
    } 
}

function check() {
    counter++;
    checkGuess(random_num, input.value, counter);
    input.value = '';
}
