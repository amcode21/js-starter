// Waiting for ALL content in the document to finish loading
document.addEventListener('DOMContentLoaded', function() {

	// Adding an event listener for when someone has a key down in the input
	document.getElementById('timer-input').addEventListener('keydown', function(e) {
		// Setting the HTML of the timer text to nothing so we can toy with it later
		document.getElementById('timer-text').innerHTML = '';

		// If they key is the enter key
		if (e.keyCode === 13 || e.which === 13) {
			// Setting the variable time as the HTML element's, timer-input's, value
			var time = document.getElementById('timer-input').value;

			// isNaN = is Not a Number
			// Returns true if it is NOT a number, false if it IS a number
			// We're checking if time is really a number or not
			if (isNaN(time)) {
				// Telling the user that whatever they entered is not a number if true
				document.getElementById('timer-text').innerHTML = 'That\'s not a number!!';
			}
			// But if it IS a number...
			else {
				// Setting the number variable timeNum to the decimal value of whatever number the user entered
				var timeNum = parseFloat(time);

				// I'm declaring an interval here - so basically every X milliseconds I want to do this function
				let intv = setInterval(function() {
					// .toFixed(1) essentially just makes go to the 1st place past the decimal (e.g. 5.1 vs 5.1000000000000003)
					// Try removing .toFixed() when displaying the time in the HTML and see what happens!
					if (timeNum.toFixed(1) < 0.1) {
						// Finding our text element we want to put the timer
						document.getElementById('timer-text').innerHTML = '0 seconds left...';

						// We alert the user that their time is up
						// Additional idea: Play some audio now that their time is up?
						alert('Time\'s up!');

						// Exit the function and clear the interval we set now that 0 has been reached
						return clearInterval(intv);
					}

					// Getting the timer-text and changing its HTML to whatever timeNum currently is
					document.getElementById('timer-text').innerHTML = timeNum.toFixed(1) + ' ' + 'seconds left...';

					// We are decrementing timeNum by 0.1 seconds each tmie
					timeNum -= 0.1;
				}, 100);
				// 100ms in this case is X milliseconds
			}
		}
	});
});