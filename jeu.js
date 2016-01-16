var bouton = document.getElementById("bouton");
var multiplicateur = document.getElementById("multiplicateur");
var scoreE = document.getElementById("scoreE");
var autoclic = document.getElementById("autoclic");
var prix=80;
var score = 0;
var nbMultiplicateur = 1;

function afficherScore() {
    scoreE.innerHTML = "Score : " + score;
}

function afficherNbMultiplicateur() {
    multiplicateur.innerHTML = "Multiplicateur x" + nbMultiplicateur + " ( prix du prochain : " + prix + ")";
}

function clic() {
    score = score + nbMultiplicateur;
    afficherScore();
}

function acheterMultiplicateur() {
    if (score >= prix) {
        score = score - prix;
        nbMultiplicateur = nbMultiplicateur + 1;
        afficherNbMultiplicateur();
        afficherScore();
    } else {
        alert("Votre score est insuffisant !");
    }
    prix=80*nbMultiplicateur;
}



function achatautoclic(){ 
	if (score >=10 ) { score = score - 10 ; setInterval(clic, 500) ; afficherScore();}
	else { alert (" pas possible") ; } }	


	
	
bouton.onclick = clic;
autoclic.onclick = achatautoclic;
multiplicateur.onclick = acheterMultiplicateur ;

afficherNbMultiplicateur();
