function demarrerEolienne() {
  const pales = document.getElementById("palmes");

  // Relance propre de l'animation
  pales.classList.remove("spin");
  void pales.offsetWidth; 
  pales.classList.add("spin");

  // Affiche le contenu après 3 secondes puis scroll
  setTimeout(() => {
    content.style.display = "block";
    content.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 3000);
}