const arg = process.argv[2];
const size = parseInt(arg);

if (isNaN(size) || size <= 0) {
  console.log("Missing size");
} else {
  const row = "X".repeat(size); // create one row like "XXX" or "XXXXXX"
  for (let i = 0; i < size; i++) {
    console.log(row);
  }
}
