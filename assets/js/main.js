var lastFocusedElement = null;
$(document).ready(function () {
    //addAccessibilityRolesAndTab();
    //setTabIndex();
    document.addEventListener('keydown', function (e) {
        var code = e.keyCode ? e.keyCode : e.which;
        if (e.keyCode === 9) {
            $('body').addClass('show-focus-outlines');
        }
    });
    document.addEventListener('click', function (e) {
        $('body').removeClass('show-focus-outlines');
    });

    setTimeout(function () {
        $(".annim1").removeClass("annim1")
        $(".annim2").removeClass("annim2")
        $(".annim3").removeClass("annim3")
        $(".annim4").removeClass("annim4")
        $(".annim4").removeClass("annim5")
        $(".annim4").removeClass("annim6")
    }, 3000)

});

$(document).on('click', '.link-learmore', function (event) {
    event.preventDefault();
    $('.container-fs-popup.disclaimer').ShowElement();
    $(".disclaimerHeader").focus();
    $(".container-fs").HideElement();
    lastFocusedElement = $(this);
});


$(document).on('click', '#disclaimerClose', function (event) {
    event.preventDefault();
    $(".container-fs").ShowElement();
    lastFocusedElement.focus();
    $('.container-fs-popup.disclaimer').HideElement();
});

$(document).on("click", '.link-tab', function (event) {
    //debugger;
    if (!$(this).hasClass("active")) {
        var dataid = $(this).attr("data-tabid");
        $(".link-tab.active").removeClass("active").attr("aria-selected", "false")
        $(this).addClass("active").attr("aria-selected", "true")
        $("#" + dataid).ActiveTabs();
        $("#" + dataid).find(".side-nav li a:first").focus();
        $(".container-fs.slide:not(#" + dataid + ")").InactiveTabs();
    }
});

$(document).on("click", ".left-side-bar .side-nav ul li a", function (event) {
    var panelregion = $(this).attr("panelregion");
    var panelId = $(this).attr("panelid");
    $(".side-nav." + panelregion + " ul li a").removeClass("active").attr("aria-current", "false").removeAttr("aria-describedby");
    $(this).addClass("active").attr("aria-current", "true").attr("aria-describedby", "selectedMenuText");

    $("." + panelregion + ".content-panel").removeClass("active").addClass("inactive").attr("aria-hidden", "true");
    $("." + panelregion + ".content-panel." + panelId).removeClass("inactive").addClass("active").attr("aria-hidden", "false");
    event.preventDefault();
	event.stopPropagation();
})

$(document).on("click", ".card-body .card-link", function (event) {
    var tablinkid = $(this).attr("data-tablinkid");
    $("#" + tablinkid).trigger("click");
    event.preventDefault();
	event.stopPropagation();
})

$(document).on('click', '.activitySupport', function (event) {
    event.preventDefault();
    debugger
    var popupref = $(this).attr("popupref")
    $('.container-fs-popup.' + popupref).ShowElement();
    var ashlength = $('.container-fs-popup.' + popupref).find(".activitySupportHeading").length;
    if(ashlength>0){
        $('.container-fs-popup.' + popupref).find(".activitySupportHeading").focus();
    }
    else{
        if($('.container-fs-popup.' + popupref).find(".activityLeft-title").length>0){
            $('.container-fs-popup.' + popupref).find(".activityLeft-title").focus();
        }
        else{
            $('.container-fs-popup.' + popupref).find(".activityLeft-title1").focus();
        }
    }
    $(".container-fs").HideElement();
    lastFocusedElement = $(this);
    event.preventDefault();
	event.stopPropagation();
});

$(document).on('click', '.ac-popup-close-btn', function (event) {
    $(".container-fs").ShowElement();
    lastFocusedElement.focus();
    $(this).closest(".container-fs-popup").HideElement();
    event.preventDefault();
	event.stopPropagation();
});

$(document).on('click', '.moreInfo', function (event) {
    event.preventDefault();
    var popupref = $(this).attr("popupref")
    $('.container-fs-popup.aboutauthor').ShowElement();
    $(".aboutauthorHeader:first").focus();
    $(".container-fs").HideElement();
    lastFocusedElement = $(this)
    event.preventDefault();
	event.stopPropagation();
});

$(document).on('click', '#aboutauthorClose', function (event) {
    event.preventDefault();
    $(".container-fs").ShowElement();
    lastFocusedElement.focus();
    $('.container-fs-popup.aboutauthor').HideElement();
    event.preventDefault();
	event.stopPropagation();
});

$(document).on('keypress', '#aboutauthorClose, .ac-popup-close-btn, #disclaimerClose', function (event) {
    if(event.which == 13 || event.which == 32) {
        $(this).click();
    }
});




