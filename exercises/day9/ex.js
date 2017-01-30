function duplicate(input){
    
    var str1="";
    var str2="";
    for(var i=0;i<input.length;i++){
        if(str1.indexOf(input[i])==-1)
            str1=str1+input[i];
        else
            str2=str2+input[i];
    }
    console.log(str1);
    console.log(str2);
}
duplicate("bookkeeper larry");