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