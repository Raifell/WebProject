$(document).ready(function () {
    // Открытие-Закрытие выпадающего меню
    $('.sub-btn').click(function () {
        $(this).next(".sub-menu").slideToggle();
        $(this).find('.dropdown').toggleClass('rotate');
    });
    // Показать-Скрыть меню
    $('.menu-btn').click(function () {
        $('.side-bar').addClass('active');
        $('.menu-btn').css("visibility", "hidden");
    });
    $('.close-btn').click(function () {
        $('.side-bar').removeClass('active');
        $('.menu-btn').css("visibility", "visible");
    });
});