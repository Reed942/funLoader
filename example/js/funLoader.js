/*--------------------------------------------------------------------
 *JAVASCRIPT "FunLoader.js"
 *Version:    1.0.0 - 2017
 *author:     Reed Fan
 *website:    
 *Licensed 
-----------------------------------------------------------------------*/
(function ($) {
	
    $.fn.funLoader = function(options) {

        //Defaults
        var settings = $.extend({
        	timeToHideAble:true, // Should check the time to hide
            timeToHide:800, // Default Time to hide fakeLoader
            pos:'fixed',// Default Position
            top:'0px',  // Default Top value
            left:'0px', // Default Left value
            width:'100%', // Default width 
            height:'100%', // Default Height
            zIndex: '999',  // Default zIndex 
            bgColor: '', // Default background color
            spinner:'spinner8', // Default Spinner
            imagePath:'' // Default Path custom image
        }, options);
        
        timeToHideAble = settings.timeToHideAble;

        //Customized Spinners
        var spinner01 = '<div class="fl spinner1"><div class="double-bounce1"></div><div class="double-bounce2"></div></div>';
        var spinner02 = '<div class="fl spinner2"><div class="spinner-container container1"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div><div class="spinner-container container2"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div><div class="spinner-container container3"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div></div>';
        var spinner03 = '<div class="fl spinner3"><div class="dot1"></div><div class="dot2"></div></div>';
        var spinner04 = '<div class="fl spinner4"></div>'; 
        var spinner05 = '<div class="fl spinner5"><div class="cube1"></div><div class="cube2"></div></div>'; 
        var spinner06 = '<div class="fl spinner6"><div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div><div class="rect5"></div></div>'; 
        var spinner07 = '<div class="fl spinner7"><div class="circ1"></div><div class="circ2"></div><div class="circ3"></div><div class="circ4"></div></div>'; 
        var spinner08 = '<div class="fl spinner8"><div class="sk-spinner sk-spinner-three-bounce"><div class="sk-bounce1"></div><div class="sk-bounce2"></div><div class="sk-bounce3"></div></div></div>';
        
        //The target
        var el = $(this);

        //Init styles
        var initStyles = {
            'position':settings.pos,
            'width':settings.width,
            'height':settings.height,
            'top':settings.top,
            'left':settings.left
        };

        //Apply styles
        el.css(initStyles);

        //Each 
        el.each(function() {
            var a = settings.spinner;
            //console.log(a)
                switch (a) {
                    case 'spinner1':
                            el.html(spinner01);
                        break;
                    case 'spinner2':
                            el.html(spinner02);
                        break;
                    case 'spinner3':
                            el.html(spinner03);
                        break;
                    case 'spinner4':
                            el.html(spinner04);
                        break;
                    case 'spinner5':
                            el.html(spinner05);
                        break;
                    case 'spinner6':
                            el.html(spinner06);
                        break;
                    case 'spinner7':
                            el.html(spinner07);
                        break;
                    case 'spinner8':
                        	el.html(spinner08);
                        break;
                    default:
                        el.html(spinner01);
                    }

                //Add customized loader image

                if (settings.imagePath !='') {
                    el.html('<div class="fl"><img src="'+settings.imagePath+'"></div>');
                }
                centerLoader();
        });
        
        $.extend({ 
        	loadStop:function(){
        		setTimeout(function(){$(el).fadeOut();}, settings.timeToHide);
        	} 
        });
        
        if (settings.timeToHideAble) {
        	//Time to hide funLoader
        	setTimeout(function(){$(el).fadeOut();}, settings.timeToHide);
        }
        

        //Return Styles 
        return this.css({
            'backgroundColor':settings.bgColor,
            'zIndex':settings.zIndex
        });

 
    }; // End Fake Loader
 
    	var timeToHideAble = false;//same as settings.timeToHideAble
    
        //Center Spinner
        function centerLoader() {
        	
            var winW = $(window).width();
            var winH = $(window).height();

            var spinnerW = $('.fl').outerWidth();
            var spinnerH = $('.fl').outerHeight();

            $('.fl').css({
                'position':'absolute',
                'left':(winW/2)-(spinnerW/2),
                'top':(winH/2)-(spinnerH/2)
            });
            
        }

        $(function () {
        	centerLoader();
            $(window).resize(function(){
            	centerLoader();
            });
    	});
        
        $(window).load(function(){
        	if (!timeToHideAble){
        		$.loadStop();
        	}
        });


}(jQuery));




