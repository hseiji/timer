const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

console.log("Timer - Select a number from 1 to 9: ");
stdin.on('data', (key) => {
  
  if (key === "b") {
    process.stdout.write("\x07");
    process.stdout.write("beep \n");
  }

  if (key > 0 && key <=9) {
    process.stdout.write(`Setting timer for ${key} seconds...\n`);
    setTimeout(() => {
      process.stdout.write("\x07");
      process.stdout.write("beep \n");
    }, key * 1000);
  }

  // \u0003 maps to ctrl+c input and exit the program
  if (key === '\u0003') {
    process.stdout.write("Thanks for using me, ciao!    ");
    process.exit();
  }
});