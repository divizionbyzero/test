jQuery(document).ready(function () {
    function htmSlider() {
        /* ������� ��������� ���������� */

        /* ������� �������� */
        var slideWrap = jQuery('.slide-wrap');
        /* ������ �� ���������� ���������� ����� */
        var nextLink = jQuery('.next-slide');
        var prevLink = jQuery('.prev-slide');

        /* ������ ������ � ��������� */
        var slideWidth = jQuery('.slide-item').outerWidth();

        /* �������� �������� */
        var newLeftPos = slideWrap.position().left - slideWidth;

        /* ���� �� ������ �� ��������� ����� */
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

        /* ���� �� ������ �� ����������� ����� */
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

    var productHalfBlock = '.twice:nth-last-of-type(n+2)';
    var productBlock = '.fourfold:nth-last-of-type(n+2)';
    
    htmSlider();
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