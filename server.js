//simple api


const express = require('express')
const app = express()

app.use(require('cors')())

app.get('/', (req, res) => {
  res.json([
    {
      name: 'yo'
    },
    {
      name: 'yo'
    },
    {
      name: 'yo'
    },
  ])
})
app.listen(process.env.PORT)
