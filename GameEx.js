function play() {

	var bet = parseInt(document.getElementById("bet").value);
	
	var pips = Math.round( (Math.random( ) * 5) + 1 );
	
	var win125 = bet * 1.25
	
	var win150 = bet * 1.50
	
	
	if (pips === 1 || pips === 3 || pips === 5 ) {
		
		answer = "Pips was " + pips + " - no pay"
	
	} else if (pips === 2 || pips ===4) {
		
		answer = "Pips was " + pips + " - Paid back: " + win125.toFixed(2) + " euros."
	
	} else {
		
		answer = "Pips was " + pips + " - Paid back " + win150.toFixed(2) + " euros."
	}
	
	document.getElementById("answer").innerHTML = answer	


}