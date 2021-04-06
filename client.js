const net = require('net');
/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  //Event handler for incoming data, logs it to the player
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  //On connect, inform client and then send name to server
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write('Name: ZNK');
    return;
  });

  return conn;
};

module.exports = {
  connect
};

// conn.write('Move: up');
// setInterval(() => {
//   conn.write('Move: up');
// }, 1000);