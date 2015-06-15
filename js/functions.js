$(document).ready(function () {
    /* --------------------------    Accordion slide               */
    $(".tgl").click(function () {
        $(".submenu-open").slideToggle('slow');
    });
    /* --------------------------    Accordion tabs slide          */
    $(".heading").click(function () {
        $(this).toggleClass('select-heading');
        var $idElement = $(this).siblings(".body-panel").attr('id');
        var $slideElement = $(".body-panel:not(#" + $idElement + ")");
        $(this).siblings(".body-panel").slideToggle('slow');
        $slideElement.slideUp('slow');
        $slideElement.prev('.select-heading').removeClass('select-heading');
    });
    /* --------------------------    Tablet menu                   */
    $('.submenu-open-tablet').hide();
    $('.navbar-nav>li').click(function () {
        var liId = $(this).attr('id');
        $(".navbar-nav>li:not(#" + liId + ")").removeClass("active-li");
        $(this).toggleClass("active-li");
        $(".submenu-open-tablet[data-id='" + liId + "']").slideToggle('slow');
        $(".submenu-open-tablet:not([data-id='" + liId + "'])").hide();
    });
    $('.nav-tabs li').click(function () {
        var liId = $(this).attr('id');
        $("#" + liId).addClass("active");
        $('li:not(#' + liId + ')').removeClass("active");
    });

    /* --------------------------    Slider functions              */
    var slideWrap = $('.slide-wrap');
    var slideWidth = $('.slide-item').outerWidth();
    var newLeftPos = slideWrap.position().left - slideWidth;
    $(window).resize(function () {
        slideWidth = $('.slide-item').outerWidth();
        newLeftPos = slideWrap.position().left - slideWidth;
    });
    var nextLink = $('.next-slide');
    var prevLink = $('.prev-slide');
    nextLink.click(function () {
        $('.submenu-open-tablet').hide();
        $(".navbar-nav>li").removeClass("active-li");
        if (!slideWrap.is(':animated')) {

            slideWrap.animate({left: newLeftPos}, 1000, function () {
                slideWrap
                    .find('.slide-item:first')
                    .appendTo(slideWrap)
                    .parent()
                    .css({'left': 0});
            });
        }
    });
    prevLink.click(function () {
        $('.submenu-open-tablet').hide();
        $(".navbar-nav>li").removeClass("active-li");
        if (!slideWrap.is(':animated')) {

            slideWrap
                .css({'left': newLeftPos})
                .find('.slide-item:last')
                .prependTo(slideWrap)
                .parent()
                .animate({left: 0}, 1000);

        }
    });
    /* --------------------------    View all products                   */
    var $productHalfBlock = '.twice:nth-last-of-type(n+2)';
    var $productBlock = '.fourfold:nth-last-of-type(n+2)';
    $('.content__section-view-all').click(function (e) {
        $(e.target).toggleClass('clicked');
        $(e.target).addClass('some-class');
        var $changeDisplay = $('.clicked').closest('.content__section');
        var $fourfolds = $changeDisplay.find($productBlock);
        var $twices = $changeDisplay.find($productHalfBlock);

        if ($(e.target).hasClass("clicked")) {
            $(e.target).text("Close all");
            if ($('body').width() < 582) {
                $fourfolds.removeClass('flex-display');
                $twices.removeClass('flex-display');
                $fourfolds.addClass('block-display');
            }
            else if ($('body').width() > 781) {
                $fourfolds.addClass('flex-display');
                $twices.addClass('flex-display');
            }
            else {
                $fourfolds.addClass('block-display');
                $twices.addClass('flex-display');
            }
        }
        else {
            var $closeIt =  $(e.target).closest('.content__section');
            $(e.target).text("View all");
            $closeIt.find($productBlock).removeClass('flex-display');
            $closeIt.find($productHalfBlock).removeClass('flex-display');
            $closeIt.find($productBlock).removeClass('block-display');
            $closeIt.find($productHalfBlock).removeClass('block-display');
        }
    });
    $(window).resize(function () {

        /* submenu fix*/
        $('.submenu-open-tablet').hide();
        $(".navbar-nav>li").removeClass("active-li");

        var $changeDisplayResize = $('.clicked').closest('.content__section');
        var $fourfold = $changeDisplayResize.find($productBlock);
        var $twice = $changeDisplayResize.find($productHalfBlock);

        if (($('body').width() < 582) && ( $fourfold.hasClass('block-display') == true)) {
            $fourfold.removeClass('flex-display');
            $twice.removeClass('flex-display');
            $twice.removeClass('block-display');
            $fourfold.addClass('block-display');

        }
        if (($('body').width() > 781) && (($fourfold.hasClass('block-display') == true) || ($fourfold.hasClass('flex-display') == true))) {
            $fourfold.removeClass('block-display');
            $twice.removeClass('block-display');
            $fourfold.addClass('flex-display');
            $twice.addClass('flex-display');
        }
        if ((($('body').width() > 581) && ($('body').width() < 782)) && (($fourfold.hasClass('block-display') == true) || ($fourfold.hasClass('flex-display') == true))) {
            $fourfold.removeClass('flex-display');
            $twice.removeClass('block-display');
            $fourfold.addClass('block-display');
            $twice.addClass('flex-display');
        }

    });
});