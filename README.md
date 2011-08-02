NumericPassword
===============
NumericPassword is a jQuery plugin that transforms a normal password input into a nice and easy to use numpad.

Screenshots
-----------
![Example 1](https://github.com/christianblais/numeric_password/raw/master/screenshots/screenshot-1.png "Example 1")
![Example 2](https://github.com/christianblais/numeric_password/raw/master/screenshots/screenshot-2.png "Example 2")

Requirement
-----------
* jQuery

Installation & Usage
------------
Download the numeric_password.jquery.js and require it in your layout, after jQuery. You might
as well download the numeric_password.css for a default theme.

	<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js"></script>
	<script type="text/javascript" src="numeric_password.jquery.js"></script>

Add the numeric_password class to your password inputs.

	<input type="password" class="numeric_password">

You can now tell jQuery to transforms all your inputs with the following lines of code.

	$(document).ready(function() {
		$('.numeric_password').to_numeric_password();
	});
