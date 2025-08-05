const amount = 12;

if (amount < 10) {
    console.log('small no');
} else {
    console.log('large no');
}
console.log('Welcome to node...!');

// __dirname - path to current directory
// __filename - file name

console.log(__dirname);
console.log(__filename);

const name1 = "Bhubhrit";
const name2 = "Raveena";
const sayHi = (name) => {
    console.log(`Hello there ${name}`);
}
sayHi('susan');
sayHi(name1);
sayHi(name2);