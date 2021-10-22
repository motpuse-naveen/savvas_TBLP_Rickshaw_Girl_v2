var btnClicked;
var hoverBtn;
var section2Btn;
var section3Btn;
var section4Btn;
var lastFocusedElement;

$(document).on('click keydown', '.BtnText1', function (event) {
    event.preventDefault();
    if(event.type === 'click' || (event.type === 'keydown') && (event.keyCode === 13 || event.keyCode === 32)){
        $(".Slides").css("display","none");
        $(".BtnText1").removeClass("active")
        $(this).addClass("active")
        $(".BtnText1").removeClass("pointers")
        $(this).addClass("pointers")
        btnClicked = $(this).attr("slideNumber");
        $(".slides"+ btnClicked).css("display","block");
    }
    if(event.type === 'keydown' && event.keyCode == 37){
        $(this).parent('div').prev().find('.BtnText1').focus();
    }
    if(event.type === 'keydown' && event.keyCode == 39){
        $(this).parent('div').next().find('.BtnText1').focus();
    }
    if(event.type === 'keydown' && event.shiftKey && event.keyCode == 9){
        $('.contentContainer').find('[tabindex]:visible').last().focus();
    }
    else if(event.type === 'keydown' && (event.keyCode === 9|| event.keyCode === 40)){
        $('.contentContainer').find('[tabindex]:visible').first().focus();
    }
});

$(document).on('click keydown', '.section2Btns', function (event) {
    event.preventDefault();
    if(event.type === 'click' || (event.type === 'keydown') && (event.keyCode === 13 || event.keyCode === 32)){
    	$(".section2Btns").removeClass("slide2activebtn")
        $(this).addClass("slide2activebtn")
        $(".section2Btns").removeClass("pointers")
        $(this).addClass("pointers")
        $('.section2insideSlides').css("display", "none");
        section2Btn = $(this).attr("section2Buttons");
        $(".s2Slide" + section2Btn).css("display", "block");
    	 if(section2Btn==3){
            $(".section2ActivitySupport").css("display", "block");
        }else{
    		$(".section2ActivitySupport").css("display", "none");
    	}
        // $(".s2Slide" + section2Btn).attr('tabindex',-1).focus();
    }
    if(event.type === 'keydown' && event.keyCode == 38){
        $(this).prev().focus();
    }
    if(event.type === 'keydown' && event.keyCode == 40){
        $(this).next().focus();
    }
    if(event.type === 'keydown' && event.shiftKey && event.keyCode == 9){
        $('.topMenuBar2').find('[tabindex]:visible').last().focus();
    }
    else if(event.type === 'keydown' && event.keyCode === 9){
        if($(".section2ActivitySupport").is(':visible')){
            $(".section2ActivitySupport").focus();
        }
        else if($(".section2insideSlides").find('[tabindex]:visible').length > 0){
            $(".section2insideSlides").find('[tabindex]:visible').first().focus();
        }
        else if($(".section2insideSlides").find('[tabindex]:visible').length == 0){
            $(".section2insideSlides:visible").attr('tabindex','-1').focus();
        }
        else{
            $('.mainContainer').find('[tabindex]:visible').first().focus();
        }
    }
});

$(document).on('click keydown', '.agendaText2', function (event) {
    event.preventDefault();
    if(event.type === 'click' || (event.type === 'keydown') && (event.keyCode === 13 || event.keyCode === 32)){
    	$(".agendaText2").removeClass("slide3activebtn")
        $(this).addClass("slide3activebtn")
        $(".agendaText2").removeClass("pointers")
        $(this).addClass("pointers")
        $('.section3ContentContainer').css("display", "none");
        section3Btn = $(this).attr("section3Buttons");
        $(".s3Slide" + section3Btn).css("display", "block");
        // $(".s3Slide" + section3Btn).focus();
    }
    if(event.type === 'keydown' && event.keyCode == 38){
        $(this).prev().focus();
    }
    if(event.type === 'keydown' && event.keyCode == 40){
        $(this).next().focus();
    }
    if(event.type === 'keydown' && event.shiftKey && event.keyCode == 9){
        $('.topMenuBar2').find('[tabindex]:visible').last().focus();
    }
    else if(event.type === 'keydown' && event.keyCode === 9){
        $(".disclaimerTxt1").find('[tabindex]:visible').first().focus();
    }
});

