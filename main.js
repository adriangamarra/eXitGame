const textElement = document.getElementById('text-questions');
const userTextBoxElement = document.getElementById('user-text-box');

let currentStep = 1;

// Listen for Enter key to trigger the answer check
userTextBoxElement.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        checkAnswer();
    }
});

function stepOne(input) {
    if(["i walk to it" , "i get closer", "walk towards the cave" , "walk to it"].includes(input)) {
        textElement.innerText = "Inside the cave, you see a small figure in the corner. What do you do?";
        currentStep = 2;
    } else if (input === "i walk away") {
        textElement.innerText = "You walk away and die from the heat.";

        setTimeout(() => {
            textElement.innerText = "Game Over. Try Again.";

            setTimeout(() => {
                textElement.innerText = "You find yourself in a vast desert. In the distance, about 100 feet ahead, you see a dark cave. What do you do?";
                currentStep = 1;
            }, 3000);

        }, 2000);
    } else {
        showTryAgainMessage();
    }
        
}

function stepTwo(input) {
    if (["i run away" , "run", "leave" , "run away" , "walk away" , "i walk away" , "walk"].includes(input)){
        textElement.innerText = "You run off... and then look back. The cave is gone. What do you do?";
        currentStep = 3;
    } else if (["i approach it", "i look at it"].includes(input)) {
        textElement.innerText = "The figure turns its head slowly... It's watching you.";
        currentStep = 4;
    }
    else {
        showTryAgainMessage();
    }
}

// stepThree is a deadEnd 
function stepThree(input) {
    if (["walk", "walk back to it", "look around"].includes(input)) {
      textElement.innerText = "You wander through the desert, unsure if you're going in circles...";
    
    
    setTimeout(() => {
        textElement.innerText = "You feel very tired , your eyes are closing.....";
    

    setTimeout(() => {
        textElement.innerText = "Game Over. Try Again.";
    
    setTimeout(() => {
        textElement.innerText = "You find yourself in a vast desert. In the distance, about 100 feet ahead, you see a dark cave. What do you do?";
        currentStep = 1 ;
    } , 3000);
    }, 2500);
    }, 2500);
    }   
    else {
      showTryAgainMessage();
    }
  }

  function stepFour (input) {

  }

function checkAnswer() {
    const input = userTextBoxElement.value.trim().toLowerCase();

    if (currentStep === 1) {
        stepOne(input);
    } 
    else if (currentStep === 2) {
        stepTwo(input);
    }
    else if (currentStep === 3) {
        stepThree(input);
      }
    else if (currentStep === 4){
        stepFour(input)
    }
    




    userTextBoxElement.value = "";
}

function showTryAgainMessage() {
    const previousText = textElement.innerText;
    textElement.innerText = "Nothing happens. Try something else.";
  
    setTimeout(() => {
      textElement.innerText = previousText;
    }, 2000);
  }
// Start the game
textElement.innerText = "You find yourself in a vast desert. In the distance, about 100 feet ahead, you see a dark cave. What do you do?";
