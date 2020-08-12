/*placeholder*/
$(document).ready(function(){
        $.Placeholder.init({ color : "#aeaeae" });
 });

$(function() {

	$('ul.tabs').on('click', 'li:not(.current)', function() {
		$(this).addClass('current').siblings().removeClass('current')
			.parents('div.section').find('div.box').eq($(this).index()).fadeIn(150).siblings('div.box').hide();
	})

})

jQuery(document).ready(function() {
    // Initialise the first and second carousel by class selector.
	// Note that they use both the same configuration options (none in this case).
	jQuery('.d-carousel .carousel').jcarousel({
        scroll: 1
    });
});

 jQuery(document).ready(function($) {
    

//   $("a[href$='.jpg'], a[href$='.png']")
//           .addClass("fancybox");
          
           $("a[href$='.jpg'], a[href$='.png']").each(function() {
      $(this).addClass("fancybox");
       $(this).attr('rel', 'gallery');
     
});
 
 $(".fancybox").fancybox({
        padding: [0, 0, 0, 0],
        openEffect: 'elastic',
        openSpeed: 300,
//        closeEffect: 'elastic',
//        scrolling: 'visible',
        maxWidth: 800,
	arrows: false,
        fixed: false,
        autoCenter: false,
     
    });});
	



/*Fancybox*/
$(document).ready(function(){

            var forms = $('.form-modal'),
            cb_input = forms.find('input[type=text], input[type=email], input[type=tel] , textarea'),
            cr_close = $.fancybox.close();

   $("#fancybox-overlay").fancybox({
                padding: [0, 0, 0, 0],
//        openEffect: 'elastic',
//        openSpeed: 300,
//       closeEffect: 'elastic',
//        scrolling: 'visible',
        maxWidth: 750,
		minWidth: 450,
        fixed: false,
        autoCenter: false,
		arrows: false,
        closeBtn: true,
        afterClose: function () {
            cb_input.val('');
        }
    });

    $('.btr').click(function () {
        $.fancybox.close();
    });
  

	
   });
/*Fancybox end*/ 

(function($) {
		$(function() {
			$('input, select').styler({
				selectSearch: true
			});
		});
		})(jQuery);