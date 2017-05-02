// Write your code below!
for (var i = 1; i < 11; i++) {
    // Prints numbers 1 - 10
    console.log(i);
}

var condition = true;
while(condition) {
    console.log("Hello!");
    // Avoid infinite loops!
    condition = false;
}

// Can be false from the start, since
// do/while runs at least one time
var condition = false;
do {
    console.log("I'm printed once!");
} while(condition);
