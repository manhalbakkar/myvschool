console.log("ujhk ksdj sdvnsd jnsd");
var sumMad = 0;
var sumBad = 0;
var sumSad = 0;
var myFunc = function(){
    var madvalue = document.getElementById("ca").value;
    sumMad = sumMad + (madvalue * 5);
    document.getElementById("co").value = sumMad;
    
     var badvalue = document.getElementById("da").value;
    sumBad = sumBad + (badvalue * 7);
    document.getElementById("do").value = sumBad;
    
     var sadvalue = document.getElementById("sa").value;
    sumSad = sumSad + (sadvalue * 11);
    document.getElementById("so").value = sumSad;
   
    document.getElementById("output").value = (sumMad + sumBad + sumSad);
}