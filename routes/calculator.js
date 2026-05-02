  const express = require('express')                                                   
  const router = express.Router()
  const calc = require('../controllers/calculatorController')                          
                                                                                       
  router.post('/add', calc.add)
  router.post('/subtract', calc.subtract)                                              
  router.post('/multiply', calc.multiply)
  router.post('/divide', calc.divide)

  module.exports = router    
