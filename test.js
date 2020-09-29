var readline = require("readline");

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const cb2 = input2 => {
  console.log('sadasjdhgajdgha', input2);
  rl.close();
}
const cb1 = (input1) => {
  console.log(' got input', input1);
  rl.question("Enter your line2\n", cb2);
};

const main = () => {
  rl.question("Enter your line1\n", cb1);
};

main();
