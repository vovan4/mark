(function($) {
	if($(window).width()>=1024) {
		initDesktop ();
		setHeightMap();
	};

	if($(window).width()<1024) {
		initMobile ()
	};

	createTabs($(".tabs_group li a"), $(".content_tab"));
	createTabs($(".plans_group li a"), $(".plans_content"));

})(jQuery);

$(window).resize(function(event) {
	if($(window).width()>=1024) {
		initDesktop ();
		onResizeSetPage();
		setHeightMap();
	};
	
	if($(window).width()<1024) {
		initMobile ();
	};
	
});

$(window).load(function(){
	if($(window).width()>=1024) {
		loaderDone();
	};

});


function onResizeSetPage () {
	var activePage = $('header a.active').attr('data-name');
	startPage(activePage);
};

function createTabs(tabsLink, parentTabs) {
	var tabs =  tabsLink;
	tabs.click(function() {
		var content = this.hash.replace('/','');

		tabs.removeClass("active");
		$(this).addClass("active");
		parentTabs.find('.tab').hide();
		parentTabs.find('.tab').removeClass("active");
		$(content).fadeIn(200).addClass('active');

	});
};


function removePreloader() {
	$('.preloader').fadeOut('slow');
};

function setHeightMap() {
	$('.map iframe').height($(window).height() - 300);
};

function initMobile () {
	$(".project,.location,.tidings,.vision,.hist,.yazamim,.plans,.map,.stories,.contact").removeAttr('style');
};

function initDesktop () {
	var frame_width = $(window).width();
	var frame_height = $(window).height() ;
	var header_height = 99;

	$("	.project,.location,.tidings,.vision,.hist,.yazamim,.plans,.map,.stories,.contact ")
	.width(frame_width)
	.height(frame_height);

	$(".project,.location,.tidings,.vision,.hist,.yazamim,.plans,.map,.stories,.contact").css({
		position: "absolute"
	});
	var projectKoef = 4;
	if(frame_width <= 1367 && frame_height < 800) {
		projectKoef = 3.5;
	}
	$('.project').css({
		left: 0,
		top: header_height*projectKoef + 'px'
	});

	var locationKoef = 5;

	if(frame_width <= 1367 && frame_height < 800) {
		locationKoef = 4;
	}
	$('.location').css({
		left: frame_width + 'px',
		top: header_height*locationKoef + 'px'
	});

	var tidingsKoef = 4.5;
	
	if(frame_width <= 1367 && frame_height < 800) {
		tidingsKoef = 3.5;
	}
	$('.tidings').css({
		left: frame_width*2 + 'px',
		top: header_height*tidingsKoef + 'px'
	});

	var histKoef = 5;
	
	if(frame_width <= 1367 && frame_height < 800) {
		histKoef = 3.5;
	}
	$('.hist').css({
		left: 0,
		top: frame_height + header_height*histKoef + 'px'
	});

	var visionKoef = 5;
	
	if(frame_width <= 1367 && frame_height < 800) {
		visionKoef = 4;
	}
	$('.vision').css({
		left: frame_width + 'px' ,
		top: frame_height + header_height*visionKoef + 'px'
	});

	var yazamimKoef = 5;
	
	if(frame_width <= 1367 && frame_height < 800) {
		yazamimKoef = 4;
	}
	$('.yazamim').css({
		left: frame_width*2 + 'px',
		top: frame_height + header_height*yazamimKoef + 'px'
	});

	var plansKoef = 3;
	
	if(frame_width <= 1367 && frame_height < 800) {
		plansKoef = 2.5;
	}
	$('.plans').css({
		left: 0,
		top: frame_height*2+ header_height*plansKoef + 'px'
	});

	var mapKoef = 3;
	
	if(frame_width <= 1367 && frame_height < 800) {
		mapKoef = 2.5;
	}
	$('.map').css({
		left: frame_width + 'px',
		top: frame_height*2+ header_height*mapKoef + 'px'
	});

	var storiesKoef = 4.5;

	if(frame_width <= 1367 && frame_height < 800) {
		storiesKoef = 4;
	}
	$('.stories').css({
		left: frame_width*2 + 'px',
		top: frame_height*2 + header_height*storiesKoef + 'px'
	});

	var contactKoef = 4;

	if(frame_width <= 1367 && frame_height < 800) {
		contactKoef = 3.5;
	}	
	$('.contact').css({
		left: frame_width + 'px',
		top: frame_height*3 + header_height*contactKoef + 'px'
	});

}

/*choose start Page*/
function loaderDone() {
	$('#mainMenu').delay(800).slideDown(200);
	startPage('project'); 
};

/*startPage*/
function startPage(Page) {
	$('header li a').removeClass('active');
	$('header li a[data-name=' + Page + ']').addClass('active');
	

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
	if($(window).width()>=1024) {
		e.preventDefault();
	}
}, true);