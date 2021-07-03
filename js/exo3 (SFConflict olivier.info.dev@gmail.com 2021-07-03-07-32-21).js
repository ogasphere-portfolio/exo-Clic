const init = () => {
    console.log("init");

    const itemForm = document.querySelector("#shop-item-form");

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

  const inputValue = getInputValue();
  //const liste = setListe(inputValue);
  const myColor = setColor(inputValue);

  console.log(event);
}

function getInputValue() {
  const input = document.querySelector("#shop-item-input");

  // On récupère la valeur inscrite dans l'input
  let value = input.value;

  // On nettoie notre valeur en lui supprimant les espaces en début & fin de chaine
  value = value.trim();

  if (value == "") {
    console.log("Veuillez saisir un produit.");
    return value;
  } else {
    return value;
  }
}

function setListe(produit) {
  if (produit !== "") {
    const input = document.querySelector("#shop-items");
    const listeItem = document.createElement("li");
    listeItem.textContent = produit;
    input.appendChild(listeItem);
  }
}

function setColor(couleurHex) {

    if (controlColor(couleurHex)  ) {

        // si on a retourné le bon format pour la couleur on 
        // l'affiche dans le DOM
        const input = document.querySelector("#shop-items");
        const listeItem = document.createElement("li");
        listeItem.style.color = couleurHex;
        listeItem.textContent = couleurHex;
        console.log (listeItem,'  '+couleurHex);
        input.appendChild(listeItem);
    }
}

function controlColor(couleurHex){

    // On verifie que le nombre de carateres soit egal à 4 ou 7
    // et que la chaine commence par '#'

    let bReturn = false;
    const myColor = String(couleurHex) ;
    if ((myColor.length == 4 || myColor.length == 7 ) && myColor[0]=="#" ) {
        console.log(myColor.length);
        
        let msgErreur = document.querySelector("#shop pre");
        if (msgErreur !== null) {
            msgErreur.remove();
        } 
        bReturn = true;
    
    }else{
    
        // sinon on affiche un message d'erreur

        const input = document.querySelector("#shop");
        const msgErreur = document.createElement("pre");
        console.log(msgErreur);
        
        // ToDo
        // tester l'existence de <pre></pre> 
        // si il n'existe pas on affiche le message
            console.log(msgErreur);
            msgErreur.style.color = 'red';
            msgErreur.textContent = 'ceci n\'est pas une couleur';
            input.appendChild(msgErreur);
            
       
    }
    return bReturn ;
}



document.addEventListener("DOMContentLoaded", init);
