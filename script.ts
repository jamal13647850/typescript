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


//object type
const person: {
    name: string;
    age: number;  
  } = {
    name: 'Maximilian',
    age: 30
  };
  console.log(person.name);

//union type
function combineun(input1: number | string, input2: number | string) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
      result = input1 + input2;
    } else {
      result = input1.toString() + input2.toString();
    }
    return result;
}
//literal type
function combinelt(
    input1: number | string,
    input2: number | string,
    resultConversion: 'as-number' | 'as-text'
  ) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
      result = +input1 + +input2;
    } else {
      result = input1.toString() + input2.toString();
    }
    return result;
  }  
//alias type
type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';
type User = { name: string; age: number };

function combineal(
    input1: Combinable,
    input2: Combinable,
    resultConversion:ConversionDescriptor
  ) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
      result = +input1 + +input2;
    } else {
      result = input1.toString() + input2.toString();
    }
    return result;
  } 


//enum type  
enum Color {Red , Green , Yellow}
let c : Color = Color.Green;
let c1 : String = Color[1];
console.log(c,c1);

//any type
let anyVar : any = 5;
anyVar = "hesam";
anyVar = true;

let list3 : any[] = [20,"jamal",true];

//function type
const myfunc:Function=():number=>{
    return 5;
}
//or
let myfunc2: () => number;
const add=()=>{
    return 5;
}
myfunc2 = add



//callback type
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
}






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


//function overload
function add1(a: number, b: number): number;
function add1(a: string, b: string): string;
function add1(a: string, b: number): string;
function add1(a: number, b: string): string;
function add1(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add1('Max', ' Schwarz');
result.split(' ');


//optional chaining
const fetchedUserData = {
    id: 'u1',
    name: 'Max',
    job: { title: 'CEO', description: 'My own company' }
  };
console.log(fetchedUserData?.job?.title);


//nullish coalescing
const userInput = '';

const storedData = userInput ?? 'DEFAULT';

console.log(storedData);


//access modifiers
class Department {
    private employees: string[] = [];
  
    constructor(private id: string, public name: string) {
  
    }
  
    describe(this: Department) {
      console.log(`Department (${this.id}): ${this.name}`);
    }
}
//geter and seter
class AccountingDepartment extends Department {
    private lastReport: string;
  
    get mostRecentReport() {
      if (this.lastReport) {
        return this.lastReport;
      }
      throw new Error('No report found.');
    }
    set mostRecentReport(value: string) {
        if (!value) {
          throw new Error('Please pass in a valid value!');
        }
        this.lastReport=value;
      }
}
const accounting = new AccountingDepartment('d2', []);
console.log(accounting.mostRecentReport);



//abstract
abstract class Department2 {
    static fiscalYear = 2020;
    protected employees: string[] = [];
  
    constructor(protected readonly id: string, public name: string) {
  
    }
    abstract describe(this: Department): void;

}

//interface
interface UserInterface{
    name : string;
    email : string;
    avatar?: object
}
let jamal : UserInterface = {
    name : "jamal",
    email : "jamal13647850@gmail.com"
};
function RegisterUser(user : UserInterface) {
    console.log(user);
}
RegisterUser(jamal);

jamal.avatar={
    src : "img/usr/123.png"
};
function ImageUser(user : UserInterface){
    console.log(user);
}
ImageUser(jamal);

interface AuthInterface{
    register : (user : UserInterface) => boolean;
    login : (user : UserInterface) => void
}

class Auth implements AuthInterface{
    register(user : UserInterface){
        return true;
    }
    login(user : UserInterface){

    }
}

let AuthObject = new Auth();
AuthObject.register(jamal);






