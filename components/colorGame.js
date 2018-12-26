var numOfSquares = (6);
var colors = generateRandomColors(numOfSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easy-btn");
var hardButton = document.querySelector("#hard-btn");

easyButton.addEventListener("click", function(){
    easyButton.classList.add("selected");
    hardButton.classList.remove("selected");
    numOfSquares = (3);
    colors = generateRandomColors(numOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        if (colors[i]){
            squares[i].style.background = colors[i]
        } else {
            squares[i].style.display = "none";
        }
    }

    h1.style.background = "steelblue"
    messageDisplay.textContent = '';
})

hardButton.addEventListener("click", function(){
    hardButton.classList.add("selected");
    easyButton.classList.remove("selected");
    numOfSquares = (6); 
    colors = generateRandomColors(numOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
            squares[i].style.background = colors[i]
            squares[i].style.display = "block";
        }
    h1.style.background = "steelblue"
    messageDisplay.textContent = '';
})


resetButton.addEventListener("click", function(){
    //reload the page
    this.textContent = 'new colors'
    //generate all new colors
    colors = generateRandomColors(numOfSquares);

    //pick a new random color for array
    pickedColor = pickColor();

    //change the color display to match picked color
    colorDisplay.textContent = pickedColor;

    //change color of square
    for(var i = 0; i < squares.length; i++){
        squares[i].style.background = colors[i];
    }

    //change color as the reset button works
    h1.style.background = "steelblue"

    messageDisplay.textContent = '';
})

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
        resetButton.textContent = "Play Again?";
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