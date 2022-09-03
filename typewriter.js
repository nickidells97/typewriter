const sentence = "hello there from lighthouse labs\n";

let delay = 500;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay);
  delay += 250;
}