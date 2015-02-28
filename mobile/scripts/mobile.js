var ie = 0, ff = 0, ch = 0, sa = 0;

/* $('.slider').glide({
	autoplay: 5000,
	arrows: 'body',
	navigation: 'body'
}); */

/* $(document).ready(function () {
    //initialize swiper when document ready  
    var mySwiper = new Swiper ('.swiper-container', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
	  pagination: '.swiper-pagination',
      paginationClickable: '.swiper-pagination',
	  autoplay: 2500
    })        
}); 
 */
 $(document).ready(function(){
	$("#my_slider").muslider({
		"responsive": true,
		"animation_start": "auto",
		"animation_interval": 3000
	});
	$("#my_sliderAndroidHealth").muslider({
		"responsive": true,
		"animation_start": "auto",
		"animation_interval": 3000
	});
	$("#my_sliderAdvancedSpaceWars").muslider({
		"responsive": true,
		"animation_start": "auto",
		"animation_interval": 3000
	});
	$("#my_sliderJumper").muslider({
		"responsive": true,
		"animation_start": "auto",
		"animation_interval": 3000
	});
	$("#my_sliderSolarSystem").muslider({
		"responsive": true,
	});
});
 
$(function () {
 /*    $("#sliderHome").excoloSlider({
        mouseNav: false,
        interval: 2000,
        playReverse: true,
		autoSize: true,
		height: 250
    });
	$("#sliderHealthApp").excoloSlider({
        mouseNav: false,
        interval: 2000,
        playReverse: true,
		autoSize: true,
		height: 650
    });
	$("#sliderAdvancedSpaceWarsApp").excoloSlider({
        mouseNav: false,
        interval: 2000,
        playReverse: true,
		autoSize: true,
		height: 650
    }); */
	
});


 
function init(){	
	//$('.slider').glide();
}