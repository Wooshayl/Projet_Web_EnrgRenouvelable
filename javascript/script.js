let clickCount = 0;

// Dévoile un texte secret après 10 clics sur l'image
document.getElementById("biomasseImage").addEventListener("click", function () {
  clickCount++;
  if (clickCount === 10) {
    document.getElementById("secretText").classList.remove("hidden");
  }
});
