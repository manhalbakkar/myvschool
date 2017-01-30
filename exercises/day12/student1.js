var students= function(){
   
    
 var stu = [{ name:"ahmed" , tel:"03-454121" , datebirth:"12/8/2001" , grades:[100 , 100 ,100 , 88 , 32], result:""},
           { name:"abc" , tel:"03-6454121" , datebirth:"12/8/2001" , grades:[75 , 32 ,55 , 77 , 32], result:""},
           { name:"hiba" , tel:"01-454121" , datebirth:"12/8/2001" , grades:[75 , 45 ,58 , 66 , 32], result:""},
           { name:"akram" , tel:"03-4875121" , datebirth:"12/8/2001" , grades:[75 , 100,100 , 55 , 32], result:""},
           { name:"khaled" , tel:"03-4545451" , datebirth:"12/8/2001" , grades:[44 , 20 ,100 , 100 , 32], result:""}]
for (var i = 0 ; i < stu.length ; i++){
    var sum = 0;
         for (var j = 0 ; j< stu[i].grades.length-1;j++ ){
             sum = sum + stu[i].grades[j];
              
         }
    if (sum / stu[i].grades.length <60) {
        console.log("sum is" + sum);
         stu[i].result="F" ;
        stu[i].avg=sum / stu[i].grades.length ;
    } else {
           stu[i].result="p" ;
           stu[i].avg=sum / stu[i].grades.length ;    
        
    }      
}
   return stu  ;
}

var student=students();
function sortStudents(first, second) {
    return first.avg - second.avg;
}
student.sort(sortStudents).reverse();

console.log(student);


