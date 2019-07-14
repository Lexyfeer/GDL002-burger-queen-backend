const q = require('q');
const isConnected = require('../../utils/dbSettings');
const productsData = require ('./products-data');


const ProductsController = {
    getAll: function (object = {}) {
        let defer = q.defer();

        if (!isConnected) {
            defer.reject({ code: 500, data: "DB is not reachable" });
        } else {
            productsData.find(object, (err, result) => {
                if (err) {
                    defer.reject({ code: 500, data: `Error on ${err}` });
                } else {
                    if (!result) {
                        defer.reject({ code: 404, data: `${err} not found.` });
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
            productsData.findById (_id, (err, result) => {
                if (err) {
                    defer.reject({ code: 500, data: `Error on ${err}` });
                } else {
                    if (!result) {
                        defer.reject({ code: 404, data: `${err} not found.` });
                    } else {
                        defer.resolve({ code: 200, data: result });
                    }
                }
            });
        }
        return defer.promise;
    },

    saveNewProduct: (product) => {
        let defer = q.defer();

        if (!isConnected) {
            defer.reject({ code: 500, data: "DB is not reachable" });
        } else {
            productsData.create(product, (err, result) => {
                if (err) {
                    defer.reject({ code: 500, data: `Error on ${err}` });
                } else {
                    if (!result) {
                        defer.reject({ code: 404, data: `${err} not found.` });
                    } else {
                        defer.resolve({ code: 200, data: result });
                    }
                }
            });
        }
        return defer.promise;
    },

    deleteProduct: (_id) => {
        let defer = q.defer();

        if (!isConnected) {
            defer.reject({ code: 500, data: "DB is not reachable" });
        } else {
            productsData.findByIdAndDelete(_id, (err, result) => {
                if (err) {
                    defer.reject({ code: 500, data: `Error on ${err}` });
                } else {
                    if (!result) {
                        defer.reject({ code: 404, data: `${productsData} is empty. ${err}` });
                    } else {
                        defer.resolve({ code: 200, data: result });
                    }
                }
            });
        }
        return defer.promise;
    },

    updateProduct: (_id, product) => {
        let defer = q.defer();

        if (!isConnected) {
            defer.reject({ code: 500, data: "DB is not reachable" });
        } else {
            productsData.findByIdAndUpdate(_id, product, {new : true}, (err, result) => {
                if (err) {
                    defer.reject({ code: 500, data: `Error on ${err}` });
                } else {
                    if (!result) {
                        defer.reject({ code: 404, data: `${err} not found.` });
                    } else {
                        defer.resolve({ code: 200, data: result });
                    }
                }
            });
        }
        return defer.promise;
    },

}

module.exports = ProductsController;
