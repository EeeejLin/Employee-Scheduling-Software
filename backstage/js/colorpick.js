$(document).click(function (e)
{
    if (!$(".pick").is(e.target) && $(".pick").has(e.target).length == 0 && !$("table").is(e.target) && $("table").has(e.target).length == 0)
    {
    $(".pick").css('background-color','#fff');
    $(".pick").css('color','#696969');
    }
})
$(".pick").on("click", function () {

    /每次按其他顏色先消失/

    $(".pick").css('background-color','#fff');
    $(".pick").css('color','#696969');
    color = $(this).css('border-top-color');
    /邊框顏色變成背景顏色/
    console.log(color)
     $(this).css('color','#fff;');

     /字顏色/ 
     
     $(this).css('background-color', color );
     white = $(this).css('color');
     word = $(this).html(); 
  
})
$('.row').on('click', function () {
    $(this).css("background-color", color );
    $(this).css("color", white );
    $(this).html(word); 
});