## Instructions

NOTE: This tutorial requires **basic** knowledge of HTML, CSS, and JavaScript

This is a tutorial for how to make a timer, there are two sections
- HTML -> What the user will interact with
- JavaScript (JS) -> What makes the whole experience dynamic and not static (images = static; gifs = dynamic)
- Yeah that's a weird analogy but hey...what is life??

## HTML
1) We're gonna need a couple of files
	- `index.html`
	- `index.js`

2) Alright, so now we have our files - let's get to work!

3) So to start off, we want to first define our `index.html` document as an HTML document
	- ```html
		<!DOCTYPE html>
		<html>
			<head>
			</head>
			<!--We declared our head and our body-->
			<body>
			</body>
		</html>
	  ```

4) Next, we want to add some things to our head - a charset and a title
	- ```html
		<!DOCTYPE html>
		<html>
			<head>
				<meta charset="utf-8">
				<title>Timer Time >:)</title>
			</head>
			<!--We declared our head and our body-->
			<body>
			</body>
		</html>
	  ```

5) Believe it or not, we're almost done with the HTML! Now we just need to add two components - our header and container
	- Think of a body - a head, a body, and feet
	- Similarly, HTML pages have a **header**, a consistent top section; a **body**, the middle part of a page that changes; and a **footer**, basically a header but for the bottom
	- We won't use a footer here since we don't really need it
	- We'll declare all of this using `<div>` statements with the `id` attribute
	- ```html
		<body>
			<div id="header">
			</div>
			<!--We declared our header, now to declare our container!-->
			<div id="container">
			</div>
		</body>
	  ```

6) Alright, now what goes in our header? Hmm...
	- So looks like we need to take user input for a timer, right?
	- Maybe we should add two things:
		- Some text above the input
		- The input itself
	- Here's how it would look:
	-  ```html
		<!--Aligning our header in the center of the page-->
		<div id="header" style="text-align: center;">
			<!--Our text above the input-->
			<h1>Timer Time!</h1>
			<!--Declaring our input as a text box, and making it smaller by decreasing its width-->
			<input type="text" id="timer-input" style="width: 60%;">
		</div>
	   ```

7) Header done, now `container` time...
	-  ```html
		<!--Aligning our container in the center of the page-->
		<div id="container" style="text-align: center;">
			<!--Our text we'll dynamically change to reflect the current time left-->
			<h1 id="time-text">Timer Time!</h1>
		</div>
	   ```

8) Oops! Don't forget to import your `index.js` file before you close the `index.html` tab!
	- This would go at the bottom of the `body`, right before `</body>`
	-  ```html
		<script src="index.js"></script>
	   ```

9) So, check the `index.html` if you feel stuck, but now let's move on to JS!

## JavaScript (JS)
- So our web page needs to have some way of dynamically updating the number to reflect how much time is left - this is where JavaScript comes in
- JavaScript can dynamically change elements on a page, and define what happens
- When you're on Google, you type something, results pop up for autocomplete, and you hit enter to see more results - that's JS in action!
- **I assume you know basic JavaScript when viewing this project tutorial**
1) Alright, so now let's start with the JS! 
	- First thing we want to do is wait for the document to load ALL its content before we start messing with it
		- Remember `DOCTYPE` in `index.html` -> we define a **DOCUMENT**
	- Can't eat a cake while it's baking or something weird will happen
	- With webpages, you can't do anything to the page until the whole DOM (Document Object Model) a.k.a document a.k.a webpage is loaded
	- ```js
		// Waiting for the document to be ready
		// 'Listening' for the event, essentially, and giving a function, or something to do, when it's done
		document.addEventListener('DOMContentLoaded' function() {
			// We'll add stuff in here soon
		});
	  ```

