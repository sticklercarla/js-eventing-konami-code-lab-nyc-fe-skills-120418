const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let tracker = 0 

const checkKeyCode = () => {
  //we need to know where we are in the sequence
  const whatTheyPressed = event.keyCode 
  if (whatTheyPressed === code[tracker]) {
    tracker += 1
  } else {
    tracker = 0 
  }
  if (tracker === 10) {
    alert("You won, yay!")
  }
  console.log(tracker)
}

function init() {
  // Write your JavaScript code inside the init() function
document.addEventListener('keydown', checkKeyCode)
}

init()