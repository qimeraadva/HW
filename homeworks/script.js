let display = document.getElementById("displayCount");
let count = 0;

function increment() {
count++;
display.innerHTML = "Number: " + count;
}

function decrement() {
    count--;
    display.innerHTML = "Number: " + count;
    }