2) So, all our code from now should go in that function...now what we want to do is detect interaction with the input
	- In this example, we're going to detect when a key on the user's keyboard is down, known as the `keydown` event
	- We have to grab the input using the `id` attribute we made earlier and grab the value
	- ```js
		// All this code goes in the function we created earlier
		// Adding an event listener for the input we created earlier
		document.getElementById('time-input').addEventListener('keydown', function() {
			var time = document.getElementById('time-input').value;
		});
	  ```

3) Alright, so we have to check for our input, now we have to grab the value ONLY when the `enter` key is pressed, so...
	- ```js
		// 'e' in this case is the event - a key going down
		// It contains things such as the code of the key, from which we can determine what key was pressed
		document.getElementById('time-input').addEventListener('keydown', function(e) {
			// Since the keycode for enter is 13, we check if whatever key code was pressed is 13
			if (e.which === 13 || e.keyCode === 13) {
				// Grabbing the value (what the user inputted) of the input element we created
				var time = document.getElementById('time-input').value;
			}
		});
	  ```

4) So we can check if they pressed the `enter` key, but what if whatever the user entered is not a number? Thankfully JS has an easy way for that too!
	- This code goes inside the `'keydown'` event listener for our `time-input` element
	- Let's add this code inside our `if` statement since we want it to execute when `enter` is pressed
	- ```js
		if (e.which === 13 || e.keyCode === 13) {
			var time = document.getElementById('time-input').value;
			// isNaN is a function to check if something is a number or not
			if (isNaN(time)) { // If time is NOT a number
				// Grab the HTML element by its ID time-text and then change whatever's inside it to what we set it to
				// We're changing the text inside to...well read it yourself, you can change it too I guess
				document.getElementById('time-text').innerHTML = 'Not a number, smh...';
			}
			else {
				// And this is where the good stuff happens...
			}
		}
	  ```

5) Alright, so we took care of the part of user error, phew...now time to make the timer itself!
	- All code from here on goes in that `else` statement when we use `isNaN` where the good stuff happens :)
	- So what do we want to do:
		- Take the decimal value of whatever the user inputted,
		- Display it to the user every X milliseconds
	- So we're gonna use the function `setInterval(function, milliseconds)`
		- Essentially, it executes the `function` every `milliseconds`
		- For our timer, this would be useful since we want to decrement the time every X milliseconds
	- Here's how that implemented in code would look like:
	- ```js
		// Getting the decimal value from whatever the user inputted and assigning it to the variable timeNum
		var timeNum = parseFloat(time);
		// Now we define our repeating interval function and assign it to a variable which will be used in step 6
		var intv = setInterval(function() {
			// Getting the timer-text and changing its HTML to whatever timeNum currently is
			// We also display it in the timer-text section
			document.getElementById('timer-text').innerHTML = timeNum + ' ' + 'seconds left...';
			// We also need to decrement our time by 100 milliseconds each time
			timeNum -= 0.1;
		}, 100);
		// We want to repeat this function every 100 milliseconds
	  ```

6) Well, it works, but there's just one problem...it won't stop!! Let's go ahead and fix that
	- While we're at it, let's also use the `number.toFixed(<decimal place>)` method
		- e.g. if `number` was `1.4000033303`, `number.toFixed(1)` would return `1.4`!
	- ```js
		var intv = setInterval(function() {
			// Since it's a decimal we write it in decimal notation
			// We're only checking for the first place past the decimal (the tenths place)
			// We use less than because there might be some edge cases and when there is 0.1 seconds left that's pretty much the end
			if (time.toFixed(1) < 0.1) {
				// Making the 0 a bit nicer
				document.getElementById('timer-text').innerHTML = '0 seconds left...';
				// Clearing the interval set and saying it's over
				clearInterval(intv);
				// Alerting the user that time is up
				return alert('Time is up!');
			}
			// What we did in step 5
			document.getElementById('timer-text').innerHTML = timeNum.toFixed(1) + ' ' + 'seconds left...';
			timeNum -= 0.1;
		}, 100);
	  ``` 
# Conclusion
- Well, hopefully your code works when you run it in a browser! If not, feel free to reference any of the files in this project folder for more information!