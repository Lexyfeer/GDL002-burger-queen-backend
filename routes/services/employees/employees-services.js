const express = require('express');
const router = express.Router();
const employeesData = require('./employees-data');
const employeesModel = require('./employees-model');

router.get('/employees', (req, res) => {
    employeesModel.getAll().then(function (result) {
        if (result.code == 200) {
            return res.status(200).json(result.data);
        } else {
            return res.status(result.code).send({ message: result.data });
        }
    }).fail(function (error) {
        return res.status(error.code).send({ message: error.data });
    });
});

router.get('/employees/:_id', (req, res) => {
    let employeeId = req.params._id;

    employeesModel.getById(employeeId)
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

router.post('/employees', (req, res) => {
    let newEmployee = new employeesData();
    newEmployee.TypeEmployee = req.body.TypeEmployee;
    newEmployee.Name = req.body.Name;
    newEmployee.Email = req.body.Email;
    newEmployee.Pass = req.body.Pass;

    employeesModel.saveNewEmployee(newEmployee)
        .then(function (result) {
            if (result.code == 200) {
                return res.status(200).json({ employeeResult: result.data });
            } else {
                return res.status(result.code).send({ message: result.data });
            }
        }).fail(function (error) {
            return res.status(error.code).send({ message: error.data });
        });
});

router.delete('/employees/:_id', (req, res) => {
    let employeeId = req.params._id;

    employeesModel.deleteEmployee(employeeId)
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

router.put('/employees/:_id', (req, res) => {
    let employeeId = req.params._id;

    let employee = {
        TypeEmployee: req.body.TypeEmployee,
        Name: req.body.Name,
        Email: req.body.Email,
        Pass: req.body.Pass
    };

    employeesModel.updateEmployee(employeeId, employee)
        .then(function (result) {
            if (result.code == 200) {
                return res.status(200).json({ employeeResult: result.data });
            } else {
                return res.status(result.code).send({ message: result.data });
            }
        }).fail(function (error) {
            return res.status(error.code).send({ message: error.data });
        });
});

module.exports = router;