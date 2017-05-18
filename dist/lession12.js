"use strict";
var displayColors = function (messages) {
    var colors = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        colors[_i - 1] = arguments[_i];
    }
    // console.log(message);
    // console.log(colors);
    for (var i in colors) {
        console.log(colors[i]);
    }
};
var messages = "Hello Thành";
var colors = ['Red', 'Green', 'Blue'];
displayColor.apply(void 0, [messages].concat(colors));
//# sourceMappingURL=lession12.js.map