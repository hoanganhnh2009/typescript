"use strict";
var Person = (function () {
    function Person() {
    }
    Person.prototype.run = function () {
        console.log('Person Running....');
    };
    return Person;
}());
var p1 = new Person();
console.log(p1.run());
console.log(p1.run === Person.prototype.run);
//# sourceMappingURL=lesson17.js.map