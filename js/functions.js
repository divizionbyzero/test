$(document).ready(function () {
    /* --------------------------    Accordion slide               */
    $(".tgl").click(function () {
        $(".submenu-open").slideToggle('slow');
    });
    /* --------------------------    Accordion tabs slide          */
    $(".heading").click(function () {
        $(this).toggleClass('select-heading');
        var idElement = $(this).siblings(".body-panel").attr('id');
        $(this).siblings(".body-panel").slideToggle('slow');
        $(".body-panel:not(#" + idElement + ")").slideUp('slow');
        $(".body-panel:not(#" + idElement + ")").prev('.select-heading').removeClass('select-heading');
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
    console.log("//" + slideWidth);
    $(window).resize(function () {
        slideWidth = $('.slide-item').outerWidth();
        newLeftPos = slideWrap.position().left - slideWidth;
        console.log(slideWidth);
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
    var productHalfBlock = '.twice:nth-last-of-type(n+2)';
    var productBlock = '.fourfold:nth-last-of-type(n+2)';
    $('.content__section-view-all').click(function (e) {
        $(e.target).addClass('clicked');
        if ($('body').width() < 582) {
            $('.clicked').closest('.content__section').find(productBlock).removeClass('flex-display');
            $('.clicked').closest('.content__section').find(productHalfBlock).removeClass('flex-display');
            $(e.target).closest('.content__section').find(productBlock).addClass('block-display');
        }
        else if ($('body').width() > 781) {
            $(e.target).closest('.content__section').find(productBlock).addClass('flex-display');
            $(e.target).closest('.content__section').find(productHalfBlock).addClass('flex-display');
        }
        else {
            $(e.target).closest('.content__section').find(productBlock).addClass('block-display');
            $(e.target).closest('.content__section').find(productHalfBlock).addClass('flex-display');
        }
    });
    $(window).resize(function () {
        $('.submenu-open-tablet').hide();
        $(".navbar-nav>li").removeClass("active-li");
        if (($('body').width() < 582) && ( $('.clicked').closest('.content__section').find(productBlock).hasClass('block-display') == true)) {
            $('.clicked').closest('.content__section').find(productBlock).removeClass('flex-display');
            $('.clicked').closest('.content__section').find(productHalfBlock).removeClass('flex-display');
            $('.clicked').closest('.content__section').find(productHalfBlock).removeClass('block-display');
            $('.clicked').closest('.content__section').find(productBlock).addClass('block-display');

        }
        if (($('body').width() > 781) && (($('.clicked').closest('.content__section').find(productBlock).hasClass('block-display') == true) || ($('.clicked').closest('.content__section').find(productBlock).hasClass('flex-display') == true))) {
            $('.clicked').closest('.content__section').find(productBlock).removeClass('block-display');
            $('.clicked').closest('.content__section').find(productHalfBlock).removeClass('block-display');
            $('.clicked').closest('.content__section').find(productBlock).addClass('flex-display');
            $('.clicked').closest('.content__section').find(productHalfBlock).addClass('flex-display');
        }
        if ((($('body').width() > 581) && ($('body').width() < 782)) && (($('.clicked').closest('.content__section').find(productBlock).hasClass('block-display') == true) || ($('.clicked').closest('.content__section').find(productBlock).hasClass('flex-display') == true))) {
            $('.clicked').closest('.content__section').find(productBlock).removeClass('flex-display');
            $('.clicked').closest('.content__section').find(productHalfBlock).removeClass('block-display');
            $('.clicked').closest('.content__section').find(productBlock).addClass('block-display');
            $('.clicked').closest('.content__section').find(productHalfBlock).addClass('flex-display');
        }

    });
});