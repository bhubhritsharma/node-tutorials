const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log("User hits the resource");
    res.status(200).send("Welcome to Home Page");
})
app.get('/about', (req, res) => {
    res.status(200).send("Welcome to About Page");
})
app.get('/contact', (req, res) => {
    res.status(200).send("Welcome to Contacts Page");
})
app.all('*', (req, res) => {
    res.status(404).send(`<h4>Resource not found</h4>`)
})

app.listen(5000, () => {
    console.log('server is listening to the port 5000.');
})

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen