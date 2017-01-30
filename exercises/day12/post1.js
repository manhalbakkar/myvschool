function loadData() {
    $.ajax({
        url: " http://mean.codingcamp.us/manhal1/todo",
        type: "GET",
        success: function (data) {
            for (var i = 0; i < data; i++) {
                $("#output").append("<li id = ' + 'data[i] _id '>' + 'data[i].title' + '</li>");
            }
        }
    });
}

function addData() {
    var title = $("#title").val();
    var description = $("#description").val();
    var price = $("#price").val();
    var imgUrl = $("$imgUrl").val();
    var datd = function () {
        title: title,
        description: description,
        price: price,
        imgUrl: imgUrl
    };
    $ajax({
        URL: " http://mean.codingcamp.us/manhal1/todo",
        type: "POST",
        data: data,
        success: function () {
            loadData();
        }
    });
}
(document).ready(function () {
    $("#btn").click(addData)
});