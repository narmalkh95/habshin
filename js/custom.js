(function ($) {

  	"use strict";
	
   	$(document).ready(function(){
			$('[data-toggle="popover"]').popover(); 
		});
	
	/*==== Testimonials ====*/
	$('.testimonialsList').owlCarousel({
    loop:true,
    margin:30,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        800:{
            items:1,
            nav:true
        },
        1200:{
            items:2,
            nav:true,
            loop:true
        }
    	}
	})	
	
	/* ==== Revolution Slider ==== */
	if($('.tp-banner').length > 0){
		$('.tp-banner').show().revolution({
			delay:6000,
			startheight:700,
			startwidth: 1170,
			hideThumbs: 1000,
			navigationType: 'none',
			touchenabled: 'on',
			onHoverStop: 'on',
			navOffsetHorizontal: 0,
			navOffsetVertical: 0,
			dottedOverlay: 'none',
			fullWidth: 'on'
		});
	}
	
	
	/* ==== Filter ==== */
	$(document).ready(function(){
    $(".filter-button").click(function(){
	var value = $(this).attr('data-filter');
	
	if(value == "all")
	{
		$('.filter').show('1000');
	}
	else
	{
		$(".filter").not('.'+value).hide('3000');
		$('.filter').filter('.'+value).show('3000');
		
	}

			if ($(".filter-button").removeClass("active")) {
		$(this).removeClass("active");
		}
			$(this).addClass("active");
		});
	});

	
	//Text Typer
	var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };
	
	
	
	/* ==== Fancy Box ==== */
	$(document).ready(function(){
		$(".fancybox").fancybox({
			openEffect: "none",
			closeEffect: "none"
		});
	});
	
    $(document).ready(function() {
         $('.licenzia1').magnificPopup({
            items: [
            {
              src: 'images/licenzia/1/1.jpg'
            },
            {
              src: 'images/licenzia/1/2.jpg'
            },
            {
              src: 'images/licenzia/1/3.jpg'
            },
            {
              src: 'images/licenzia/1/4.jpg'
            },
            {
              src: 'images/licenzia/1/5.jpg'
            },
            {
              src: 'images/licenzia/1/6.jpg'
            }
            ],
            gallery: {
      enabled: true
    },
            type: 'image' // this is default type
        });
         $('.licenzia2').magnificPopup({
            items: [
            {
              src: 'images/licenzia/2/1.jpg'
            },
            {
              src: 'images/licenzia/2/2.jpg'
            },
            {
              src: 'images/licenzia/2/3.jpg'
            },
            {
              src: 'images/licenzia/2/4.jpg'
            },
            {
              src: 'images/licenzia/2/5.jpg'
            }
            ],
            gallery: {
      enabled: true
    },
            type: 'image' // this is default type
        });
         $('.licenzia3').magnificPopup({
            items: [
            {
              src: 'images/licenzia/3/1.jpg'
            },
            {
              src: 'images/licenzia/3/2.jpg'
            },
            {
              src: 'images/licenzia/3/3.jpg'
            }
            ],
            gallery: {
      enabled: true
    },
            type: 'image' // this is default type
        });
    })

	console.log('From AWS - host')
	
})(jQuery);




   