"use strict";
var getPercent = function (params) { return 2 * params; };
var getBonus = function (value, tax, salary) {
    if (value === void 0) { value = 10; }
    if (tax === void 0) { tax = getPercent(10); }
    if (salary === void 0) { salary = 3; }
    console.log(value + tax + salary);
    console.log(arguments.length);
};
// getBonus(undefined,10);
getBonus();
// getBonus(10,11);
// getBonus(1,2,3); 
//# sourceMappingURL=lesson10.js.map