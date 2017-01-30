var res1=0;
var res2=0;
var res3=0;
//var myFunc =function(){ 
//   var madvalue  = Number($("#ca").val());
//   sumMad=sumMad + (madvalue*5);
//   $("#co").val(sumMad);
//   var badvalue = Number($("#da").val());
//   sumBad = sumBad + (badvalue*7);
//   $("#do").val(sumBad);
//   var sadvalue = Number($("#sa").val());
//   sumSa = sumSa + (sumSa*11);
//   $("#so").val(sumSa);
//   $("#output").val(sumMad + sumBad + sumSa);
//    
// }
   
$("#ca").click(function(){
   res1 = Number($("#ca").val()) * 5;
   $("#co").val(res1); 
});

$("#da").click(function(){
   res2 = Number($("#da").val()) * 7;
   $("#do").val(res2); 
});
$("#sa").click(function(){
   res3 = Number($("#sa").val()) * 11;
   $("#so").val(res3); 
});



function myFunc() {
     $("#output").val(res1 + res2 + res3);
}