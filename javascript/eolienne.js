function demarrerEolienne() {
  const pales = document.getElementById("palmes");

  // Reset animation
  pales.classList.remove("spin");
  void pales.offsetWidth; 
  pales.classList.add("spin");

  // Affiche contenu après 5s
  setTimeout(() => {
    document.getElementById("content").style.display = "block";
  }, 3500);
}
