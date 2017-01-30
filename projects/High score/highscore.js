var arr = [];

$("#save").click(function () {
    $(".output tr").remove()
    arr.push({
        name: $("#na").val(),
        game: $("#ga").val(),
        date: $("#da").val(),
        highScore: $("#hi").val(),
        message: $("#ma").val(),
    })
    sortScore()

})
var sortScore = function () {
    arr.sort(function (a, b) {
        return a.highScore - b.highScore;
    });
    for (var i = 0; i < arr.length; i++) {
        $(".output").append('<tr><td>' + arr[i].name + '</td><td>' + arr[i].game + '</td><td>' + arr[i].date + '</td><td>' + arr[i].highScore + '</td></tr>');
    }
    if (ma.checked == true) {
        alert("that is ok");

    } else {
        alert('ckeck message');
    }
}