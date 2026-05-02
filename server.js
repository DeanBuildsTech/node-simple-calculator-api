const express = require('express')                                                   
const app = express()
                                                                                       
app.use(express.json())                                                              
app.use('/calculator', require('./routes/calculator'))
   
app.listen(3000, () => {                                                             
  console.log('Calculator API running on port 3000')
})
