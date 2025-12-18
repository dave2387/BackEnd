let a = 10;
var b = 10;
{
    let a = 20;
    var b = 20;
    console.log(a);//print value from block
    console.log(b);
}
console.log(a);//print outside value
console.log(b);