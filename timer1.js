const args = process.argv.slice(2);

let timer = 0;

for (const item of args) {
  // It should be a number, positive and a number should be provided
  
  number = parseInt(item);
  // It verifies if the argument is a number
  if (number != item) {
    console.log("Please insert a valid number (it must be a positive number).");
    return;
  }

  setTimeout(() => {
    process.stdout.write('.');
  }, number * 1000);
  
}
