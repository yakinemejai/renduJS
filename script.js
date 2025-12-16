//  Faire le HTML - structure (header, main et footer, nav avec lien cliquable)

//ETAPE 1 : construire l'URL de L'API
const API_URL = `https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/menuiserie.json`;




// ETAPE 2 : Parcourir le tableau JSON (mettre le fetch)
fetch(API_URL)
    .then(response => response.json())
    .then(data => {

        // verifier si ca marche ou pas 
        console.log(data.realisations);


        data.realisations.forEach(element => {

            // Etape 3 : nom de l'entreprise (h1),slogan (H2) et les boutons



            // ETAPE 4 : Pour chaque élement du tableau "réalisation"créer une DIV


            // - Créer un titre (h3) pour afficher le nom
            let title = document.createElement("h3");
            title.textContent = element.title
            console.log(title);
            // - Créer un paragraphe (p) pour la description
            let paragraphe = document.createElement("p");
            paragraphe.textContent = element.description
            console.log(paragraphe);


            // - Créer un élément image (img) pour afficher la photo

            let image = document.createElement("img");
            image.src = element["image-url"];
            console.log(image);


            // ETAPE 5 : Envoyer dans le HTML les élements crées (appenchild)

            //  .appendChild();
            //   .appendChild();
            //   .appendChild();
            //   .appendChild();

        });
        // ETAPE 6 : Pour chaque élement du tableau "témoignages"créer une DIV
        data.temoignages.forEach(temoi => {



            // - Créer un titre (h3) pour afficher le prénom
            let name = document.createElement("h3")
            name.textContent = temoi.prenom
            console.log(name);
            
            // - Créer un titre (h4) pour afficher le type de prestation
            let presta = document.createElement("h4")
            presta.textContent = temoi.typePrestation
console.log(presta);


            // - Créer un paragraphe (p) pour les commentaires
          
let commantaire = document.createElement("p")
commantaire.textContent = temoi.note
console.log(commantaire);

            // ETAPE 7 : Envoyer dans le HTML les élements crées (appenchild)
            


            
              //  .appendChild(img);
            //   .appendChild(title);
            //   .appendChild(priceElt);
            //   .appendChild(desc);

        });

    });
