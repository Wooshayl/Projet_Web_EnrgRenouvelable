let clickCount = 0;

document.getElementById("biomasseImage").addEventListener("click", function () {
  clickCount++;
  if (clickCount === 10) {
    document.getElementById("secretText").classList.remove("hidden");
  }
});