$(document).on('click keydown', '.agendaText3', function (event) {
    event.preventDefault();
    if(event.type === 'click' || (event.type === 'keydown') && (event.keyCode === 13 || event.keyCode === 32)){
    	$(".agendaText3").removeClass("slide4activebtn")
        $(this).addClass("slide4activebtn")
        $(".agendaText3").removeClass("pointers")
        $(this).addClass("pointers")
        $('.section4Container').css("display", "none");
        section4Btn = $(this).attr("slide4Buttons");
        $(".s4Slides" + section4Btn).css("display", "block");
        $(".s4Slides" + section4Btn).focus();
    }
    if(event.type === 'keydown' && event.keyCode == 38){
        $(this).prev().focus();
    }
    if(event.type === 'keydown' && event.keyCode == 40){
        $(this).next().focus();
    }
    if(event.type === 'keydown' && event.shiftKey && event.keyCode == 9){
        $('.topMenuBar2').find('[tabindex]:visible').last().focus();
    }
    else if(event.type === 'keydown' && event.keyCode === 9){
        if($(".section4Container").find('[tabindex]:visible').length>0){
            $(".section4Container").find('[tabindex]:visible').first().focus();
        }
        else{
            $('.mainContainer').find('[tabindex]:visible').first().focus();
        }
    }
});

$(document).on('click keydown', '#closeIcon', function (event) {
    if(event.type === 'click' || (event.type === 'keydown') && (event.keyCode === 13 || event.keyCode === 32 || event.keyCode === 27)){
        event.preventDefault();
        $('.section2Disclaimer').css("display", "none");
        setTabIndex();
        lastFocusedElement.focus();
    }
});

$(document).on('click keydown', '.addimg', function (event) {
    if(event.type === 'click' || (event.type === 'keydown') && (event.keyCode === 13 || event.keyCode === 32)){
        event.preventDefault();
	   // $('.Slides').css("display", "none");
        $('.section8Slide1Div').css("display", "block");
        removeTabIndex();
        setCustomeTabIndex($('.section8Slide1Div'));
        lastFocusedElement = $(this);
    }
});
$(document).on('click keydown', '.colorBlue', function (event) {
    if(event.type === 'click' || (event.type === 'keydown') && (event.keyCode === 13 || event.keyCode === 32)){
        event.preventDefault();
        $('.section2Disclaimer').css("display", "block");
        removeTabIndex();
        setCustomeTabIndex($('.section2Disclaimer'));
        lastFocusedElement = $(this);
    }
});

$(document).on('click keydown', '#slide1closeIcon1', function (event) {
    if(event.type === 'click' || (event.type === 'keydown') && (event.keyCode === 13 || event.keyCode === 32 || event.keyCode === 27)){
        event.preventDefault();
        $('.section8Slide1Div').css("display", "none");
        setTabIndex();
        lastFocusedElement.focus();
    }
});
$(document).on('click keydown', '.section2ActivitySupport', function (event) {
    if(event.type === 'click' || (event.type === 'keydown') && (event.keyCode === 13 || event.keyCode === 32)){
        event.preventDefault();
        $('.section2ActivitySupportDiv').css("display", "block");
        removeTabIndex();
        setCustomeTabIndex($('.section2ActivitySupportDiv'));
        lastFocusedElement = $(this);
    }
});
$(document).on('click keydown', '#actcloseIcon', function (event) {
    if(event.type === 'click' || (event.type === 'keydown') && (event.keyCode === 13 || event.keyCode === 32 || event.keyCode === 27)){
        event.preventDefault();
        $('.section2ActivitySupportDiv').css("display", "none");
        setTabIndex();
        lastFocusedElement.focus();
    }
});
$(document).on('click keydown', '.section3Slide1ActSuppport', function (event) {
    if(event.type === 'click' || (event.type === 'keydown') && (event.keyCode === 13 || event.keyCode === 32)){
        event.preventDefault();
        $('.section3Slide1ActSuppportDiv').css("display", "block");
        removeTabIndex();
        setCustomeTabIndex($('.section3Slide1ActSuppportDiv'));
        lastFocusedElement = $(this);
    }
});

