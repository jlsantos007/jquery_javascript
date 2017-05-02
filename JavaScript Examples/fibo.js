// Write your loop below!
var iteration   =   5;
var startNum    =   0;
var secondNum   =   1;
var sum         =   1;

console.log(startNum);
console.log(secondNum);

for (var i = 0; i < iteration; i++) {
    sum         =   startNum + secondNum;
    startNum    =   secondNum;
    secondNum   =   sum;

    console.log(sum);
}
