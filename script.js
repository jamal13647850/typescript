var isDone = true;
var decimal = 20;
var hex = 0xf00d;
var binary = 10;
var fullname = "Sayyed Jamal Ghasemi";
var list = [1, 2, 3, 4, 5];
var list2 = ["jamal", "ghasemi"];
var x;
x = ["hello", 10];
x[2] = 10;
x[3] = 20;
console.log(x);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Yellow"] = 2] = "Yellow";
})(Color || (Color = {}));
var c = Color.Green;
var c1 = Color[1];
console.log(c, c1);
var anyVar = 5;
anyVar = "hesam";
anyVar = true;
var list3 = [20, "jamal", true];
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
function buildName(firstName, LastName) {
    if (LastName == undefined) {
        return firstName;
    }
    return firstName + " " + LastName;
}
console.log(buildName("jamal"));
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
