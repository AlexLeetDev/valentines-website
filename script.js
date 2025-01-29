// Function to generate random hearts around the site
function generateHeart() {
  const heart = document.createElement('span'); // Create a heart element
  heart.classList.add('heart'); // Add a class to the heart for styling
  heart.textContent = '❤️'; // Set the heart content

  // Randomize position
  const randomX = Math.random() * window.innerWidth; // Random horizontal position
  const randomY = Math.random() * window.innerHeight; // Random vertical position
  heart.style.left = `${randomX}px`;
  heart.style.top = `${randomY}px`;

  // Randomize size
  const randomSize = Math.random() * 2 + 1; // Between 1x and 3x
  heart.style.transform = `scale(${randomSize})`;

  // Append the heart to the body
  document.body.appendChild(heart);

  // Remove the heart after 4 seconds
  setTimeout(() => {
    heart.remove();
  }, 4000);
}

// Trigger random heart generation every 500ms
setInterval(generateHeart, 500);

// Handle "Yes" Button Click
document.querySelector('.button').addEventListener('click', function (event) {
  event.preventDefault(); // Prevent default link behavior
  document.body.innerHTML = `
    <h1>Thank You!</h1>
    <p>You just made my day. I’m so glad you said yes! 💖</p>
    <div class="heart-container">
      <span class="heart">❤️</span>
    </div>
  `;
});
