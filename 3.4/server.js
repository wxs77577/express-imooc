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

app.get('/api/courses', async (req, res) => {
  // 数据库查询为异步操作，使用 await 等待执行完成
  // 同时 await 所在的函数必须加 async 声明为异步函数
  const courses = await Course.find()
  res.send(courses)
})

app.listen(4000)