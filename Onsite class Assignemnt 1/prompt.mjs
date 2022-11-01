// searched for it at google and found few solutions that require other modules, one of them is this 
// i am able to understand to some extent such as function within function etc but stdin , interface etc i am unable to understand

import readline from 'readline';
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name ? ', function (name) {
  rl.question('Where do you live ? ', function (country) {
    console.log(`${name}, is a citizen of ${country}`);
    rl.close();
  });
});



rl.on('close', function () {
  console.log('\nBYE BYE !!!');
  process.exit(0);
});