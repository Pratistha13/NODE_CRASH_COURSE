// gives us information about our environment about our operating system

const os = require('os');

//Platform
console.log(os.platform());

//CPU  Architecture
console.log(os.arch());

//CPU core info
console.log(os.cpus());

//Free memory
console.log(os.freemem());

//Total memory
console.log(os.totalmem());

//Home directory
console.log(os.homedir());

//Uptime
console.log(os.uptime());