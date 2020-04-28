document.getElementById('myBtnReset').addEventListener('click', () => {
    document.getElementById('phrase').innerHTML = '';
  });
  
  document.getElementById('myBtn').addEventListener('click', () => {
    document.getElementById('phrase').innerHTML = '';
    document.getElementById('loader').style.display = 'block';
    document.getElementById('loader1').style.display = 'block';
  
    setTimeout(() => {
      const answers = ['oui', 'non', 'jamais', 'demain', 'peut-être', "l'année prochaine", 'un peu de patience',
        'bientôt', 'demande à un autre voyant', "certainement, ... c'était une blague", 'même pas en rêve',
        'reformule ta question', "pas pour l'instant", "c'est possible mais n'espèrez pas trop", 'presque, occasion ratée'];
      const randomAnswers = answers[Math.floor(Math.random() * answers.length)];
   
      document.getElementById('loader').style.display = 'none';
      document.getElementById('loader1').style.display = 'none';
      document.getElementById('phrase').innerHTML = randomAnswers;
    }, 2000);
  });
