var colors = generateRandomColors(6);


var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");

colorDisplay.textContent = pickedColor;


for(var i = 0; i < squares.length; i++){
    //add initial colors to squares
    squares[i].style.background = colors[i];

    //add click listeners to squares
    squares[i].addEventListener("click", function(){
     //grab color on clicked squares
     var clickedColor = this.style.background;
     //compare color to pickedColor
    if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct!";
        changeColors(clickedColor);
        h1.style.background = clickedColor;
    } else {
        this.style.background = "black";
        messageDisplay.textContent = "Try Again"
    
    }
});
}

function changeColors(color) {
//loop through all square
for (var i = 0; i < squares.length; i++){
    //change each color to the given color
squares[i].style.background = color;
}
}

function pickColor(){
    //pick a random number
    var random = Math.floor(Math.random() * colors.length)
    return colors[random];
    //use the number to pick the random color
}

function generateRandomColors(num){
    //make an array
    var arr = []
    //repeat num times
    for(var i = 0; i < num; i++){
    //get random color and push into arr
    arr.push(randomColor())
    }
    //return the array
    return arr;
}
function randomColor(num){
    //pick a "red" from 0 -255
    var r = Math.floor(Math.random() * 256)
    //pick a "green" from 0 -255
    var g = Math.floor(Math.random() * 256)
    //pick a "blue" from 0 -255
    var b = Math.floor(Math.random() * 256)
    // "rgb (r, g, b)"
    return "rgb(" + r + ", " + g + ", " + b + ")";
}