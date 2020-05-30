const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define collection and schema
let Employee = new Schema(
{
   code: {
      type: String
   },
   cedula: {
      type: String
   },
   name: {
      type: String
   },
   email: {
      type: String
   },
   designation: {
      type: String
   },
   phoneNumber: {
      type: String
   },
},
{
   collection: 'employees'
})
module.exports = mongoose.model('Employee', Employee)