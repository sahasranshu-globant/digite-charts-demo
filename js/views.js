$(document).ready(function() {
    var grid = null;
    $(".grid-stack-item-content").on("click", function(e) {
        $(".grid-stack-item-content").find("a.close").addClass("hide");
        $(this).find("a.close").removeClass("hide");
        //$(".grid-stack-item-content").removeClass("selected");
        //$(this).addClass("selected");
    });
    /*$(".close").click(function(event) {
        grid = $('.grid-stack').gridstack({}).data('gridstack');
        console.log($(event.target).parent().parent().parent());
        $(event.target).parent().parent().parent().remove();
        var ele = $(event.target).parent().parent().parent().find('.grid-stack-item');
        grid.remove_widget(ele, true);
    });*/
    $(function() {
        var options = {
           //float: true;
        };
        grid = $('.grid-stack').gridstack(options);
        $('.grid-stack-item-content').each(function() {});
    });

     $(".widget-list").on("click", function(){
        $(".widgets-list-container").slideToggle();
     });

     $('[data-toggle="tooltip"]').tooltip();

     $('.custom-popover').popover();

     /******* Chart/Table toggle button **********/
     $('.toggle-btn .btn').on('click', function(){
        if($(this).hasClass('selected')){
           $(this).addClass('selected');
        } else {
           $('.toggle-btn .btn').removeClass('selected');
           $(this).addClass('selected');
        }
     });
    
     /********* Showing Export view checkboxes and footer *******/
     $('body').on('click', '.export-pages', function(){
        $('.custom-checkbox, .export-footer').show();
     });

     /********* Adding selected class to cards on check box select *******/
     $(".checkbox").change(function(e) {
        if(this.checked) {
           e.stopPropagation();
           $(this).parents('.grid-stack-item-content').addClass('selected');
        }
     });
    
     
     /************** Edit Page heading **********************/
     $('.page-heading span').on('mouseenter', function(){
        /*$(this).next('.custom-dropdown').hide();*/
        $(this).parent().parent('.heading-section').find('.custom-dropdown').hide();
        $(this).parent('.page-heading').find('.edit-heading').show();
        if($(this).width() > 400){
            //alert(4);
            $(this).parent('.page-heading').removeClass('ellipsis');
            $(this).parent('.page-heading').addClass('reverse-ellipsis');
        }
     });
     $('.page-heading span').on('mouseleave', function(){
        /*$(this).next('.custom-dropdown').show();*/
        $(this).parent().parent('.heading-section').find('.custom-dropdown').show();
        $(this).parent('.page-heading').find('.edit-heading').hide();
        $(this).parent('.page-heading').removeClass('reverse-ellipsis');
        $(this).parent('.page-heading').addClass('ellipsis');
     });
    
     var pleft = $('.page-name').width();
     //alert($('.page-name')[0].offsetWidth);
     $('.page-heading-dropdown').css('left', pleft + 60);

     /************************ Show Subpopover dropdown **********************/
     $('body').on('mouseover', '.open-subpopover', function(){
         $('.subpopover-menu').hide();
         $(this).next('.subpopover-menu').show();
     });

     $('body').on('mouseover', '.subpopover-menu', function(){
         $(this).parent('li').find('a:first').addClass('active-submenu');
     });
     $('body').on('mouseleave', '.subpopover-menu', function(){
         $(this).parent('li').find('a:first').removeClass('active-submenu');
     });
    
    
     /************************** Edit Headings **************************/
     $('.page-heading span.page-name').on('click', function(e){
        $('.edit-text').show().focus();
        $('.edit-text').val($('.page-heading span').text());
        $('.page-heading span').hide();
        $('.page-heading a').hide();
        $('.page-heading span').on('mouseleave', function(){
            $(this).next('.custom-dropdown').hide();
         });
     });
    
    /********* Edit hierarchy features toggle ************/
    $(".second-feature").click(function () {
       $(".second-list").css({display:'block'});
       $(".first-list").css({display:'none'});
       $(".third-list").css({display:'none'});
       $(".edit-features").removeClass("active");
       $(this).addClass("active");
    });
    $(".first-feature").click(function () {
       $(".first-list").css({display:'block'});
       $(".second-list").css({display:'none'});
       $(".third-list").css({display:'none'});
       $(".edit-features").removeClass("active");
       $(this).addClass("active");
    });
    $(".third-feature").click(function () {
       $(".third-list").css({display:'block'});
       $(".first-list").css({display:'none'});
       $(".second-list").css({display:'none'});
       $(".edit-features").removeClass("active");
       $(this).addClass("active");
    });
    
    /***************** WIDGET CONFIGURATION TABS *********************/
    $(".second-tab").click(function () {
       $(".tabs-content").addClass('hide');
       $(".second-tab-content").addClass('show');
       $(".vertical-tabs").removeClass("active");
       $(this).addClass("active");
    });
    $(".first-tab").click(function () {
       $(".tabs-content").addClass('hide');
       $(".first-tab-content").addClass('show');
       $(".vertical-tabs").removeClass("active");
       $(this).addClass("active");
    });
    $(".third-tab").click(function () {
       $(".tabs-content").addClass('hide');
       $(".third-tab-content").addClass('show');
       $(".vertical-tabs").removeClass("active");
       $(this).addClass("active");
    });
    
    /**************** KEEPING THE DISPLAY BLOCK POSITION ON CLICK OF SALECT SIZE BUTTON **************************/
    $('.select-size').on('click', function(){
        $(this).css('display', 'block');
    });
    
    /**************** TOGGLING SECURITY PANEL **************************/
    $('.open-security-panel, .close-security-panel').on('click', function(){
        $('.security-panel').toggleClass('open');
        $(".open-security-panel").toggleClass('active');
    });
    /*$(".open-security-panel, .close-security-panel").click(function () {
        var effect = 'slide';
        var options = { direction: 'right' };
        var duration = 400;
        $('.security-panel').toggle('slide', options, duration);
        $(".open-security-panel").toggleClass('active');
    });*/

    /**************** TOGGLING ADD WIDGET PANEL **************************/
    $('.add-widget, .close-widget-panel').on('click', function(){
        $('.add-widget-panel').toggleClass('open');
        $(".add-widget").toggleClass('active');
    });
    /*$(".add-widget, .close-widget-panel").click(function () {
        var effect = 'slide';
        var options = { direction: 'right' };
        var duration = 400;
        $('.add-widget-panel').toggle('slide', options, duration);
        $(".add-widget").toggleClass('active');
    });*/

    /********* slide-toggle Hierarchy window ************/
     $(".open-hierarchy, .close-hierarchy").click(function () {
        var effect = 'slide';  
        var options = { direction: 'right' };
        var duration = 400;
        $('.edit-hierarchy').toggle('slide', options, duration);
        $(".open-hierarchy").toggleClass('active');
     });
    
    /***************** CODE TO MAKE WIDTH OF EDIT BOX EQUAL TO PAGE HEADING NAME ************************/
    var editbox = $('.page-name').width();
    $('.page-heading .edit-text').css('width', editbox + 20);
    
    /***************** CODE TO ADD TOOLTIP ON ICON LIST ************************/
    /*$('.icon-list li').tooltip ({    
        placement : 'top',
        trigger : 'hover',
        title : $(this).attr("title")         
    });*/
    
    $(".icon-Search").on('click', function(){
        $('.searchbox').show();
    });
    /***************** WIDGETS GROUP TOGGLE ARROW ************************/
    $('.widget-list-container h3 a').on('click', function(){
        //$(this).removeClass('glyphicon-chevron-right');
        $(this).toggleClass('icon-Down-Arrow');
    });
    
     ( function ( document, window, index )
        {
           var inputs = document.querySelectorAll( '.inputfile' );
           Array.prototype.forEach.call( inputs, function( input )
           {
              var label    = input.nextElementSibling,
                 labelVal = label.innerHTML;

              input.addEventListener( 'change', function( e )
              {
                 var fileName = '';
                 if( this.files && this.files.length > 1 )
                    fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
                 else
                    fileName = e.target.value.split( '\\' ).pop();

                 if( fileName )
                    label.querySelector( 'span' ).innerHTML = fileName;
                 else
                    label.innerHTML = labelVal;
              });

              // Firefox bug fix
              input.addEventListener( 'focus', function(){ input.classList.add( 'has-focus' ); });
              input.addEventListener( 'blur', function(){ input.classList.remove( 'has-focus' ); });
           });
        }( document, window, 0 )
     );
});