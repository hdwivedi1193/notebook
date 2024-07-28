
const connectToMongo =require("./DB.js")
const express = require('express')
const cors = require('cors')

connectToMongo()

const app = express()
app.use(cors())

app.use(express.json()) // for passing body

app.use('/api/auth',require('./routes/auth.js'))
app.use("/api/notes",require('./routes/notes.js'))


const port = 3000

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})