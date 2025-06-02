// Compteur et éléments
let clickCount = 0;
const maxClicks = 10;
const caca = document.getElementById("caca");
const content = document.getElementById("content");

// Clic sur la vache
document.getElementById("vache").addEventListener("click", () => {
  if (clickCount < maxClicks) {
    clickCount++;

    // Affiche le caca au premier clic
    if (caca.classList.contains("hidden")) {
      caca.classList.remove("hidden");
    }

    // Agrandit progressivement le caca
    const newSize = 30 + clickCount * 10;
    caca.style.width = `${newSize}px`;

    // Une fois le max atteint, affiche le contenu
    if (clickCount === maxClicks) {
      content.style.display = "block";

      // Scroll fluide vers le contenu
      setTimeout(() => {
        content.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);

      // Effet final optionnel
      caca.classList.add('completed');
    }
  }
});
