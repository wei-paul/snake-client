let connection;
const stdin = process.stdin;
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};


const handleUserInput = function (data) {
  if (data === '\u0003') {
    process.exit();
  }
  if (data === '\u001b[A') {
    connection.write("Move: up")
  }
  if (data === '\u001b[B') {
    connection.write("Move: down")
  }
  if (data === '\u001b[C') {
    connection.write("Move: right")
  }
  if (data === '\u001b[D') {
    connection.write("Move: left")
  } 
  if (data === '\u001b[D') {
    connection.write("Move: left")
  } 
  if (data === '\u001b[D') {
    connection.write("Say: REEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE")
  } 
};
stdin.on("data", handleUserInput);

module.exports = {
  setupInput
}