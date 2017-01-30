$(".one").hover(function()
               {$(".one").css("background-color" , "blue");
               })
$(".one").click(function(){
    $(".one").css("background-color","red");
})
$(".one").dblclick(function(){
    $(".one").css("background-color", "green");
})
$(".one").mouseleave(function(){
    $(".one").css("background-color" , "yellow");
})
$(window).scroll(function(){
    $(".one").css("background-color" , "orange");
})
$(window).kaypress(function(e){
    var x=e.kaycode;
})