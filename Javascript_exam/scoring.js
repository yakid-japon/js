// Après avoir chargé le DOM, exécutez le traitement dans function ().
$(document).ready(function () {
    let cal = "";
    // Logique qui obtient les scores (valeurs d'entrée) de "japonais, anglais, mathématiques, sciences et études sociales" et donne les scores totaux et moyens.
    function score_indicate() {
        // Attribuez un tableau des notes de "japonais, anglais, mathématiques, sciences et études sociales" à la variable "subject_points".

        let subject_points = [Number($('#national_language').val()),
        Number($('#english').val()),
        Number($('#mathematics').val()),
        Number($('#science').val()),
        Number($('#society').val())
        ];
        // Ajoutez les scores de "japonais, anglais, mathématiques, sciences et études sociales" à la variable "somme".
        let sum = subject_points[0];
        if (subject_points[0] >= 0 && subject_points[1] >= 0 && subject_points[2] >= 0 && subject_points[3] >= 0 && subject_points[4] >= 0) {

            sum = sum + subject_points[1];
            sum = sum + subject_points[2];
            sum = sum + subject_points[3];
            sum = sum + subject_points[4];
            //  Faites en sorte que la variable "sum" (score total) soit convertie en "score total :" (id="sum_indicate").
            $("#sum_indicate").text(sum);
            cal = sum;
        } else {
            $("#sum_indicate").text("");
        }


        // Décrivez le processus pour sortir le score moyen de chaque sujet dans "Score moyen :".
        // Conseil : Attribuez la valeur moyenne à la variable "moyenne" (le nombre total de points (somme) du nombre que vous voulez moyenner / le nombre total de pièces).
        // Conseil : Le nombre total d'articles est obtenu en utilisant la méthode de la longueur. (méthode length : méthode permettant d'obtenir la longueur d'une chaîne de caractères, le nombre d'éléments d'un tableau, etc.)
    };
    // Décrivez la logique qui permet d'obtenir la note moyenne et de classer les sujets en "A, B, C ou D" en fonction de la note moyenne obtenue.
    function get_achievement() {
        // A la variable "averageIndicate"
        // Obtenez le score moyen à partir de id="average_indicate" dans le HTML et attribuez-le.
        let averageIndicate = $("#average_indicate").text(cal / 5);
        // Si "averageIndicate" est égal ou supérieur à 80, retournez "A".
        if ((cal / 5) >= 80) {
            return "A";
        } else if ((cal / 5) >= 60) {
            return "B";
        } else if ((cal / 5) >= 40) {
            return "C";
        } else {
            return "D";
        }
        // Si "averageIndicate" est égal ou supérieur à 60, retournez "B".
        // Si "averageIndicate" est égal ou supérieur à 40, retournez "C".
        // retournez "D" sinon.
    };
    // Obtenez le score de chaque sujet, et créez une logique qui classe le sujet en "Réussi" ou "Échoué" en fonction du score obtenu.
    function get_pass_or_failure() {
        let subject_points = [Number($('#national_language').val()),
        Number($('#english').val()),
        Number($('#mathematics').val()),
        Number($('#science').val()),
        Number($('#society').val())
        ];
        // Attribuez le nombre de sujets à la variable "nombre".
        let number = subject_points.length;
        let res = false;
        // Assignez "pass" à la variable "judge".
        for (let index = 0; index < number; index++) {
            if (subject_points[index] < 60) {
                res = true;
            }
        }
        let judge = "Réussi";

        if (res) {
            judge = "Échoué";
        }
        // Si l'un des scores est inférieur à 60 points dans chacun des sujets saisis, le processus de réaffectation de "Rejeté" à la variable "juge" est décrit.
        // Conseil : étudiez le processus d'itération pour les tableaux.
        return judge;
    };
    // Créez la logique pour le juge final.
    function judgement() {
        //  Attribuez la "valeur de retour de get_achievement()" à la variable "achievement".
        let achievement = get_achievement();
        // Attribuez la "valeur de retour de get_pass_or_failure()" à la variable "pass_or_failure".
        let pass_or_failure = get_pass_or_failure();
        // 「Juge final」(id="alert-indicate)Lorsque le bouton est pressé「Ton niveau${achievement}です。${pass_or_failure}です。」est le processus qui envoie.
        $('#declaration').append(`<label id="alert-indicate" class="alert alert-info">Votre note est ${achievement}. Vous avez ${pass_or_failure}.</label>`);
    };
    // Ce processus déclenche la fonction score_indicate() lorsque l'un des scores [score en japonais, score en anglais, score en mathématiques, score en sciences, score en sciences sociales] est modifié.
    $('#national_language, #english, #mathematics, #science, #society').change(function () {
        score_indicate();
    });
    // Lorsque le bouton "rank"(id="évaluation") est pressé, "get_achievement()" sera produit.
    $('#btn-evaluation').click(function () {
        $("#evaluation").text(get_achievement());
    });
    // Lorsque le bouton "jugement" (id="btn-judge") est pressé, le processus "fonction et_pass_ou_failure()" est émis.
    $('#btn-judge').click(function () {
        $("#judge").text(get_pass_or_failure());
    });
    // Lorsque le bouton "juge final" (id="btn-declaration") est pressé, le processus de "function judgement()" est exécuté.
    // Lorsque le bouton "Juge final" est cliqué pour la deuxième fois ou plus, l'élément HTML du juge affiché jusqu'alors est supprimé, et un nouvel élément HTML du juge est ajouté.
    // Conseil : examinons la méthode de "remove"
    let count = 0;
    $('#btn-declaration').click(function () {
        count = count + 1;
        if (count == 1) {
            $('#declaration').text(judgement());
        }

    });
});