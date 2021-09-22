const net = require("net");
const connect = function () {
  const conn = net.createConnection({
    host: "135.23.223.133",
    port: 50542
  });
  conn.setEncoding("utf8");

  // interpret incoming data as text
  conn.on("connect", (connect) => {
    conn.write("Name: BLA")
    console.log("Successfully connected to game server")

  })
  
  conn.on("data", (data) => {
    console.log(data)
  });

  return conn;
};

module.exports = connect;