$(document).on('click keydown', '#section3actcloseIcon', function (event) {
    if(event.type === 'click' || (event.type === 'keydown') && (event.keyCode === 13 || event.keyCode === 32 || event.keyCode === 27)){
        event.preventDefault();
        $('.section3Slide1ActSuppportDiv').css("display", "none");
        setTabIndex();
        lastFocusedElement.focus();
    }
});
$(document).on('click keydown', '.section3Slide2ActSupport1', function (event) {
    if(event.type === 'click' || (event.type === 'keydown') && (event.keyCode === 13 || event.keyCode === 32)){
        event.preventDefault();
        $('.section4Slide2ActSupport1Div').css("display", "block");
        removeTabIndex();
        setCustomeTabIndex($('.section4Slide2ActSupport1Div'));
        lastFocusedElement = $(this);
    }
});

$(document).on('click keydown', '#section4actcloseIcon', function (event) {
    if(event.type === 'click' || (event.type === 'keydown') && (event.keyCode === 13 || event.keyCode === 32 || event.keyCode === 27)){
        event.preventDefault();
        $('.section4Slide2ActSupport1Div').css("display", "none");
        setTabIndex();
        lastFocusedElement.focus();
    }
});

$(document).on('click keydown', '.section3Slide2ActSupport2', function (event) {
    if(event.type === 'click' || (event.type === 'keydown') && (event.keyCode === 13 || event.keyCode === 32)){
        event.preventDefault();
        $('.section4Slide2ActSupport2Div').css("display", "block");
        removeTabIndex();
        setCustomeTabIndex($('.section4Slide2ActSupport2Div'));
        lastFocusedElement = $(this);
    }
});

$(document).on('click keydown', '#section4actcloseIcon1', function (event) {
    if(event.type === 'click' || (event.type === 'keydown') && (event.keyCode === 13 || event.keyCode === 32 || event.keyCode === 27)){
        event.preventDefault();
        $('.section4Slide2ActSupport2Div').css("display", "none");
        setTabIndex();
        lastFocusedElement.focus();
    }
});

$(document).on('click keydown', '.section5Slide1ActSupport', function (event) {
    if(event.type === 'click' || (event.type === 'keydown') && (event.keyCode === 13 || event.keyCode === 32)){
        event.preventDefault();
        $('.section5Slide1ActSupportDiv').css("display", "block");
        removeTabIndex();
        setCustomeTabIndex($('.section5Slide1ActSupportDiv'));
        lastFocusedElement = $(this);
    }
});

$(document).on('click keydown', '#section5actcloseIcon1', function (event) {
    if(event.type === 'click' || (event.type === 'keydown') && (event.keyCode === 13 || event.keyCode === 32 || event.keyCode === 27)){
        event.preventDefault();
        $('.section5Slide1ActSupportDiv').css("display", "none");
        setTabIndex();
        lastFocusedElement.focus();
    }
});
$(document).on('click keydown', '.act1', function (event) {
    if(event.type === 'click' || (event.type === 'keydown') && (event.keyCode === 13 || event.keyCode === 32)){
        event.preventDefault();
        $('.section6Slide1ProTempDiv').css("display", "block");
        removeTabIndex();
        setCustomeTabIndex($('.section6Slide1ProTempDiv'));
        lastFocusedElement = $(this);
    }
});

$(document).on('click keydown', '#proTempcloseIcon1', function (event) {
    if(event.type === 'click' || (event.type === 'keydown') && (event.keyCode === 13 || event.keyCode === 32 || event.keyCode === 27)){
        event.preventDefault();
        $('.section6Slide1ProTempDiv').css("display", "none");
        setTabIndex();
        lastFocusedElement.focus();
    }
});

