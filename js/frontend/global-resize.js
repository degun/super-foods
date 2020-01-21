$.event.add(window, "load", resizeGlobalContainer);
$.event.add(window, "resize", resizeGlobalContainer);

function resizeGlobalContainer(){
	var w = $(document).width();
	var wrd = jQuery(document).width() - (jQuery(document).width() - jQuery(window).width());
	if(wrd < 980) 
		wrd = 980;
	
	$('#globalContainer').css('width', wrd + "px");
	
	if($.browser.msie) {
		if (w > 1024) 
			$('body').css('overflow-x', 'hidden');
		 else
			 $('body').css('overflow-x', 'auto');
	}
}