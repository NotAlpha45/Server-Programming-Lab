const { summation, printHello } = require("./index");
const os = require("os");
const toGigabyte = require("./memoryUtils");

// console.log(`Total memory : ${os.totalmem()}`);
// console.log(`Free memory: ${os.freemem()}`)
// console.log(`Up time : ${os.uptime()}`);
// console.log(`OS version : ${os.version()}`)

console.log(`Total memory: ${toGigabyte(os.freemem())} GB`);
