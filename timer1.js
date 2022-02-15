const args = process.argv.slice(2);

let timer = 0;
for (const item of args) {
  const number = Number(item);
  if (item !== "" && number !== NaN && item > 0) {
    timer = timer + item * 1000;
    setTimeout(() => {
      process.stdout.write('.');
    }, timer);
  }
}
