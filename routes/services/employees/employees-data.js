const mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

const EmployeesSchema = new Schema({
  TypeEmployee: String,
  Name: String,
  Email: String,
  Pass: String,
});

module.exports = mongoose.model('employees', EmployeesSchema);
