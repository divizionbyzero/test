$(document).ready(function(){
    $(".tgl").click(function(){
       $(".submenu-open").slideToggle('slow');
    });
$(".heading").click(function(){
    $(this).toggleClass('select-heading');
    var idElement = $(this).siblings(".body-panel").attr('id');
    $(this).siblings(".body-panel").slideToggle('slow');
    $(".body-panel:not(#"+idElement+")").slideUp('slow');
    $(".body-panel:not(#"+idElement+")").prev('.select-heading').removeClass('select-heading');
});

    //tablet
$('.submenu-open-tablet').hide();
    $('.navbar-nav>li').click(function(){
        var liId = $(this).attr('id');
        $(".submenu-open-tablet[data-id='" + liId + "']").slideToggle('slow');
        $(".submenu-open-tablet:not([data-id='" + liId + "'])").hide();
        console.log(  $(".submenu-open-tablet[data-id='" + liId + "']"));
    });


    $('.nav-tabs li').click(function(){
        var liId = $(this).attr('id');
        $("#"+liId).addClass("active");
        $('li:not(#'+liId+')').removeClass("active");
    });
});