class Person{
    run(){
        console.log('Person Running....');
    }
}
let p1 = new Person();

console.log(p1.run());

console.log(p1.run === Person.prototype.run);