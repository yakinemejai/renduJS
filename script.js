//  Faire le HTML - structure (header, main et footer, nav avec lien cliquable)

//ETAPE 1 : construire l'URL de L'API



        // ETAPE 2 : Parcourir le tableau JSON (mettre le fetch)
        fetch("Menuiserie Bobois.json")
  .then(response => response.json())
  .then(data => {

    // verifier si ca marche ou pas 

console.log();

        // Etape 3 : nom de l'entreprise (h1), 

        // slogan (H2) et les boutons


        // ETAPE 4 : Pour chaque élement du tableau "réalisation"créer une DIV

        // - Créer un titre (h3) pour afficher le nom

        // - Créer un paragraphe (p) pour la description

        // - Créer un élément image (img) pour afficher la photo

        // ETAPE 5 : Envoyer dans le HTML les élements crées (appenchild)

        // ETAPE 6 : Pour chaque élement du tableau "témoignages"créer une DIV

        // - Créer un titre (h3) pour afficher le prénom

        // - Créer un titre (h4) pour afficher le type de prestation

        // - Créer un paragraphe (p) pour les commentaires

        // ETAPE 7 : Envoyer dans le HTML les élements crées (appenchild)




          });
      