$(document).on('click keydown', '.act2', function (event) {
    if(event.type === 'click' || (event.type === 'keydown') && (event.keyCode === 13 || event.keyCode === 32)){
        event.preventDefault();
        $('.section7Slide1rubricProjectDiv').css("display", "block");
        removeTabIndex();
        setCustomeTabIndex($('.section7Slide1rubricProjectDiv'));
        lastFocusedElement = $(this);
    }
});

$(document).on('click keydown', '#proRubricscloseIcon1', function (event) {
    if(event.type === 'click' || (event.type === 'keydown') && (event.keyCode === 13 || event.keyCode === 32 || event.keyCode === 27)){
        event.preventDefault();
        $('.section7Slide1rubricProjectDiv').css("display", "none");
        setTabIndex();
        lastFocusedElement.focus();
    }
});

$(document).ready(function () {
    addAccessibilityRolesAndTab();
    setTabIndex();   
    document.addEventListener('keydown', function(e) {
        var code = e.keyCode ? e.keyCode : e.which;
        if (e.keyCode === 9) {
            $('body').addClass('show-focus-outlines');
        }
    });
    document.addEventListener('click', function(e) {
        $('body').removeClass('show-focus-outlines');
    }); 
});
function addAccessibilityRolesAndTab(){
    /* Main */
    $('.conatiner').attr('role','main').removeAttr('tabindex');
    
    /* Navigation */
    $('.topMenuBar2').attr('role','menubar');
    $('.topMenuBar2 .BtnText1').attr('role','menuitem').addClass('tabindex');
    $('.topMenuBar2 .BtnText1').parent('div').attr('role','none');

    /* Left Side Menubar */
    $('.Slides .agendaText').closest('div').attr('role','menubar');
    $('.Slides .agendaText').addClass('tabindex').attr('role','menuitem');

    $('.conatiner img').attr('alt','Placeholder');
    $('.slide1Img2').attr('role','img');
    $('.slide1Img2').attr('alt','Placeholder');
    $('.conatiner a').addClass('tabindex');

    $('.addimg').addClass('tabindex').attr('role','button').attr('alt','More Info');
    $('#slide1closeIcon1').addClass('tabindex').attr('role','button').attr('aria-label','More Info Close');
    
    $('.activitySupportDiv').addClass('tabindex').attr('role','button');
    $('#actcloseIcon').addClass('tabindex').attr('role','button').attr('aria-label','Activity Support Close');
    $('#section3actcloseIcon').addClass('tabindex').attr('role','button').attr('aria-label','Activity Support Close');

    $('.activitySupportDiv1').addClass('tabindex').attr('role','button');
    $('#proTempcloseIcon1').addClass('tabindex').attr('role','button').attr('aria-label','Project Support Close');
    $('#proRubricscloseIcon1').addClass('tabindex').attr('role','button').attr('aria-label','Project Rubic Close');

    $('#section4actcloseIcon').addClass('tabindex').attr('role','button').attr('aria-label','Activity Support Close');
    $('#section4actcloseIcon1').addClass('tabindex').attr('role','button').attr('aria-label','Activity Support Close');
    $('#section5actcloseIcon1').addClass('tabindex').attr('role','button').attr('aria-label','Activity Support Close');

    $('.disclaimerTxt .colorBlue').addClass('tabindex').attr('role','link').attr('href','#');
    $('.disclaimerTxt1 .colorBlue').addClass('tabindex').attr('role','link').attr('href','#');
    $('#closeIcon').addClass('tabindex').attr('role','button').attr('aria-label','Disclaimer Close');



    $('.headingRole').attr('role','heading');

}
function setTabIndex(){
    var tabIndex = 0;
    $('.tabindex').each(function(){
        $(this).attr('tabindex', tabIndex);
    });
}
function removeTabIndex(){
    var tabIndex = -1;
    $('.tabindex').each(function(){
        $(this).attr('tabindex', tabIndex).removeAttr('tabindex');
    });
}
function setCustomeTabIndex(_outerElement){
    var tabIndex = 0;
    _outerElement.find('.tabindex').each(function(){
        $(this).attr('tabindex', tabIndex);
    });
    _outerElement.attr('tabindex',-1).focus().css({'outline':'none'});
}