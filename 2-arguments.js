// Count how many arguments were passed (excluding node and the script itself)
let argsCount = process.argv.length - 2;

// Use if...else to check how many arguments
if (argsCount === 0) {
  console.log("No argument");
} else if (argsCount === 1) {
  console.log("Argument found");
} else {
  console.log("Arguments found");
}
