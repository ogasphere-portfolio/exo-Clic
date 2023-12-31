const init = () => {
    console.log("init");

    const itemForm = document.querySelector("#colors-form");

    // On branche un exouteur sur l'evenement 'Submit' du formulaire #shop-item-form
    // si il est déclenché on appelle la callBack handleSubmit
    itemForm.addEventListener("submit", handleSubmit);
}

function handleSubmit(event) {
  // Ici j'ai décidé de récuperer mon evenement déclencheur
  // je l'ai stocké dans une variable nommée event

  console.log("mon formulaire a été submit");

  // La fonction preventDefault ici appelée de mon evenement
  // permet de bloquer l'événement !
  // En bloquant l'événement, je bloque les conséquences de celui-ci
  // et donc j'empeche le rechargement de la page !

  event.preventDefault();
  
  //  On récupére la valeur de input du formulaire
  const inputValue = getInputValue();

  // On verifie que le contenu de inputValue soit bien une couleur hexadecimale
  // si oui on affiche la couleur dans une liste 
  // sinon on affiche un messge d'erreur
  const myColor = setColor(inputValue);

  // on supprime le contenu du input 
  const supInput = supprimeInputValue();

}

function getInputValue() {
  const input = document.querySelector("#colors-input");

  // On récupère la valeur inscrite dans l'input
  let value = input.value;

  // On nettoie notre valeur en lui supprimant les espaces en début & fin de chaine
  value = value.trim();
  
  // On vérifie qu'une valeur est saisie
  if (value == "") {
    console.log("Veuillez saisir une couleur.");
    return value;
  } else {
    return value;
  }
}

function setColor(couleurHex) {

    if (controlColor(couleurHex)  ) {

        // si on a retourné le bon format pour la couleur on 
        // l'affiche dans le DOM
        const input = document.querySelector("#colors-list");
        const listeItem = document.createElement("li");
        listeItem.style.color = couleurHex;
        listeItem.textContent = couleurHex;
        console.log (listeItem,'  '+couleurHex);
        input.appendChild(listeItem);
    }
}

function controlColor(couleurHex){

    let bReturn = false;
    const myColor = String(couleurHex) ;

    // On verifie que le nombre de carateres soit egal à 4 ou 7
    // et que la chaine commence par '#'
    if ((myColor.length == 4 || myColor.length == 7 ) && myColor[0]=="#" ) {
        
        // on a bien une couleur hexadécimale
        let msgErreur = document.querySelector("#colors-error");
        
        // si un message d'erreur etait affiché on le supprime
        if (msgErreur !== null) {
            msgErreur.textContent="";
        } 
        bReturn = true;
    
    }else{
    
        // sinon on affiche un message d'erreur
        const msgErreur = document.querySelector("#colors-error");
        msgErreur.style.color = 'red';
        msgErreur.textContent = 'ceci n\'est pas une couleur';
    }

return bReturn ;

}

function supprimeInputValue(){

    const input = document.querySelector("#colors-input");

    // On vide le contenu inscrit dans l'input
    input.value = "";
}

document.addEventListener("DOMContentLoaded", init);
