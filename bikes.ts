class Bike{
    constructor(
        public price:number,
        public max_speed: string,
        public miles:number,
    ){
        this.miles=0;
    }

displayInfo(){
    console.log("price:" +this.price+ "max speed" +this.max_speed+"miles"+this.miles);
    return this;
}

ride(){
    this.miles+=10;
    console.log("riding", this.miles);
    return this;
} 

reverse(){
    if (this.miles>=5){
        this.miles-=5;
        console.log("reversing", this.miles)
        return this;
    }else{
        console.log("not enough miles to reverse", this.miles);
        return this;
    }
    }
}
var bike1=new Bike(200, "5mph", 0) //zero is miles
var bike2=new Bike(100, "10mph", 0)
var bike3=new Bike(220, "250mph", 0)

bike1.ride().ride().ride().reverse().displayInfo() //10+10+10=30 -5
bike2.ride().ride().reverse().reverse().displayInfo()
bike3.reverse().reverse().reverse().displayInfo()
