
var button = document.querySelector("button");
var input1 = document.getElementById("input1"); // 1
var input2 = document.getElementById("input2"); // 1

function add(num1, num2){
    return num1+num2; 
}

button.addEventListener('click', function() {
    console.log(add(+input1.value, +input2.value));
    //input1.value is string
    //input1.value is string

    // to convert string to number , prefix it with +
});