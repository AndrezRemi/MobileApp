window.onload = () => {
	'use strict';

	// test si le navigateur du client gère le serviceWorker
	if ('serviceWorker' in navigator) {
	navigator.serviceWorker
			 .register('./sw.js'); // le cas échant on enregistre notre gestionnaire
	}
}


// 2 delay principaux
let DelayLong = 800
let DelayCourt = 200

let PlayerInput = null


//fonction pour reecrire le title 
function reWrite(text){
	document.getElementById("title").innerHTML = text;

}

//fonction pour marquer une pose 
const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}










//GESTION DES TOURS
let lap = 1
function nextlap () {
	if(Serie.length === 0){
		lap++ ;
		reWrite("Tour "+ lap)
		Hazard ()
		
	}


}


//(ZONE POUR LES PARTIE VISUELS)
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//fonction onclick de chaque boutons
async function RedButton() {
	
	document.getElementById('red').style.backgroundColor = "red";
	await sleep(DelayCourt)
	document.getElementById('red').style.backgroundColor = "black";
	PlayerInput = 1
	Verify()

}

async function GreenButton() {
	
	document.getElementById('green').style.backgroundColor = "green";
	await sleep(DelayCourt)
	document.getElementById('green').style.backgroundColor = "black";
	PlayerInput = 2
	Verify()

}

async function BlueButton() {
	
	document.getElementById('blue').style.backgroundColor = "blue";
	await sleep(DelayCourt)
	document.getElementById('blue').style.backgroundColor = "black";
	PlayerInput = 3
	Verify()

}

async function YellowButton() {
	
	document.getElementById('yellow').style.backgroundColor = "yellow";
	await sleep(DelayCourt)
	document.getElementById('yellow').style.backgroundColor = "black";
	PlayerInput = 4
	Verify()

}





//fonction d'affichage visuel de la serie de tour
async function drawSerie () {

	switch(randomInteger) {
		case 1:
			
			document.getElementById('red').style.backgroundColor = "red"
			await sleep(DelayCourt)
			document.getElementById('red').style.backgroundColor = "black"
		  break;
		case 2:
			
			document.getElementById('green').style.backgroundColor = "green"
			await sleep(DelayCourt)
			document.getElementById('green').style.backgroundColor = "black"
		  break;
		case 3:
			
			document.getElementById('blue').style.backgroundColor = "blue"
			await sleep(DelayCourt)
			document.getElementById('blue').style.backgroundColor = "black"
		  break;
		case 4:
			
			document.getElementById('yellow').style.backgroundColor = "yellow"
			await sleep(DelayCourt)
			document.getElementById('yellow').style.backgroundColor = "black"
		  break;
		default:
			
			document.getElementById('red').style.backgroundColor = "red"
			await sleep(DelayCourt)
			document.getElementById('red').style.backgroundColor = "black"

	  } 


}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////






//creation de la serie a repeter 
async function Hazard () {
	Serie = []
	for (i = 0; i < lap; i++) {
		randomInteger = Math.floor(Math.random() * 4) + 1
		await sleep(DelayLong)
		drawSerie ()
		Serie.push(randomInteger)
	}

	
	console.log(Serie)
	return randomInteger


}

//premier appel necessaire
Hazard ()


//COMPARAISON entre input player et IA
async function Verify() {
	if(PlayerInput === Serie[0]){

		
		
		Serie.shift();
		nextlap()
		console.log(Serie)
		
		
		
	}
	else{
		
		reWrite("Perdu")
		await sleep(DelayLong)
		lap = 1
		reWrite("Tour "+ lap)
		
		Hazard()
	}
	
}
