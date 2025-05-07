function myFunction(param) {
    console.log("Running myFunction");
    return param + 1;
  }

  const myFunctionReturnValue = myFunction(1);
// => "Running myFunction"
console.log(myFunctionReturnValue);

function sayHi(name) {
    console.log(`Hi there, ${name}!`);
  }
  
  sayHi();

  function sayHi(name = "friend") {
    console.log(`Hi there, ${name}!`);
  }
  
  sayHi();  
  sayHi('James');  

function addAndLog(num1, num2) {
    console.log(num1 + num2);
  }
function addAndReturn(num1, num2) {
    return num1 + num2;
  }  
  const sum1 = addAndLog(2, 2);
  const sum2 = addAndReturn(2, 2);
  