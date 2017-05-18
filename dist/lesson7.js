"use strict";
var isDone = false;
console.log(isDone);
var decimal = 125000;
console.log(decimal);
var color = "red";
console.log(color);
var fullName = "Nguyễn Hữu Thành";
var age = 10;
var sentense = "\n    Hello, my name is " + fullName + ".Age is " + age * 15 + "\n";
console.log(sentense + 'array');
var list = [1, 2, 3];
console.log(list + 'list');
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Red;
console.log(c + ' enum');
//# sourceMappingURL=lesson7.js.map