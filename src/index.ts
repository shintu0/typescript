import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
console.log("Hello");
let a: number=0;

rl.question("First Number: ", (data) => {
  try {
    a = +data;
  } catch (error: any) {
    console.log(error.message);
  }
  rl.close();

});

let b: number=0;

rl.question("Second Number: ", (data) => {
  try {
    b = +data;
  } catch (error: any) {
    console.log(error.message);
  }
  rl.close();
});

console.log("Result: " + a + b);


