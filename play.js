const { connect } = require("./client");
const { setupInput } = require("./input");

const connectObj = connect();

console.log("Connecting ...");


setupInput(connectObj);