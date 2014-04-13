(function ($) {
    
    $.fn.CountUpCircle = function(options){

    	var self = this;
	
	    /**
	    * DEFAULT OPTIONS
	    *
	    * Description
	    *
	    * @param 
	    **/

		var settings = $.extend({
			duration: 5000 //ms
		}, options);

		var toCount = parseInt(this.html());
		console.log("Count up to " + toCount);

		var i 	 = 0;
		var step = settings.duration / toCount;
		console.log("Step duration " + step);

		var displayNumber = function() {
			i++;
			self.html(i);
			if (i < toCount) {
				setTimeout(displayNumber, step);
			}
		};

		displayNumber();
	}

}(jQuery));