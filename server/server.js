const express = require('express')
const app = express()
const port = 5000
//Bubibap
//selv bubibap

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, function(){
  console.log(`Example app listening at http://localhost:${port}`)
})