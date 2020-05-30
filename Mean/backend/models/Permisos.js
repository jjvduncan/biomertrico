const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define collection and schema
let Permisos = new Schema(
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
   fecha: {
    type: String
     },
    hora: {
    type: String
    },
   email: {
      type: String
   },
   designation: {
      type: String
   },
   razon: {
    type: String
    },
   archivo: {
    type: String
 },
},
{
   collection: 'permisoss'
})

module.exports = mongoose.model('Permisos', Permisos)