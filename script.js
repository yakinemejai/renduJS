// ===== ÉTAPE 1 : Cree l'html  =====


// ===== ÉTAPE 2: construire l'URL de L'API  =====

// ===== ÉTAPE 3: reupere les donnees (fetch) ficher json =====
fetch("TroVit - VTC Grenoble.json")
  .then(response => response.json())
  .then(data => {
// je dois coder a l'intérieur du fetch 
   });

 // ===== ÉTAPE 4: tester si ca marche ou pas 
 console.log(data.VTC);

 // ===== ÉTAPE 5:  parcourir la liste (data.VTC.forEach(element =>)

  // ===== ÉTAPE  6 : pour chaque voyage : (creat elemente )
    // a- Créer un titre (h3) pour afficher le nom
    // b- Créer un paragraphe (p)
    // c- Créer un titre (h4)
    // d- 
 // ===== ÉTAPE  7 : Créer une div (card) pour englober les elements qui suivent