(function () {

    var aDeviner = Math.round(Math.random() * 10);
    var tentative = 3;
    var essai;
    for (var i = 0; i < 3; i++) {
        if (i == 0) {
            essai = prompt('Entrez votre chiffre');
        } else {
            essai = prompt('Retentez votre chance');
        }
        essai = parseInt(essai, 10);
        if (essai == aDeviner) {
            break;
        } else if (essai > aDeviner) {
            alert('Trop haut')
        } else {
            alert('Trop bas')
        }
    }

    if (essai == aDeviner) {
        alert('Bravo')
    } else {
        alert('Perdu')
    }
    /* var essai = window.prompt('Entrez votre chiffre');
    essai = parseInt(essai, 10);
    while (essai != aDeviner && tentative > 0) {
        tentative--;
        if (essai > aDeviner) {
            alert('Au dessus !')
        } else {
            alert('En dessous !')
        }
        if (tentative > 0)
        essai = window.prompt('Retentez votre chance');
    }
    if (essai == aDeviner) {
        alert('Bravo !')
    } else {
        alert('Perdu!');
    } */

    /*
    On chosit un chiffre RANDOM
    DEMANDE à l'utilistateur de rentrer un chiffre
    SI le chiffre est bon ALORS
        ALERT bravo
    SINON
        SI le chiffres est au dessus
            ALERT au dessus
        SINON
            ALERT en dessous
        DEMANDE à l'utilisateur de rentrer un chiffre

    On choisit un chiffre RANDOM
    DEMANDE à l'utilisateur de rentrer un chiffre
    TANT QUE le chiffre n'est pas bon
        SI  le chiffre est au dessus
            ALERT au dessus
        SINON 
            ALERT en dessous
        DEMANDE à l'utilisateur de rentrer un chiffre
    FIN TANT QUE
    ALERT success
    */

})();

