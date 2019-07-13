const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const OrdersSchema = new Schema({
    Date: Date,
    NameWaiter: String,
    Menu: String,
    NameClient: String,
    Product: String,
    Price: Number,
    Total: Number    
});

module.exports = mongoose.model('orders', OrdersSchema);