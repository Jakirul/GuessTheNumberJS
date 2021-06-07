const input = document.querySelector("input");
const span = document.querySelector("span");
const button = document.querySelector("button");


const guess = Math.floor(Math.random() * 20 + 1)
console.log(guess)

let counter = 0;
button.addEventListener('click', () => {
    
    if (input.value >= 1 && input.value <= 20) {
        if (input.value > guess) {
            counter +=1;
            span.innerText = counter; 
            document.querySelector("h2").innerText = "Too high! Guess lower instead";
        } else if (input.value < guess) {
            counter +=1;
            span.innerText = counter; 
            document.querySelector("h2").innerText = "Too low! Guess lower instead";
        } else {
            counter +=1;
            span.innerText = counter;
            document.querySelector("h2").innerText = `Nice! You have guessed the number in ${counter} guesses`;
            document.querySelector("button").remove();
        }
    } else {
        document.querySelector("h2").innerText = "Please guess a number between 1 and 20";
    }
    
})
