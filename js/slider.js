jQuery(document).ready(function(){
	function htmSlider(){
		/* «ададим следующие переменные */

		/* обертка слайдера */
		var slideWrap = jQuery('.slide-wrap');
		/* ссылки на предудыщий иследующий слайд */
		var nextLink = jQuery('.next-slide');
		var prevLink = jQuery('.prev-slide');
		
		/* ширина слайда с отступами */
		var slideWidth = jQuery('.slide-item').outerWidth();
		
		/* смещение слайдера */
		var newLeftPos = slideWrap.position().left - slideWidth;
		
		/*  лик по ссылке на следующий слайд */
		nextLink.click(function(){
			if(!slideWrap.is(':animated')) {
	
				slideWrap.animate({left: newLeftPos}, 1000, function(){
					slideWrap
						.find('.slide-item:first')
						.appendTo(slideWrap)
						.parent()
						.css({'left': 0});
				});

			}
		});

		/*  лик по ссылке на предыдующий слайд */
		prevLink.click(function(){
			if(!slideWrap.is(':animated')) {
			
				slideWrap
					.css({'left': newLeftPos})
					.find('.slide-item:last')
					.prependTo(slideWrap)
					.parent()
					.animate({left: 0}, 1000);

			}
		});


	}
	htmSlider();
});