// 1. Select DOM elements
const apolloBtn = document.getElementById('apollo-btn');
const nebulaBtn = document.getElementById('nebula-btn');
const cometBtn = document.getElementById('comet-btn');

const apolloRocket = document.getElementById('apollo-rocket');
const nebulaRocket = document.getElementById('nebula-rocket');
const cometRocket = document.getElementById('comet-rocket');

const modal = document.getElementById('winner-modal');
const modalText = document.getElementById('modal-text');
const resetBtn = document.getElementById('reset-btn');

// 2. Game State
let positions = {
  apollo: 0,
  nebula: 0,
  comet: 0
};

let gameActive = true;
const WINNING_DISTANCE = 90; // The rocket needs to reach 90% of the track width
const STEP = 5; // How much % the rocket moves per click

// 3. Helper Function to Move Rocket
function moveRocket(rocketName, rocketElement) {
  if (!gameActive) return; // Stop buttons from working if game is over

  // Increment position
  positions[rocketName] += STEP;

  // Apply visual change (using percentage for responsiveness)
  rocketElement.style.left = positions[rocketName] + '%';

  // Check for win
  if (positions[rocketName] >= WINNING_DISTANCE) {
    declareWinner(rocketName);
  }
}

// 4. Function to Declare Winner
function declareWinner(winnerName) {
  gameActive = false;
  // Capitalize the first letter for the text
  const formattedName = winnerName.charAt(0).toUpperCase() + winnerName.slice(1);
  modalText.textContent = `${formattedName} wins the race! 🎉`;
  modal.classList.remove('hidden');
}

// 5. Function to Reset Game
function resetGame() {
  // Reset positions in data
  positions = { apollo: 0, nebula: 0, comet: 0 };
  
  // Reset positions visually
  apolloRocket.style.left = '0%';
  nebulaRocket.style.left = '0%';
  cometRocket.style.left = '0%';

  // Reset Game State
  gameActive = true;
  modal.classList.add('hidden');
}

// 6. Event Listeners
apolloBtn.addEventListener('click', () => moveRocket('apollo', apolloRocket));
nebulaBtn.addEventListener('click', () => moveRocket('nebula', nebulaRocket));
cometBtn.addEventListener('click', () => moveRocket('comet', cometRocket));

resetBtn.addEventListener('click', resetGame);
// 1. Find the button
const btn = document.getElementById('apollo-btn');

// 2. Tell it to listen for a click
btn.addEventListener('click', function() {
  // 3. Move the rocket
});