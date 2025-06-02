let cloudCount = 5;

// Supprime visuellement un nuage et affiche le contenu après le dernier
function removeCloud(cloud) {
  cloud.style.transition = "opacity 0.5s ease-out, transform 0.5s ease-out";
  cloud.style.opacity = "0";
  cloud.style.transform = "scale(0.5)";
  cloud.style.pointerEvents = "none";

  cloudCount--;

  if (cloudCount === 0) {
    setTimeout(() => {
      document.getElementById("content").style.display = "block";
    }, 500);
  }
}
