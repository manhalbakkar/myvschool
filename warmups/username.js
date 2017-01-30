//var userName = "manhal";
//var passWord = "abd";
var chekuserNameandpassWord = function (){
    var x = document.getElementById("username").value;
    var y = document.getElementById("password").value;
    
    if (x == "manhal" && y == "abd"){
        alert("you have logged in");
        console.log ("yes");}
    else {
         alert("the password or the username is not correct");
        console.log ("wrong");
    }
    
};



document.getElementById("button1").addEventListener("click", chekuserNameandpassWord);

