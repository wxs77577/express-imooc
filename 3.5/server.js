const express = require('express')
const app = express()

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/express-imooc')
const Course = mongoose.model(new mongoose.Schema({
  name: String
}))

// 提前录入数据，仅需执行一次
// Course.insertMany([
//   { name: 'NodeJs教程' },
//   { name: 'VueJs教程' },
//   { name: 'ES6教程' },
// ])

app.get('/api/courses/:id', async (req, res) => {
  const courses = await Course.findById(req.params.id)
  res.send(courses)
})

app.listen(4000)