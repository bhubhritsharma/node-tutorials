// npm - global command comes with node
// npm --version - to check the version

// local dependency - use it only in a particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (for mac)

// package.json - manifest file(stores important info about project/package)

const _ = require('lodash');

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
