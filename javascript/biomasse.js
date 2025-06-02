let clickCount = 0;
const maxClicks = 10; // Define the maximum number of clicks needed
const caca = document.getElementById("caca");
const content = document.getElementById("content");

document.getElementById("vache").addEventListener("click", () => {
  // Only increment clicks if we haven't reached the maximum
  if (clickCount < maxClicks) {
    clickCount++;
  
    // Afficher le caca si caché
    if (caca.classList.contains("hidden")) {
      caca.classList.remove("hidden");
    }

    // Augmenter la taille du caca jusqu'à la limite
    const newSize = 30 + clickCount * 10;
    caca.style.width = `${newSize}px`;
  
    // Afficher le contenu quand on atteint le nombre requis de clics
    if (clickCount === maxClicks) {
      content.style.display = "block";
      
      // Scroll to the content
      setTimeout(() => {
        content.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
      
      // Optional: Add a completion effect
      caca.classList.add('completed');
    }
  }
});