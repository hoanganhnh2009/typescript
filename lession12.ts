let displayColors = function(messages:string,...colors:string[]){
    // console.log(message);
    // console.log(colors);
    for(let i in colors){
        console.log(colors[i]);
    }

}   
let messages = "Hello Thành";
let colors = ['Red','Green','Blue'];
displayColor(messages,...colors);