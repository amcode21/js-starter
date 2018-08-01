## Instructions

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

4) Next, we want to add some things to our head - a charset, a title, and **importing our stylesheet/css**
	- ```html
		<!DOCTYPE html>
		<html>
			<head>
				<meta charset="utf-8">
				<title>Timer Time >:)</title>
				<!--Importing our CSS - relationship is a stylesheet, and href (where it's located) is just style.css-->
				<link rel="stylesheet" href="style.css">
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
				var time = document.getElementById('time-input').value;
			}
		});
	  ```

4) So we can check if they pressed the `enter` key, but what about whether it's a number or not? Thankfully JS has an easy way for that too!
	- This code goes inside the `'keydown'` event listener for our `time-input` element
	- Let's add this code inside our `if` statement since we want it to execute when `enter` is pressed
	- ```js
		// 'e' in this case is the event - a key going down
		// It contains things such as the code of the key, from which we can determine what key was pressed
		document.getElementById('time-input').addEventListener('keydown', function(e) {
			// Since the keycode for enter is 13, we check if whatever key code was pressed is 13
			if (e.which === 13 || e.keyCode === 13) {
				var time = document.getElementById('time-input').value;
			}
		});
	  ```






