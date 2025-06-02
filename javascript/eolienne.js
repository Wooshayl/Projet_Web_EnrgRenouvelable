function demarrerEolienne() {
  const pales = document.getElementById("palmes");

  // Relance propre de l'animation
  pales.classList.remove("spin");
  void pales.offsetWidth; 
  pales.classList.add("spin");

  // Affiche le contenu après 3.5 secondes
  setTimeout(() => {
    document.getElementById("content").style.display = "block";
  }, 3500);
}
