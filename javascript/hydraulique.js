let currentColonne = 0;

function ajouterEau() {
  const colonnes = [
    document.querySelector('.colonne1'),
    document.querySelector('.colonne2'),
    document.querySelector('.colonne3')
  ];

  // Active une colonne à chaque appel
  if (currentColonne < colonnes.length) {
    colonnes[currentColonne].style.height = "100%";
    currentColonne++;
  }

  // Affiche le contenu quand toutes les colonnes sont remplies
  if (currentColonne === colonnes.length) {
    document.getElementById("content").style.display = "block";
  }
}
