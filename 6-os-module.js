// os module - operating system module
const os = require('os');
const { uptime } = require('os');
console.log(os.userInfo());
console.log(os.uptime());
console.log(uptime());

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem()
}
console.log("currentOS", currentOS);