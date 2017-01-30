var count = 0;
$(document).ready(function () {
    $("#btnAdd").click(function () {
        var title = $("#title").val();
        $("#list").append("<li id=" + count + "><button onclick='delteItem(" + count + ")'>X</button>" + title + "</li>");
        $("#title").val("");
        count++;
    });
});

function delteItem(id) {

    $("#" + id).remove();

}