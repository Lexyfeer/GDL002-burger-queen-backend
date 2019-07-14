const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// API Routers services
const products = require ('./routes/services/products/products-services');
const orders = require ('./routes/services/orders/orders-services');
const employees = require ('./routes/services/employees/employees-services');

// Parsers
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//APIs Restful
app.use(products, orders, employees);


app.listen(8080, () => {
  console.log("Node server running on http://localhost:8080");
});
