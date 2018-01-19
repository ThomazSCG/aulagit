$(document).ready( function(){

	$(window).scroll(function() {

		var windowTop = $(this).scrollTop();
		if(windowTop > $('.sobre').offset().top - 300){

			$('.sobre').addClass('aparecer');
		}
		else {
			$('.sobre').removeClass('aparecer');
		}

		if(windowTop > $('.locais').offset().top - 300){
			$('.locais').addClass('aparecer');
		}
		else {
			$('.locais').removeClass('aparecer');
		}
	});
});
//ideia discutida em dupla com Rafael Mynssen