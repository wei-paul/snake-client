const stdin = process.stdin;
const setupInput = function () {
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
};
stdin.on("data", handleUserInput);

module.exports = {
  setupInput
}