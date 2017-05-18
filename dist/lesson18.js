"use strict";
var Person = (function () {
    function Person(name) {
        this.name = name;
        console.log(this.name + "Constructor.");
    }
    return Person;
}());
var p = new Person("Thành 18");
//# sourceMappingURL=lesson18.js.map