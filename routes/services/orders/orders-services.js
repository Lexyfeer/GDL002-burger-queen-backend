const express = require('express');
const router = express.Router();
const ordersData =  require('./orders-data');
const ordersModel = require ('./orders-model');

router.get('/orders', (req, res) => {
    ordersModel.getAll().then(function (result) {
        if (result.code == 200) {
            return res.status(200).json(result.data);
        } else {
            return res.status(result.code).send({ message: result.data });
        }
    }).fail(function (error) {
        return res.status(error.code).send({ message: error.data });
    });
});

router.get('/orders/:_id', (req, res) => {
    let orderId = req.params._id;

    ordersModel.getById(orderId)
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

router.post('/orders', (req, res) => {
    let newOrder = new ordersData();
    newOrder.Date = new Date();
    newOrder.NameWaiter = req.body.NameWaiter;
    newOrder.Menu = req.body.Menu;
    newOrder.NameClient = req.body.NameClient;
    newOrder.Product = req.body.Product;
    newOrder.Price = req.body.Price;
    newOrder.Total = req.body.Total;    
    
    ordersModel.saveNewOrder(newOrder)
    .then(function (result) {
        if (result.code == 200) {
            return res.status(200).json({orderResult: result.data});
        } else {
            return res.status(result.code).send({ message: result.data });
        }
    }).fail(function (error) {
        return res.status(error.code).send({ message: error.data });
    });
});

router.delete('/orders/:_id', (req, res) => {
    let orderId = req.params._id;

    ordersModel.deleteOrder(orderId)
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

router.put('/orders/:_id', (req, res) => {
    let orderId = req.params._id;
    
    let order = {
        NameWaiter: req.body.NameWaiter,
        Menu: req.body.Menu,
        NameClient: req.body.NameClient,
        Product: req.body.Product,
        Price: req.body.Price,
        Total: req.body.Total 
    };
    
    ordersModel.updateOrder(orderId, order)
    .then(function (result) {
        if (result.code == 200) {
            return res.status(200).json({orderResult: result.data});
        } else {
            return res.status(result.code).send({ message: result.data });
        }
    }).fail(function (error) {
        return res.status(error.code).send({ message: error.data });
    });
});

module.exports = router;