let getPercent = (params:number)=>2*params;
let getBonus = function(value = 10,tax=getPercent(10),salary = 3){
    console.log(value + tax+salary);
    console.log(arguments.length);
}
// getBonus(undefined,10);
getBonus();
// getBonus(10,11);
// getBonus(1,2,3);