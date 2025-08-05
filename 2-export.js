const sayHi = (name) => {
    console.log(`Hello ${name}...!!!`)
    return `Hello ${name}...!!!`
}

const greet = (name) => {
    return `Welcome to nodejs ${name}.`
}

module.exports = { sayHi, greet };