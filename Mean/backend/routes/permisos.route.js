const express = require('express');
const app = express();
const permisosRoute = express.Router();

// Permisos   l
let Permisos = require('../models/Permisos');

// Add Permisos
permisosRoute.route('/create').post((req, res, next) => {
  Permisos.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All Permisoss
permisosRoute.route('/').get((req, res) => {
  Permisos.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single permisos
permisosRoute.route('/read/:id').get((req, res) => {
  Permisos.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update permisos
permisosRoute.route('/update/:id').put((req, res, next) => {
  Permisos.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Data updated successfully')
    }
  })
})

// Delete permisos
permisosRoute.route('/delete/:id').delete((req, res, next) => {
  Permisos.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = permisosRoute;