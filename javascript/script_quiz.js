function corrigerQuiz() {
  let score = 0;

 const bonnesReponses = ["2", "1", "3"];
  for (let i = 1; i <= 3; i++) {
    const rep = document.querySelector(`input[name="q${i}"]:checked`);
    if (rep && rep.value === bonnesReponses[i - 1]) {
      score++;
    }
  }


  const bonnesCheckboxes = ["solaire", "eolienne", "hydraulique"];
  const checkboxes = document.querySelectorAll('input[name="q4"]:checked');
  checkboxes.forEach(cb => {
    if (bonnesCheckboxes.includes(cb.value)) score += 0.5;
    else score -= 0.25;
  });

  const reponseTexte = document.querySelector('input[name="q5"]').value.toLowerCase();
  const motsCles = ["écologique", "durable", "propre", "renouvelable", "non polluante", "gratuite"];
  motsCles.forEach(mot => {
    if (reponseTexte.includes(mot)) score += 0.5;
  });


  const resultat = document.getElementById("resultat");
  resultat.textContent = `Votre score est : ${score.toFixed(1)} / 6`;
}
