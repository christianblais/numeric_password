(function ($){
	$.fn.to_numeric_password = function ()
	{
		return this.each(function ()
		{
			// Keep track of the original password field
			var original = this;
			
			// Disable it
			$(original).attr("disabled", "disabled");
			
			// Create a container
			var container = $('<div class="numeric_password_container"></div>');
			
			// Create each number
			for(var i=0; i<10; i++)
			{
				var e = $('<div class="numeric_password_number" data-number="' + i + '" id="numeric_password_' + i + '">' + i + '</div>');
				
				e.click(function ()
				{
					original.value = original.value + $(this).data('number');
				});
				
				e.appendTo(container);
			}
			
			// Create the backspace button
			var backspace = $('<div class="numeric_password_number" id="numeric_password_backspace">&larr;</div>');
				
			backspace.click(function ()
			{
				original.value = original.value.slice(0, -1);
			});
			
			backspace.appendTo(container);
			
			// Replace the original password with that
			container.insertAfter(this);
		});
	};
})(jQuery);
