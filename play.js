const { connect } = require('./client');

console.log('Connecting ...');
connect();

/**
 * Setup User Interfac
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.stdout.write('Thanks for using me, ciao!\n');
    process.exit();
  }
};