function greetPerson(name: string) {
    let greet;
    if (name === "Thanh") {
        greet = "Hello Mr. Thành";
    } else {
        greet = "Chào một ai đấy :)";
    }
    console.log(greet);
}
greetPerson("Thanh");

var a = 1;
let b = 2;

if (a === 1) {
    let b = 10;
    var a =20;
}
console.log(a);
console.log(b);