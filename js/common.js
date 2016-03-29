(function($) {
	if($(window).width()>=1024) {
		initDesktop ();
		setHeightMap();
	};

	if($(window).width()<1024) {
		initMobile ()
	};

	createTabs($(".tabs_group li a") , $(".content_tab")   );
	createTabs($(".plans_group li a"), $(".plans_content") );

	$('#mobile_menu span').click(function() {
		var $mobMenu = $('#mobile_menu ul');

		if ($mobMenu.css('display') != 'block') {
			$mobMenu.show();


			var firstClick = true;

			$(document).bind('click.myEvent', function(e) {
				if (!firstClick && $(e.target).closest($mobMenu).length == 0) {
					$mobMenu.hide();
					$(document).unbind('click.myEvent');
				}
				firstClick = false;
			});
		}

	});
	scrollToAnchor();
	scrollToLocation();
})(jQuery);



jQuery(window).resize(function(event) {
	if(jQuery(window).width()>=1024) {
		initDesktop ();
		onResizeSetPage();
		setHeightMap();
	};

	if(jQuery(window).width()<1024) {
		initMobile ();
	};

	
});

jQuery(window).load(function(){
	removePreloader();
	if(jQuery(window).width()>=1024) {
		loaderDone();
	}

});

function scrollToAnchor() {
	var $root = $('html, body');
	var offS = 250;

	if( $(window).width() <= 430 ) {
		offS = 170;
	}
	$('#mobile_menu a').not('[href="#location"]').click(function() {
		$root.animate({
			scrollTop: $( $.attr(this, 'href') ).offset().top - offS
		}, 500);
		return false;
	});
}

function scrollToLocation() {
	var $rootL = $('html, body');
	var offSL = 310;

	if($(window).width() <= 430) {
		offSL = 170;
	}
	$('#mobile_menu a[href="#location"]').click(function() {
		$rootL.animate({
			scrollTop: $( $.attr(this, 'href') ).offset().top - offSL
		}, 500);
		return false;
	});
}

function onResizeSetPage () {
	var activePage = jQuery('header a.active').attr('data-name');
	startPage(activePage);
}

function createTabs(tabsLink, parentTabs) {
	var tabs =  tabsLink;
	tabs.click(function() {
		var content = this.hash.replace('/','');

		tabs.removeClass("active");
		jQuery(this).addClass("active");
		parentTabs.find('.tab').hide();
		parentTabs.find('.tab').removeClass("active");
		jQuery(content).fadeIn(200).addClass('active');

	});
}


function removePreloader() {
	jQuery('.preloader').fadeOut('slow');
}

function setHeightMap() {
	jQuery('.map iframe').height($(window).height() - 300);
}

function initMobile () {
	jQuery(".project,.location,.tidings,.vision,.hist,.yazamim,.plans,.map,.stories,.contact").removeAttr('style');
}

