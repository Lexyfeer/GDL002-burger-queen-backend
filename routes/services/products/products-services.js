const express = require('express');
const router = express.Router();
const ProductsData =  require('./products-data');
const productsModel = require ('./products-model');

router.get('/products', (req, res) => {
    productsModel.getAll().then(function (result) {
        if (result.code == 200) {
            return res.status(200).json(result.data);
        } else {
            return res.status(result.code).send({ message: result.data });
        }
    }).fail(function (error) {
        return res.status(error.code).send({ message: error.data });
    });
});

router.get('/products/:_id', (req, res) => {
    let productId = req.params._id;

    productsModel.getById(productId)
    .then(function (result) {
        if (result.code == 200) {
            return res.status(200).json(result.data);
        } else {
            return res.status(result.code).send({ message: result.data });
        }
    }).fail(function (error) {
        return res.status(error.code).send({ message: error.data });
    });
});

router.post('/products', (req, res) => {
    let newProduct = new ProductsData();
    newProduct.Name = req.body.Name;
    newProduct.Ingredients = req.body.Ingredients;
    newProduct.Price = req.body.Price;
    newProduct.Image = req.body.Image;
    newProduct.Menu = req.body.Menu; 
    
    productsModel.saveNewProduct(newProduct)
    .then(function (result) {
        if (result.code == 200) {
            return res.status(200).json({productResult: result.data});
        } else {
            return res.status(result.code).send({ message: result.data });
        }
    }).fail(function (error) {
        return res.status(error.code).send({ message: error.data });
    });
});

router.delete('/products/:_id', (req, res) => {
    let productId = req.params._id;

    productsModel.deleteProduct(productId)
    .then(function (result) {
        if (result.code == 200) {
            return res.status(200).json(result.data);
        } else {
            return res.status(result.code).send({ message: result.data });
        }
    }).fail(function (error) {
        return res.status(error.code).send({ message: error.data });
    });
});

router.put('/products/:_id', (req, res) => {
    let productId = req.params._id;
    
    let product = {
        Name: req.body.Name,
        Ingredients : req.body.Ingredients,
        Price : req.body.Price,
        Image : req.body.Image,
        Menu : req.body.Menu    
    };
    
    productsModel.updateProduct(productId, product)
    .then(function (result) {
        if (result.code == 200) {
            return res.status(200).json({productResult: result.data});
        } else {
            return res.status(result.code).send({ message: result.data });
        }
    }).fail(function (error) {
        return res.status(error.code).send({ message: error.data });
    });
});

module.exports = router;