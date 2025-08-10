const express = require('express');
const app = express();

const { products } = require('./data.js');

app.get('/', (req, res) => {
    res.send(
        `<h4>Home Page</h4>
        <a href="/api/products">Products</a>`
    )
})
app.get('/api/products', (req, res) => {
    const productsWithoutDesc = products.map(e => {
        const { id, name, image } = e
        return { id, name, image }
    })
    res.json(productsWithoutDesc)
})

app.get('/api/products/:productId', (req, res) => {
    // console.log("req:", req);    
    // console.log("req.params:", req.params);

    const { productId } = req.params
    const singleProduct = products.find(e => e.id === Number(productId));
    if (!singleProduct) {
        return res.status(404).send("Product does not exist")
    }
    res.json(singleProduct)
})

app.get('/api/products/:productId/reviews/:reviewId', (req, res) => {
    console.log(req.params);
    const productName = products.find(e => e.id === Number(req.params.productId)).name;
    res.send(`Here are the reviews for ${productName}`);
})

app.listen(5000, () => {
    console.log('Server is listening on PORT 5000...');
})