// Cela permet d'empêcher tout code jQuery de s'exécuter avant que le document ne soit chargé (est prêt).
$(function(){
  // -------- AU CHARGEMENT DE LA PAGE --------------
  // Je stock dans maxNumber et minNumber le chiffre maximum et minimum à trouver
  var maxNumber = 100;
  var minNumber = 1;

  // Je stock dans la variable justePrix le chiffre à trouver par le joueur
  var justePrix = Math.floor(Math.random() * (maxNumber + 1) + minNumber); //Grâce à ce calcul le chiffre sera définis aléatoirement
  console.log(justePrix);
  //Je définie une variable counter à 0
  var counter = 0;
  // -------- AU CLIC SUR LE BOUTON --------------
  $('#verify').click(function(){
    // A chaque clic sur le bouton #verify j'incrémente de 1 (+1) ma variable counter
    counter++;
    console.log(counter);
    //je récupère la valeur du champs
    // Je stock dans la variable chiffreUser la valeur de mon input #number
    var chiffreUser = $('#number').val();

    //je compare mes 2 chiffres (le vrai prix et la proposition de l'utilisateur)
    if(chiffreUser == justePrix){ //Si le chiffreUser est égal au justePrix
      //J’affiche une alert avec le message "Bravo"
      alert('Bravo ! Tu as trouvé le juste prix en ' + counter + ' fois');
    } else if (chiffreUser > justePrix) { //Ou si chiffreUser est supérieur au justePrix
      // J’affiche une alert avec le message "C’est moins"
      alert('C\'est moins');
    } else { //Sinon
      // J’affiche une alert avec le message "C'est plus"
      alert('C\'est plus');
    }

  });
});
