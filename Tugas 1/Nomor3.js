const printSegitiga = 5;

if (!Number.isInteger(printSegitiga)) {
  console.log("Data harus number");
  return;
}

let tempPrintSegitiga = printSegitiga;
for (let i = 0; i < printSegitiga; i++) {
  for (let x = 1; x <= tempPrintSegitiga; x++) {
    process.stdout.write(x.toString() + " ");
  }
  process.stdout.write(`\n`);
  tempPrintSegitiga -= 1;
}
