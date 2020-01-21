
$(function() {
		
		
		$('.mainNav li').hover(function(){
			$("a", this).stop().animate({color: '#e12828'}, 250);					
			},function(){
				 $("a",this).stop().animate({color: '#fff'}, 250);
		});	
		
		$('.mainNav li').hover(function(){
			$("ul.subNav", this).slideDown();					
			},function(){
				$("ul.subNav", this).hide();	
		});
		
		$('.indexSliderContent h2 a').hover(function(){
			$(this).stop().animate({color: '#f44f4f'}, 250);					
			},function(){
				 $(this).stop().animate({color: '#E12828'}, 250);
		});
		
		$('.viewMoreBtn').hover(function(){
			$(this).stop().animate({"background-color": '#f44f4f'}, 250);					
			},function(){
				 $(this).stop().animate({"background-color": '#e13b3b'}, 250);
		});
		
		$('.leftNav li').hover(function(){
			$("a", this).stop().animate({color: '#e12828'}, 250);					
			},function(){
				 $("a",this).stop().animate({color: '#fff'}, 250);
		});	
		
		$('.productBox').hover(function(){
				$(".productBoxIMG", this).stop().animate({opacity: 0.7}, 250);	
				$("h2 a", this).stop().animate({color: '#e12828'}, 250);	
				$("p", this).stop().animate({color: '#fff'}, 250);	
				
			},function(){
				 $(".productBoxIMG", this).stop().animate({opacity: 1.0}, 250);	
				 $("h2 a", this).stop().animate({color: '#fff'}, 250);
				 $("p", this).stop().animate({color: '#afafaf'}, 250);
		});
		
		$('.sitemap li a').hover(function(){
			$(this).stop().animate({color: '#e12828'}, 250);					
			},function(){
				 $(this).stop().animate({color: '#fff'}, 250);
		});	
		
		
		$('.office').hover(function(){
				$(this).children().fadeIn();
				$(this).addClass("selected");
				
				
			},function(){
				$(this).children().hide();
				$(this).removeClass("selected");
		});
		
		
		$('.closePopUp').click(function(){
				$(this).parent().hide();
				$(this).parent().parent().removeClass("selected");
		});
		
		
		$('.officeBox h2').hover(function(){
				var id = $(this).parent().attr('id');
				$("."+id).children().fadeIn();
				$("."+id).addClass("selected");
				$(this).stop().animate({color: '#fff'}, 250);
			},function(){
				var id = $(this).parent().attr('id');
				$("."+id).children().hide();
				$("."+id).removeClass("selected");
				$(this).stop().animate({color: '#afafaf'}, 250);
		});
		
		$('.indexAkcent h2').hover(function(){
			$("a", this).stop().animate({color: '#e12828'}, 250);					
			},function(){
				 $("a",this).stop().animate({color: '#fff'}, 250);
		});	
		
		
		
		
		
		
		/**** Input Effect ****/
			$(".contactsForm input").each(function(){
				$(this).attr('isFirstLetter', 1).click(
					function(e) {
						e.stopPropagation(); 
						$(this).animate({color: '#d5d5d5'}, 150); 
					}
				).keydown(function(eventObject) {
					if($(this).attr('isFirstLetter') == 1) {
						$(this).attr('isFirstLetter', 0);
						$(this).val('');
						$(this).animate({color: '#fff'}, 150);
					}
				});
			});		
			$(".contactsForm input").parent().submit(function() {
				$(this).find(':input').each(function() {
					if($(this).css('visibility') != 'hidden' && $(this).attr('defaultValue') == $(this).val()) {
						$(this).val('');
					}
					
				});
				return true;
			});
			
			$(".contactsForm textarea").each(function(){
				$(this).attr('isFirstLetter', 1).click(
					function(e) {
						e.stopPropagation(); 
						$(this).animate({color: '#d5d5d5'}, 150); 
					}
				).keydown(function(eventObject) {
					if($(this).attr('isFirstLetter') == 1) {
						$(this).attr('isFirstLetter', 0);
						$(this).val('');
						$(this).animate({color: '#fff'}, 150);
					}
				});
			});		
			$(".contactsForm textarea").parent().submit(function() {
				$(this).find(':input').each(function() {
					if($(this).css('visibility') != 'hidden' && $(this).attr('defaultValue') == $(this).val()) {
						$(this).val('');
					}
					
				});
				return true;
			});			

			
			$(".contactsSubmitBtn").click(function(e) { e.stopPropagation(); });
			
			$("html").click(function() {
				$(".contactsForm input").animate({color: '#afafaf'}, 150);
				$(".contactsForm textarea").animate({color: '#afafaf'}, 150);
			});
		/**** End of input effect ****/
		
				
		
});















