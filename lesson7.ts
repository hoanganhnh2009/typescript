let isDone: boolean = false;
console.log(isDone);

let decimal:number  = 125000;
console.log(decimal);

let color:string = "red";
console.log(color);

let fullName = "Nguyễn Hữu Thành";
let age:number = 10;
let sentense:string = `
    Hello, my name is ${ fullName }.Age is ${age*15}
`
console.log(sentense+'array');

let list: number[] = [1,2,3]
console.log(list+'list');

enum Color {Red,Green,Blue};
let c: Color = Color.Red;
console.log(c+' enum')
