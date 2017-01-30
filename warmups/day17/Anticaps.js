var student= {name:"ahmed", dateofbirth:"3/9/1986", tel:"2751512", grades :[45 , 55 , 30 , 70 ,57]};

function low(){
  var lowGrade=student.grades[0];
  var name='';
  for (i=1; i<student.grades.length; i++){
    if(lowGrade>student.grades[i]){
      lowGrade=student.grades[i];
      name=student.name;
    }  
    
  }
  console.log(lowGrade+" "+name);
}
low();