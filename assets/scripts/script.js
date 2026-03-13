// Sélectionne tous les éléments avec la classe "animal" et ajoute un écouteur d'événement pour les clics
const animal = document.querySelectorAll(".animal");
console.log(animal);

// Ajoute un écouteur d'événement de clic à chaque élément "animal" pour appeler la fonction nourrirAnimal
animal.forEach(function (element) {
    element.addEventListener("click", nourrirAnimal);
});

// Gestion de la sélection/désélection (Ton code original préservé)
const animalselected = [];

animal.forEach(function (element) {
    element.addEventListener("click", function () 
    {
        const nomAnimal = this.innerText || this.id; 
        const indice = animalselected.indexOf(this);
        if (indice === -1) 
        {
            animalselected.push(this);
            console.log("Animal sélectionné : " + nomAnimal);
            this.classList.add("selected");
        } 
        else 
        {
            animalselected.splice(indice, 1);
            console.log("L'animal a été désélectionné : " + nomAnimal);
            this.classList.remove("selected");
        }
        console.log("Liste actuelle :", animalselected);
    });
});

// Sélection des éléments UI
const compteur = document.getElementById("compteur");
const ajouterNourriture = document.getElementById("ajouterNourriture");
const message = document.getElementById("message");

// Bouton ajouter nourriture
button.addEventListener("click", function () {
    compteur.innerText = parseInt(compteur.innerText) + 1;
    console.log("Notre compteur de nourriture : " + compteur.innerText);
    message.innerText = "Nourriture ajoutée ! 🍎";
});

// --- TA FONCTION NOURRIR MODIFIÉE POUR L'ANIMATION ---
function nourrirAnimal() {
    // On vérifie si l'animal vient d'être sélectionné (s'il possède la classe "selected")
    if (this.classList.contains("selected")) {
        if (parseInt(compteur.innerText) > 0) {
            compteur.innerText = parseInt(compteur.innerText) - 1;
            
            // On ajoute l'animation d'explosion 💥
            this.classList.add("animate-miam");
            
            message.innerText = "L'animal " + this.innerText.trim() + " est nourri ! 🍖😋";
            console.log("BOOM ! 💥 Animal nourri : " + this.innerText.trim());

            // On retire la classe d'animation après 500ms pour pouvoir recommencer
            setTimeout(() => {
                this.classList.remove("animate-miam");
            }, 500);
        } else {
            message.innerText = "Pas de nourriture disponible ! ❌";
        }
    } else {
        // Optionnel : message si on clique sur un animal qu'on vient de désélectionner
        message.innerText = "Animal désélectionné. Cliquez pour le choisir !";
    }
}