function initDesktop () {
	var frame_width 	= jQuery(window).width();
	var frame_height 	= jQuery(window).height() ;
	var header_height	= 99;

	jQuery("	.project,.location,.tidings,.vision,.hist,.yazamim,.plans,.map,.stories,.contact ")
	.width(frame_width)
	.height(frame_height);

	jQuery(".project,.location,.tidings,.vision,.hist,.yazamim,.plans,.map,.stories,.contact").css({
		position: "absolute"
	});

	var projectKoef = 4;

	if(frame_width <= 1367 && frame_height < 800) {
		projectKoef = 3.5;
	}

	jQuery('.project').css({
		left: 0,
		top: header_height*projectKoef + 'px'
	});

	var locationKoef = 5;

	if(frame_width <= 1367 && frame_height < 800) {
		locationKoef = 4;
	}
	jQuery('.location').css({
		left: frame_width + 'px',
		top: header_height*locationKoef + 'px'
	});

	var tidingsKoef = 4.5;
	
	if(frame_width <= 1367 && frame_height < 800) {
		tidingsKoef = 3.5;
	}
	jQuery('.tidings').css({
		left: frame_width*2 + 'px',
		top: header_height*tidingsKoef + 'px'
	});

	var histKoef = 5;
	
	if(frame_width <= 1367 && frame_height < 800) {
		histKoef = 3.5;
	}
	jQuery('.hist').css({
		left: 0,
		top: frame_height + header_height*histKoef + 'px'
	});

	var visionKoef = 5;
	
	if(frame_width <= 1367 && frame_height < 800) {
		visionKoef = 4;
	}
	jQuery('.vision').css({
		left: frame_width + 'px' ,
		top: frame_height + header_height*visionKoef + 'px'
	});

	var yazamimKoef = 5;
	
	if(frame_width <= 1367 && frame_height < 800) {
		yazamimKoef = 4;
	}
	jQuery('.yazamim').css({
		left: frame_width*2 + 'px',
		top: frame_height + header_height*yazamimKoef + 'px'
	});

	var plansKoef = 3;
	
	if(frame_width <= 1367 && frame_height < 800) {
		plansKoef = 2.5;
	}
	jQuery('.plans').css({
		left: 0,
		top: frame_height*2+ header_height*plansKoef + 'px'
	});

	var mapKoef = 3;
	
	if(frame_width <= 1367 && frame_height < 800) {
		mapKoef = 2.5;
	}
	jQuery('.map').css({
		left: frame_width + 'px',
		top: frame_height*2+ header_height*mapKoef + 'px'
	});

	var storiesKoef = 4.5;

	if(frame_width <= 1367 && frame_height < 800) {
		storiesKoef = 4;
	}
	jQuery('.stories').css({
		left: frame_width*2 + 'px',
		top: frame_height*2 + header_height*storiesKoef + 'px'
	});

	var contactKoef = 4;

	if(frame_width <= 1367 && frame_height < 800) {
		contactKoef = 3.5;
	}	
	jQuery('.contact').css({
		left: frame_width + 'px',
		top: frame_height*3 + header_height*contactKoef + 'px'
	});

}

/*choose start Page*/
function loaderDone() {
	jQuery('#mainMenu').delay(800).slideDown(200);
	startPage('project'); 
};

/*startPage*/
function startPage(Page) {
	jQuery('header li a').removeClass('active');
	jQuery('header li a[data-name=' + Page + ']').addClass('active');
	

	var screenWidth =  jQuery(window).width();
	var screenHeight = jQuery(window).height();
	var maxWidth=(screenWidth*5);
	var maxHeight=(screenHeight*2);
	var isIE=jQuery.browser.msie;
	var starter=99;
	var x=0; 
	var y=0;

	switch(Page) {
		case 'project':
		x=0;
		y=0;
		break;
		case 'location':
		x=1;
		y=0;
		break;
		case 'tidings':
		x=2;
		y=0;
		break;
		case 'hist':
		x=0;
		y=1;
		break;
		case 'vision':
		x=1;
		y=1;
		break;
		case 'yazamim':
		x=2;
		y=1;
		break;
		case "plans":
		x=0;
		y=2;
		break;
		case "map":
		x=1;
		y=2;
		break;
		case "stories":
		x=2;
		y=2;
		break;
		case "contact":
		x=1;
		y=3;
		break;
		default:

		break;
	}


	LeftS = screenWidth*x;

	TopS = screenHeight*y+starter;

	TopS = Math.floor(TopS);
	LeftS = Math.floor(LeftS);

	if (isIE==true) {
		jQuery('html').stop();
		jQuery('html').unbind('mousemove');
		jQuery('html').animate({ scrollLeft:LeftS,scrollTop: TopS},2000,'easeInOutExpo', function(){			
			removePreloader();
		});
	}
	else {
		jQuery(document.body).stop();
		jQuery(document.body).unbind('mousemove');
		jQuery(document.body).animate({ scrollLeft:LeftS,scrollTop: TopS},2000,'easeInOutExpo', function(){			
			removePreloader();
		});
	}	
};

document.addEventListener('touchmove', function(e) {
	if(jQuery(window).width()>=1024) {
		e.preventDefault();
	}
}, true);