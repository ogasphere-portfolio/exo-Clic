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
  const liste = setListe(inputValue);
  

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

document.addEventListener("DOMContentLoaded", init);
