"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log(`result ${num}`);
}
let temp2;
let temp;
temp = add;
//temp = printResult; // gives error
temp2 = add;
temp2 = printResult;
temp2 = () => { };
