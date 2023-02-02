// //Create a calculator where you:
// 1) click on a button to trigger the calculator function,
// 2) get two numbers from the prompt,
// 3) display the result of the four operations (+, -, , /) in a specific div (getting the element by id).
// Please click here (Links to an external site.) to review instructions on how to submit your assignment.

function Calculator() {
    console.log("Calculate");
    let num1 = Number(prompt("Enter the number 1:"));
    let num2 = Number(prompt("Enter the number 2:"));
  
    sum = num1 + num2;
    minus = num1 - num2;
    multi = num1 * num2;
    div = num1 / num2;
  
    document.getElementById(
      "add"
    ).innerHTML = <p> ${num1} + ${num2} = ${sum}</p>;
    document.getElementById(
      "sub"
    ).innerHTML = <p> ${num1} - ${num2} = ${minus}</p>;
    document.getElementById(
      "multi"
    ).innerHTML = <p> ${num1} * ${num2} = ${mult}</p>;
    document.getElementById(
      "div"
    ).innerHTML = <p> ${num1} / ${num2} = ${div}</p>;
  }
  