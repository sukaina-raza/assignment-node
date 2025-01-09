import readline from 'readline';

// Use the Methods Methods
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What is your age? ', (age) => {
  console.log('Your age is: ' + age);
});