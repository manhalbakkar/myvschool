
console.log("in the js file");
   var sumMad=0;
   var sumBad=0;
   var sumSa=0;
var myFunc = function(){
 
 var madValue = document.getElementById("ca").value;
 sumMad=sumMad+(madValue*5);
 document.getElementById("co").value=sumMad;
    
  var badValue = document.getElementById("da").value;
 sumBad=sumBad+(badValue*5);
 document.getElementById("do").value=sumBad;
    
 var saValue = document.getElementById("sa").value;
 sumSa=sumMad+(saValue*5);
 document.getElementById("so").value=sumSa;
    

 document.getElementById("output").value=(sumMad + sumBad + sumSa);

}