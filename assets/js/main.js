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
    
    setTimeout(function(){
        $(".annim1").removeClass("annim1")
        $(".annim2").removeClass("annim2")
        $(".annim3").removeClass("annim3")
        $(".annim4").removeClass("annim4")
        $(".annim4").removeClass("annim5")
        $(".annim4").removeClass("annim6")
    },3000)
    
});

$(document).on('click', '.link-learmore', function (event) {
    if (event.type === 'click' || (event.type === 'keydown') && (event.keyCode === 13 || event.keyCode === 32)) {
        event.preventDefault();
        $(".container-fs").HideElement();
        $('.container-fs-popup.disclaimer').ShowElement();
    }
});

$(document).on('click', '#disclaimerClose', function (event) {
    if (event.type === 'click' || (event.type === 'keydown') && (event.keyCode === 13 || event.keyCode === 32)) {
        event.preventDefault();
        $(".container-fs").ShowElement();
        $('.container-fs-popup.disclaimer').HideElement();
        setTabIndex();
        lastFocusedElement.focus();
    }
});

$(document).on("click", '.link-tab', function(event){
    //debugger;
    if(!$(this).hasClass("active")){
        var dataid = $(this).attr("data-tabid");
        $(".link-tab.active").removeClass("active")
        $(this).addClass("active")
        $(".container-fs.slide").InactiveTabs();
        $("#" + dataid).ActiveTabs();
    }
});

$(document).on("click", ".left-side-bar .side-nav ul li a", function(event){
    debugger;
    $(".side-nav ul li a").removeClass("active");
    $(this).addClass("active");
    var panelId = $(this).attr("panelid");
    var panelregion = $(this).attr("panelregion");
    $("." + panelregion + ".content-panel").removeClass("active").addClass("inactive");
    $("." + panelregion + ".content-panel." + panelId).removeClass("inactive").addClass("active");
})

$(document).on("click", ".card-body .card-link", function(event){
    var tablinkid = $(this).attr("data-tablinkid");
    $("#" + tablinkid).trigger( "click" );
})
$(document).on("click", "#linkNameTheFullMoon", function(event){
    $(".container-fs").HideElement();
    $('.container-fs-popup.fullmoon').ShowElement();
})

$(document).on("click", "#close-fullmoonimage", function(event){
    $(".container-fs").ShowElement();
    $('.container-fs-popup.fullmoon').HideElement();
})
$(document).on("click", "#fullmoonClose", function(event){
    $(".container-fs").ShowElement();
    $('.container-fs-popup.fullmoon').HideElement();
})


$(document).on('click', '.activitySupport', function (event) {
    if (event.type === 'click' || (event.type === 'keydown') && (event.keyCode === 13 || event.keyCode === 32)) {
        event.preventDefault();
        var popupref = $(this).attr("popupref")
        $(".container-fs").HideElement();
        $('.container-fs-popup.' + popupref).ShowElement();
    }
});

$(document).on('click', '.ac-popup-close-btn', function (event) {
    if (event.type === 'click' || (event.type === 'keydown') && (event.keyCode === 13 || event.keyCode === 32)) {
        event.preventDefault();
        $(".container-fs").ShowElement();
        $(this).closest(".container-fs-popup").HideElement();
        lastFocusedElement.focus();
    }
});

$(document).on('click', '.moreInfo', function (event) {
    if (event.type === 'click' || (event.type === 'keydown') && (event.keyCode === 13 || event.keyCode === 32)) {
        event.preventDefault();
        var popupref = $(this).attr("popupref")
        $(".container-fs").HideElement();
        $('.container-fs-popup.aboutauthor').ShowElement();
    }
});

$(document).on('click', '#aboutauthorClose', function (event) {
    if (event.type === 'click' || (event.type === 'keydown') && (event.keyCode === 13 || event.keyCode === 32)) {
        event.preventDefault();
        $(".container-fs").ShowElement();
        $('.container-fs-popup.aboutauthor').HideElement();
    }
});




