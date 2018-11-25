const express = require('express')
const app = express()

app.get('/api/courses', (req, res) => {
  const courses = [
    { id: 1, name: 'NodeJs教程' },
    { id: 2, name: 'VueJs教程' },
    { id: 3, name: 'ES6教程' },
  ]
  res.send(courses)
})

app.listen(4000)