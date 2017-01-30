var outPut = [];

function jj(num) {
    var myNum = num.toString();
    for (var i = 0; i < myNum.length; i++) {
        outPut.push(parseInt(myNum[i]));
    }
    console.log(outPut);
}



jj(11589);