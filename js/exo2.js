let results = {
    nbYes: 0,
    nbNo: 0,
  };
  
  const init = function() {
  
    console.log('init');
  
    const btnY = document.querySelector('#yes');
    const btnN = document.querySelector('#no');
  
    btnY.addEventListener('click', increaseYes);
    btnN.addEventListener('click', increaseNo);
  };
  
  function increaseYes() {
  
    console.log('J ai voté oui');
    results.nbYes++;
  
    document.querySelector('#counter-yes').textContent = results.nbYes;
  }
  
  function increaseNo() {
  
    console.log('J ai voté non');
    results.nbNo++;
    
    document.querySelector('#counter-no').textContent = results.nbNo;
  }
  
  // Pour éviter tout problèmes et pour avoir une cohérence dans
  // l'execution de notre code
  // on demande à notre navigateur web de surveiller la fin
  // de génération de la page pour lancer l'execution de notre
  // fonction init
  document.addEventListener('DOMContentLoaded', init);