var bouton = document.getElementById("bouton");
var multiplicateur = document.getElementById("multiplicateur");
var score = document.getElementById("score");
var boutonAutoclick = document.getElementById("autoclic");
var prix=80;
score = 0;
var nbMultiplicateur = 1;
var scoreE=0;

function afficherScore() {
    score.innerHTML = "Score : " + scoreE;
}

function afficherNbMultiplicateur() {
    multiplicateur.innerHTML = "Multiplicateur x" + nbMultiplicateur + " (prix du prochain : " + prix + ")";
}

function clic() {
    scoreE = scoreE + nbMultiplicateur;
    afficherScore();
}



function acheterMultiplicateur() {
    if (scoreE >= prix) {
        scoreE = scoreE - prix;
        nbMultiplicateur = nbMultiplicateur + 1;
        afficherNbMultiplicateur();
        afficherScore();
    } else {
        alert("Votre score est insuffisant !");
    }
    prix=80*nbMultiplicateur;
}

function autoClic(){
    if (scoreE >=1000) {
	setInterval(clic, 1000);
	}
	else {
	alert("Votre score est insuffisant !");
	}
	afficherScore();
}





bouton.onclick = clic;
boutonAutoclick.onclick = autoClic;
multiplicateur.onclick = acheterMultiplicateur;

afficherNbMultiplicateur();

