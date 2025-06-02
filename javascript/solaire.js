let cloudCount = 5;

// Supprime visuellement un nuage et affiche le contenu après le dernier
function removeCloud(cloud) {
  cloud.style.transition = "opacity 0.5s ease-out, transform 0.5s ease-out";
  cloud.style.opacity = "0";
  cloud.style.transform = "scale(0.5)";
  cloud.style.pointerEvents = "none";

  cloudCount--;

  if (cloudCount === 0) {
    const content = document.getElementById("content");

    setTimeout(() => {
      content.style.display = "block";

      // Scroll fluide vers le contenu juste après affichage
      setTimeout(() => {
        content.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }, 500);
  }
}