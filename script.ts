let isDone : boolean = true;
let decimal : number = 20;
let hex : number = 0xf00d;
let binary : number = 0b1010;

let fullname : string =  "Sayyed Jamal Ghasemi";

let list : number[] = [1,2,3,4,5];
let list2 : Array<string> = ["jamal","ghasemi"];

let x : [string,number];
x = ["hello",10];
x[2]=10;
x[3]=20;
console.log(x);

enum Color {Red , Green , Yellow}
let c : Color = Color.Green;
let c1 : String = Color[1];
console.log(c,c1);

let anyVar : any = 5;
anyVar = "hesam";
anyVar = true;

let list3 : any[] = [20,"jamal",true];



function sum(x,y){
    return x+y;
}
console.log(sum(1,2));

let mySum =function(x : number , y : number) : number{
    return x+y;
};
console.log(mySum(5,2));

let mySum2 : (x : number , y :number) => number;
mySum2 = function (x, y) {
    return x+y;
};
console.log(mySum2(52,2));


function buildName(firstName : string , LastName?: string){
    if(LastName== undefined){
        return firstName;
    }
    return firstName + " " + LastName;
}
console.log(buildName("jamal"));