const express = require('express')
const path = require('path')

const app = express()

app.get('/',function(req,res) {
  res.sendFile(path.join(__dirname, '../tictacjs.html'));
});


const SERVER_PORT = 4000
const port = process.env.PORT || SERVER_PORT
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})