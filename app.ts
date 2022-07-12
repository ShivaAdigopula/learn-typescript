function add(n1: number, n2: number): number { 
    return n1 + n2;
}

function printResult(num: number): void { 
    console.log(`result ${num}`);
}

let temp2: Function;
let temp: (a: number, b: number) => number;

temp = add;
temp = printResult; // gives error

temp2 = add;
temp2 = printResult;