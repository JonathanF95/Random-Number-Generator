const count = document.querySelector('.count');
const generate = document.querySelector('.generate');
let message = document.querySelector('h3');
const reset = document.querySelector('.reset');
let array = [];
let random;
let isUnique;

generate.addEventListener('click', () => {
    if (array.length === 100) {
        message.textContent = "All numbers have been generated";
        return; // Stop generating new numbers if the limit is reached
    }

    random = randomNum();
    isUnique = false;

    while (!isUnique) {
        if (!array.includes(random)) {
            array.push(random);
            count.innerHTML = random;
            isUnique = true;
        } else {
            random = randomNum();
        }
    }

    if (array.length === 100) {
        message.textContent = "All numbers have been generated";
    } else {
        message.textContent = "";
    }
    console.log(array);
});


reset.addEventListener('click', () =>{
    count.innerHTML = 0;
    array = [];
    console.log(array);
    isUnique = true;
    message.textContent = "";
})

function randomNum() {
    return Math.floor(Math.random() * 100 + 1);
}

