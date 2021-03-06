if (process.env.NODE_ENV === "development") {
  require("dotenv").config();
}

const express = require('express')
const app = express()
const PORT = 5001
const cors = require('cors')
const router = require('./routes/')
const errorHandler = require('./middlewares/errorHandler')

app.use(express.urlencoded({ extended: true }))

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(router)
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})
