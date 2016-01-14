var bouton = document.getElementById("bouton");
var multiplicateur = document.getElementById("multiplicateur");
var score = document.getElementById("score");
var boutonAutoclick = document.getElementById("boutonAutoclick");

score = 0;
var nbMultiplicateur = 1;

function afficherScore() {
    score.innerHTML = "Score : " + score;
}

function afficherNbMultiplicateur() {
    multiplicateur.innerHTML = "Multiplicateur x" + nbMultiplicateur + " (prix du prochain : " + prix() + ")";
}

function clic() {
    score = score + nbMultiplicateur;
    afficherScore();
}

function prix() {
    return 20 * nbMultiplicateur * nbMultiplicateur;
}

function acheterMultiplicateur() {
    if (score >= prix()) {
        score = score - prix();
        nbMultiplicateur = nbMultiplicateur + 1;
        afficherNbMultiplicateur();
        afficherScore();
    } else {
        alert("Votre score est insuffisant !");
    }
}
function autoClic(){
    if (score >=1000) {
	setInterval(clic, 1000);
	}
	else {
	alert("Votre score est insuffisant !");
	}
}





bouton.onclick = clic;

multiplicateur.onclick = acheterMultiplicateur;
afficherScore();
afficherNbMultiplicateur();

