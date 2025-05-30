let clickCount = 0;
const caca = document.getElementById("caca");
const secret = document.getElementById("secretMessage");

document.getElementById("vache").addEventListener("click", () => {
  clickCount++;

  // Afficher le caca si caché
  if (caca.classList.contains("hidden")) {
    caca.classList.remove("hidden");
  }

  // Augmenter la taille du caca à chaque clic
  const newSize = 30 + clickCount * 10;
  caca.style.width = `${newSize}px`;

  // Débloquer le message à 10 clics
  if (clickCount === 10) {
    secret.classList.remove("hidden");
  }
});
