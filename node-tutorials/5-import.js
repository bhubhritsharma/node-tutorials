const names = require('./1-export')
const { sayHi, greet } = require('./2-export')
const data = require('./3-export')
require('./4-mind-generate')

console.log(names);
console.log("---------------------------");
sayHi(names.name1);
console.log("---------------------------");
sayHi(names.name2);
console.log("---------------------------");
console.log(greet(names.name1));
console.log("---------------------------");
console.log(data);
console.log("---------------------------");