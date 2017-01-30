var array =[];
var Car = [];
function Car(color , model , miles){
    this.color = color;
    this.model = model;
    this.miles = miles;
    this.run = function(){
        consol.log( "color : " + this.color + "model :" + this.model + "miles : " + this.miles + "is running")
    }
};
array[0] = new Car("black" , "marcedes" , 1000 );
array[1] = new Car("red" , "Bmw" , 2000);
array[2] = new Car("" , " " , 3000);
 for(var i = 0 ; i<3 ; i++){
     array[i].run();
 }