const express = require('express')
const app = express()
const PORT = 5001
const cors = require('cors')
const router = require('./routes/')

app.use(express.urlencoded({ extended: true }))

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use(router)

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})
