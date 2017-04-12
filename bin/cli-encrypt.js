const util = require('util')
const cliEncrypt = require('../index.js');
const argv = require('minimist')(process.argv.slice(2));

const command = argv._[0];

function help() {
  console.log(`Help`);
  console.log(`----\n`);
  console.log(`Commands: encrypt - decrypt - help`);
  console.log(`   encrypt`);
  console.log(`   decrypt`);
  console.log(`   help\n`);
  console.log(`Example: $> cli-encrypt encrypt -f <file.zip> -o <file.zip.enc> -p <password>`);
  console.log(`Example: $> cli-encrypt decrypt -f <file.zip.enc> -o <file.zip> -p <password>\n`);
  console.log(`Options:`);
  console.log(`   -f : <Input File>`);
  console.log(`   -o : <Output File>`);
  console.log(`   -p : <Password>\n`);
  process.exit()
}

if (command === 'help' || argv.h) {
  help();
}

if (!command) {
  console.log('*** No Command Given ***\n');
  help();
}

if (!argv.f) {
  console.log('*** Use -f for input file. ***');
  help();
}

if (!argv.o) {
  console.log('*** Use -o for output file. ***');
  help();
}

if (!argv.p) {
  console.log('*** Use -p for password. ***');
  help();
}

if (cliEncrypt[command]) {
  cliEncrypt[command](argv.f, argv.o, argv.p);
}

if (!cliEncrypt[command]) {
  console.log('*** Command not found. ***');
  help();
}
