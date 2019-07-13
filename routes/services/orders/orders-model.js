const q = require('q');
const isConnected = require('../../utils/dbSettings');
const ordersData = require ('./orders-data');


const OrdersController = {
    getAll: function (object = {}) {
        let defer = q.defer();

        if (!isConnected) {
            defer.reject({ code: 500, data: "DB is not reachable" });
        } else {
            ordersData.find(object, (err, result) => {
                if (err) {
                    defer.reject({ code: 500, data: `Error on ${err}` });
                } else {
                    if (!result) {
                        defer.reject({ code: 404, data: `${ordersData} is empty. ${err}` });
                    } else {
                        defer.resolve({ code: 200, data: result });
                    }
                }
            });
        }
        return defer.promise;
    },

    getById: function (_id){
        let defer = q.defer();

        if (!isConnected) {
            defer.reject({ code: 500, data: "DB is not reachable" });
        } else {
            ordersData.findById (_id, (err, result) => {
                if (err) {
                    defer.reject({ code: 500, data: `Error on ${err}` });
                } else {
                    if (!result) {
                        defer.reject({ code: 404, data: `${ordersData} is empty. ${err}` });
                    } else {
                        defer.resolve({ code: 200, data: result });
                    }
                }
            });
        }
        return defer.promise;
    },

    saveNewOrder: (order) => {
        let defer = q.defer();

        if (!isConnected) {
            defer.reject({ code: 500, data: "DB is not reachable" });
        } else {
            ordersData.create(order, (err, result) => {
                if (err) {
                    defer.reject({ code: 500, data: `Error on ${err}` });
                } else {
                    if (!result) {
                        defer.reject({ code: 404, data: `${ordersData} is empty. ${err}` });
                    } else {
                        defer.resolve({ code: 200, data: result });
                    }
                }
            });
        }
        return defer.promise;
    },

    deleteOrder: (_id) => {
        let defer = q.defer();

        if (!isConnected) {
            defer.reject({ code: 500, data: "DB is not reachable" });
        } else {
            ordersData.findByIdAndDelete(_id, (err, result) => {
                if (err) {
                    defer.reject({ code: 500, data: `Error on ${err}` });
                } else {
                    if (!result) {
                        defer.reject({ code: 404, data: `${ordersData} is empty. ${err}` });
                    } else {
                        defer.resolve({ code: 200, data: result });
                    }
                }
            });
        }
        return defer.promise;
    },

    updateOrder: (_id, order) => {
        let defer = q.defer();

        if (!isConnected) {
            defer.reject({ code: 500, data: "DB is not reachable" });
        } else {
            ordersData.findByIdAndUpdate(_id, order, {new : true}, (err, result) => {
                if (err) {
                    defer.reject({ code: 500, data: `Error on ${err}` });
                } else {
                    if (!result) {
                        defer.reject({ code: 404, data: `${ordersData} is empty. ${err}` });
                    } else {
                        defer.resolve({ code: 200, data: result });
                    }
                }
            });
        }
        return defer.promise;
    },

}

module.exports = OrdersController;
