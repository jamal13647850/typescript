var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var _a;
var coloredLog = function (text) {
    console.log("%c" + text, 'color: red; font-size: larger');
};
var isDone = true;
var decimal = 20;
var hex = 0xf00d;
var binary = 10;
var fullname = "Sayyed Jamal Ghasemi";
//Object type
var person = {
    name: 'Maximilian',
    age: 30
};
coloredLog("Object type");
console.log(person.name);
//Array type
var list = [1, 2, 3, 4, 5];
var list2 = ["jamal", "ghasemi"];
coloredLog("Array type");
console.log(list);
console.log(list2);
//Tuple type 
var x;
x = ["hello", 10];
// x[2]=10;
// x[3]=20;
coloredLog("Tuple type");
console.log(x);
//Array of object
var userTestStatus = [
    { "id": 0, "name": "Available" },
    { "id": 1, "name": "Ready" },
    { "id": 2, "name": "Started" }
];
coloredLog("Array of object");
console.log(userTestStatus);
//Enum type  
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Yellow"] = 2] = "Yellow";
})(Color || (Color = {}));
var c = Color.Green;
var c1 = Color[1];
coloredLog("Enum type");
console.log(c);
console.log(c1);
//any type
var anyVar = 5;
anyVar = "hesam";
anyVar = true;
var list3 = [20, "jamal", true];
coloredLog("Any type");
console.log(anyVar);
console.log(list3);
//union type
function combineUN(input1, input2) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
coloredLog("Union type");
console.log(combineUN(2, 5));
console.log(combineUN("Jamal", " Ghasemi"));
//literal type
function combineLT(input1, input2, resultType) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultType === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
coloredLog("Literal type");
console.log(combineLT(2, 5, 'as-number'));
console.log(combineLT("Jamal", " Ghasemi", 'as-text'));
function combineAL(input1, input2, resultConversion) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
coloredLog("Alias type");
console.log(combineLT(2, 5, 'as-number'));
console.log(combineLT("Jamal", " Ghasemi", 'as-text'));
//fuction return type
coloredLog("Function return type");
function sum(x, y) {
    return x + y;
}
console.log(sum(1, 2));
var mySum = function (x, y) {
    return x + y;
};
console.log(mySum(5, 2));
var mySum2;
mySum2 = function (x, y) {
    return x + y;
};
console.log(mySum2(52, 2));
//function type
var myfunc = function () {
    return 5;
};
//or
var myfunc2;
var add = function () {
    return 5;
};
myfunc2 = add;
//or
var sum2;
sum2 = function (num1, num2) {
    return num1 + num2;
};
coloredLog("Function type");
console.log(myfunc);
console.log(myfunc());
console.log(myfunc2);
console.log(myfunc2());
console.log(sum2(2, 4));
//callback type
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
coloredLog("Callback type");
addAndHandle(11, 23, function (res) {
    console.log(res);
});
function buildName(firstName, LastName) {
    if (LastName == undefined) {
        return firstName;
    }
    return firstName + " " + LastName;
}
console.log(buildName("jamal"));
function add1(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
var result = add1('Max', ' Schwarz');
result.split(' ');
//optional chaining
var fetchedUserData = {
    id: 'u1',
    name: 'Max',
    job: { title: 'CEO', description: 'My own company' }
};
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title);
//nullish coalescing
var userInput = '';
var storedData = userInput !== null && userInput !== void 0 ? userInput : 'DEFAULT';
console.log(storedData);
//access modifiers
var Department = /** @class */ (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    Department.prototype.describe = function () {
        console.log("Department (".concat(this.id, "): ").concat(this.name));
    };
    return Department;
}());
//geter and seter
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(AccountingDepartment.prototype, "mostRecentReport", {
        get: function () {
            if (this.lastReport) {
                return this.lastReport;
            }
            throw new Error('No report found.');
        },
        set: function (value) {
            if (!value) {
                throw new Error('Please pass in a valid value!');
            }
            this.lastReport = value;
        },
        enumerable: false,
        configurable: true
    });
    return AccountingDepartment;
}(Department));
var accounting = new AccountingDepartment('d2', "Accounting");
coloredLog("geter and seter");
console.log(accounting.mostRecentReport);
//abstract
var Department2 = /** @class */ (function () {
    function Department2(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    Department2.fiscalYear = 2020;
    return Department2;
}());
var jamal = {
    name: "jamal",
    email: "jamal13647850@gmail.com"
};
function RegisterUser(user) {
    console.log(user);
}
RegisterUser(jamal);
jamal.avatar = {
    src: "img/usr/123.png"
};
function ImageUser(user) {
    console.log(user);
}
ImageUser(jamal);
var Auth = /** @class */ (function () {
    function Auth() {
    }
    Auth.prototype.register = function (user) {
        return true;
    };
    Auth.prototype.login = function (user) {
    };
    return Auth;
}());
var AuthObject = new Auth();
AuthObject.register(jamal);
