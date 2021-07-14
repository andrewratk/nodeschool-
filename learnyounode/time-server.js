const net = require('net');
const strftime = require('strftime');

net
  .createServer((socket) => {
    socket.write(strftime('%F %R', new Date()));
    socket.end('\n');
  })
  .listen(process.argv[2]);
