'use strict'

const User = require('../models/user')
const service = require('../services')
const axios = require('axios');
function signUp (req, res) {
  const user = new User({
    email: req.body.email,
    displayName: req.body.displayName,
    password: req.body.password
  })

  //console.log("request para crear un usuario", req.body, user)
  user.save((err) => {//antes de eso se ejecuto un middleware
    //console.log("lo q va a guardar", user)
    if (err) return res.status(500).send({ message: `Error al crear el usuario: ${err}` })
    return res.status(201).send({ token: service.createToken(user), idStudent: req.body.password })
  })
}


const signIn = (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (err) return res.status(500).send({ msg: `Error al ingresar: ${err}` })
    if (!user) return res.status(404).send({ msg: `No existe el usuario: ${req.body.email}` })

    return user.comparePassword(req.body.password, (err, isMatch) => {
      if (err) return res.status(500).send({ msg: `Error al ingresar: ${err}` })
      if (!isMatch) return res.status(404).send({ msg: `Error de contraseña: ${req.body.email}` })
      req.user = user
      return res.status(200).send({ msg: 'Te has logueado correctamente', token: service.createToken(user) })
    }
  );

  }).select('_id email +password');
}

module.exports = {
  signUp,
  signIn
}
