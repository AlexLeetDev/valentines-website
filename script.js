// Function to generate random hearts around the site
function generateHeart() {
  const heart = document.createElement('span'); // Create a heart element
  heart.classList.add('heart'); // Add a class to the heart for styling
  heart.textContent = '❤️'; // Set the heart content

  // Ensure hearts stay within viewport boundaries
  const maxX = window.innerWidth - 30; // Avoid overflow on right edge
  const maxY = window.innerHeight - 30; // Avoid overflow on bottom edge
  const randomX = Math.random() * maxX; // Random horizontal position
  const randomY = Math.random() * maxY; // Random vertical position

  heart.style.left = `${randomX}px`;
  heart.style.top = `${randomY}px`;
  heart.style.position = "fixed"; // Prevents hearts from causing page movement

  // Randomize size
  const randomSize = Math.random() * 1.5 + 0.5; // Between 0.5x and 2x for better balance
  heart.style.transform = `scale(${randomSize})`;

  // Append the heart to the body
  document.body.appendChild(heart);

  // Remove the heart after 4 seconds
  setTimeout(() => {
    heart.remove();
  }, 4000);
}

// Limit number of hearts on screen to prevent performance issues
let heartInterval = setInterval(() => {
  if (document.querySelectorAll('.heart').length < 20) { // Limit max 20 hearts
    generateHeart();
  }
}, 500);

// Handle "Yes" Button Click
document.querySelector('.button').addEventListener('click', function (event) {
  event.preventDefault(); // Prevent default link behavior

  // Stop generating hearts after button is clicked
  clearInterval(heartInterval);

  // Set the thank you message inside the popup
  const popupContent = document.querySelector('.popup-content');
  popupContent.innerHTML = `
    <h2>Thank You!</h2>
    <p>You just made my day. I’m so glad you said yes! 💖</p>
    <div class="heart-container">
      <span class="heart">❤️</span>
    </div>
    <a href="#" class="close-button">Close</a>
  `;

  // Show the pop-up modal
  document.getElementById('popup').style.display = 'flex';
});

// Close the popup when "Close" button is clicked
document.addEventListener('click', function (event) {
  if (event.target.classList.contains('close-button')) {
    document.getElementById('popup').style.display = 'none'; // Hide the popup
  }
});