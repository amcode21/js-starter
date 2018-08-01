# Instructions

Alright, so let's get started on this tutorial on how to code a timer

## Preparation
- Make sure you have a text editor or IDE to work with that has syntax highlighting

## Steps
1) We're gonna need a few files
	- `index.html`
	- `index.js`
	- `style.css`

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