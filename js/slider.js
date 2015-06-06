jQuery(document).ready(function () {
    function htmSlider() {
        /* «ададим следующие переменные */

        /* обертка слайдера */
        var slideWrap = jQuery('.slide-wrap');
        /* ссылки на предудыщий иследующий слайд */
        var nextLink = jQuery('.next-slide');
        var prevLink = jQuery('.prev-slide');

        /* ширина слайда с отступами */
        var slideWidth = jQuery('.slide-item').outerWidth();

        /* смещение слайдера */
        var newLeftPos = slideWrap.position().left - slideWidth;

        /*  лик по ссылке на следующий слайд */
        nextLink.click(function () {
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

        /*  лик по ссылке на предыдующий слайд */
        prevLink.click(function () {
            if (!slideWrap.is(':animated')) {

                slideWrap
                    .css({'left': newLeftPos})
                    .find('.slide-item:last')
                    .prependTo(slideWrap)
                    .parent()
                    .animate({left: 0}, 1000);

            }
        });


    }

    htmSlider();

    $('.content__section-view-all').click(function (e) {
        $(e.target).addClass('clicked');
        if ($('body').width() < 582) {
            $(e.target).closest('.content__section').find('.fourfold:nth-last-of-type(n+2)').addClass('block-display');
        }
        else if ($('body').width() > 781) {
            $(e.target).closest('.content__section').find('.fourfold:nth-last-of-type(n+2)').addClass('flex-display');
            $(e.target).closest('.content__section').find('.twice:nth-last-of-type(n+2)').addClass('flex-display');
        }
        else {
            $(e.target).closest('.content__section').find('.fourfold:nth-last-of-type(n+2)').addClass('block-display');
            $(e.target).closest('.content__section').find('.twice:nth-last-of-type(n+2)').addClass('flex-display');
        }
    });

    $(window).resize(function () {

        if (($('body').width() < 582) && ( $('.clicked').closest('.content__section').find('.fourfold:nth-last-of-type(n+2)').hasClass('block-display') == true)) {
            $('.clicked').closest('.content__section').find('.fourfold:nth-last-of-type(n+2)').removeClass('flex-display');
            $('.clicked').closest('.content__section').find('.twice:nth-last-of-type(n+2)').removeClass('flex-display');
            $('.clicked').closest('.content__section').find('.twice:nth-last-of-type(n+2)').removeClass('block-display');
            $('.clicked').closest('.content__section').find('.fourfold:nth-last-of-type(n+2)').addClass('block-display');

        }
        if (($('body').width() > 781) && (($('.clicked').closest('.content__section').find('.fourfold:nth-last-of-type(n+2)').hasClass('block-display') == true) || ($('.clicked').closest('.content__section').find('.fourfold:nth-last-of-type(n+2)').hasClass('flex-display') == true))) {
            $('.clicked').closest('.content__section').find('.fourfold:nth-last-of-type(n+2)').removeClass('block-display');
            $('.clicked').closest('.content__section').find('.twice:nth-last-of-type(n+2)').removeClass('block-display');
            $('.clicked').closest('.content__section').find('.fourfold:nth-last-of-type(n+2)').addClass('flex-display');
            $('.clicked').closest('.content__section').find('.twice:nth-last-of-type(n+2)').addClass('flex-display');
        }
        if ((($('body').width() > 581) && ($('body').width() < 782)) && (($('.clicked').closest('.content__section').find('.fourfold:nth-last-of-type(n+2)').hasClass('block-display') == true) || ($('.clicked').closest('.content__section').find('.fourfold:nth-last-of-type(n+2)').hasClass('flex-display') == true))) {
            $('.clicked').closest('.content__section').find('.fourfold:nth-last-of-type(n+2)').removeClass('flex-display');
            $('.clicked').closest('.content__section').find('.twice:nth-last-of-type(n+2)').removeClass('block-display');
            $('.clicked').closest('.content__section').find('.fourfold:nth-last-of-type(n+2)').addClass('block-display');
            $('.clicked').closest('.content__section').find('.twice:nth-last-of-type(n+2)').addClass('flex-display');
        }

    });
});