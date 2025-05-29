let currentColonne = 0;

function ajouterEau() {
  const colonnes = [
    document.querySelector('.colonne1'),
    document.querySelector('.colonne2'),
    document.querySelector('.colonne3')
  ];

  if (currentColonne < colonnes.length) {
    colonnes[currentColonne].style.height = "100%";
    currentColonne++;
  }

  if (currentColonne === colonnes.length) {
    document.getElementById("content").style.display = "block";
  }
}
