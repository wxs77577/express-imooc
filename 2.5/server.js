const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('ok')
})

// URL 中用冒号定义的动态参数：使用 req.params 获取
app.get('/posts/:id', (req, res) => res.send(req.params))

// URL 中问号后面的查询参数（GET参数）：使用 req.query 获取
app.get('/posts?page=1', (req, res) => res.send(req.query))

// 解析原生 HTML 表单提交的请求体
app.use(express.urlencoded({ extended: true }))
// 解析 js 提交的 JSON 请求体
app.use(express.json())

app.post('/login', (req, res) => res.send(req.body))

app.listen(4000)