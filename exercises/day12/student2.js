var Students = function(name, tel, birthday, result ){
    this.name=name;
    this.tel=tel;
    this.birthday = birthday;
    this.result = result;
    this.Age= function(birthday){
        var ageDifMs = Date.now() - birthday.getTime();
       
    }
}
    
var stu12 = new Students("ahmed" ,"445423", "25/5/1999", "pass");