//when the image is clicked, increase the count by one
//const img, const count


//when it reaches 5, change the bg colour to pink and make the reset btn visable
//const count, bg colour, const reset btn


//when it reaches 25, give the use option to 2x
//const counter, const 2x button

const img = document.getElementById("cookie_img");
const body = document.body;
const counter = document.getElementById("count");
const resetBtn = document.getElementById("restart");
const doubleBtn = document.getElementById("double");

counter.innerText = 0;

img.addEventListener("click", function(e){
    counter.innerText ++;

    if (counter.innerText > 5 && counter.innerText < 25) {
        body.style.backgroundColor = "pink";
        resetBtn.removeAttribute("hidden");
    } 
    else if (counter.innerText > 24) {
        doubleBtn.removeAttribute("hidden");
    }
})

doubleBtn.addEventListener("click", function(e){
    counter.innerText = counter.innerText*2;
})

resetBtn.addEventListener("click", function(e) {
    counter.innerText = 0;
    body.style.backgroundColor = "white";
    resetBtn.setAttribute("hidden", "");
})