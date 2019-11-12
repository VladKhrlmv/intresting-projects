// 1 (седекторы)

$(document).ready(function () { // проверяет загрузилась ли вся страница

    // //!селекторы

    // //? селекторы по id, class, tagName

    // $('p').css('border', 'solid 3px red');
    // $('.cl').css('border', 'solid 3px blue');

    // //? Селекторы взаимодействия (parent, child, + ~ и т.д.)

    // $('body h1').css('border', 'solid 3px red'); 
    // $('h1 + p').css('border', 'solid 3px purple');
    // $('h1').parent().css('border', 'solid 3px black');
    // $('h1 ~ p').css('border', 'solid 3px purple');

    // //? Простые фильтры (:first, :last, even, odd, eq и т.д.)

    // $('p:first').css('border', 'solid 3px green'); // p:last, p:even, p:odd, p:eq(0)

    //? фильтры по содержимому(:has, :parent, :empty и т.д.)

    // $('h1:has(span)').css('border', 'solid 3px black');
    // $('p:empty').css('border', 'solid 3px red');

    //? фильтры по аттрибутам ([name ~= value] и т.д.)

    $('a[href = "google.com"]').css('border', 'solid 3px black');
    // $('a[href != "google.com"]').css('border', 'solid 3px black');
    // $('a[href ^= "http"]').css('border', 'solid 3px black'); //те которые начинаются с http
    // $('a[href $= ".ru"]').css('border', 'solid 3px black'); //те которые оканчиваются на .ru
    






















});