// Use const because we are not going to change the value
const firstArg = process.argv[2];

// Check if it's undefined (i.e., no argument was passed)
if (firstArg === undefined) {
  console.log("No argument");
} else {
  console.log(firstArg);
}
