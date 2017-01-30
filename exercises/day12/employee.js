var employees=[];
function Employee(Name, job title, salary, status){
    this.name = Name;
    this.job = job title;
    this.slary = salary;
    this.status = status ||"full time";
    this.prentEmployeeForm=function(){
        console.log("Name" + this.name + "job title" +this.job + "salary" + this.salary + "status" +this.status);
    }
}
employee.push ( new Employee("jameel", "employee", 45$ ,status));
employee.push ( new Employee("mohammed", "developer", 47$ , status));
employee.push ( new Employee("hasen", "" , 55$ , "part time"));
for (var i = 0 ; i < employees.length ; i++){
    employees[i].printEmployeeForm();
}
