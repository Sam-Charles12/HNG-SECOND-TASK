const colorDisplay = document.getElementById("Display-box");
const buttons = document.querySelectorAll('.g-btn');
const scoreDisplay = document.getElementById('score');
const word = document.getElementById('word');
let score = 0;

const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange'];

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}
  
function assignColors() {
    const targetColor = getRandomColor();
    colorDisplay.style.backgroundColor = targetColor;
  

    buttons.forEach(button => {
      button.style.backgroundColor = getRandomColor();
    });
  
    const randomButtonIndex = Math.floor(Math.random() * buttons.length);
    buttons[randomButtonIndex].style.backgroundColor = targetColor;
}
function checkGuess(event) {
    const guessedColor = event.target.style.backgroundColor;
    const targetColor = colorDisplay.style.backgroundColor;
  
    if (guessedColor === targetColor) {
      score++;
      scoreDisplay.textContent = `${score}`;
      document.getElementById("word").innerHTML= "CORRECT";
      document.getElementById("word").style.color= "darkgreen";
      word.classList.add("pulse-animate");
      word.addEventListener('animationend', () => {
        word.classList.remove('pulse-animate');
      }, { once: true }); 
    } else {
        document.getElementById("word").innerHTML= "WRONG";
        document.getElementById("word").style.color= "red";
        word.classList.add("pulse-animate");
        word.addEventListener('animationend', () => {
            word.classList.remove('pulse-animate');
          }, { once: true }); 
    }
    resetGame();
}
  

function resetGame() {
    assignColors();
}
  
buttons.forEach(button => {
    button.addEventListener('click', checkGuess);
});
  
  assignColors();

let targetColor = getRandomColor();
colorDisplay.style.backgroundColor = targetColor;

function replay(){
    window.location.reload();
}
