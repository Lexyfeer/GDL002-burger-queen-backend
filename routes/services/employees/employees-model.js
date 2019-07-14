const q = require('q');
const isConnected = require('../../utils/dbSettings');
const employeesData = require ('./employees-data');


const employeesController = {
    getAll: function (object = {}) {
        let defer = q.defer();

        if (!isConnected) {
            defer.reject({ code: 500, data: "DB is not reachable" });
        } else {
            employeesData.find(object, (err, result) => {
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
            employeesData.findById (_id, (err, result) => {
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

    saveNewEmployee: (employee) => {
        let defer = q.defer();

        if (!isConnected) {
            defer.reject({ code: 500, data: "DB is not reachable" });
        } else {
            employeesData.create(employee, (err, result) => {
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

    deleteEmployee: (_id) => {
        let defer = q.defer();

        if (!isConnected) {
            defer.reject({ code: 500, data: "DB is not reachable" });
        } else {
            employeesData.findByIdAndDelete(_id, (err, result) => {
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

    updateEmployee: (_id, employee) => {
        let defer = q.defer();

        if (!isConnected) {
            defer.reject({ code: 500, data: "DB is not reachable" });
        } else {
            employeesData.findByIdAndUpdate(_id, employee, {new : true}, (err, result) => {
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

module.exports = employeesController;
