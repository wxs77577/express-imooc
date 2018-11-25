const express = require('express')
const app = express()

// 路由定义
// app.请求方法(路径, 处理函数)
app.get('/', (req, res) => {
  res.send('ok')
})
app.post('/login', (req, res) => res.send('登录接口'))
app.put('/profile', (req, res) => res.send('修改个人信息'))
app.delete('/posts/1', (req, res) => res.send('删除文章'))

// 中间件：使用next()调用下一个处理函数
app.get(
  '/me',
  // 调用 next() 表示执行下一个处理函数
  // 因为它并不是最后一个处理函数，所以称之为中间件
  (req, res, next) => {
    req.user = { username: 'johnny' }
    next()
  },
  // 第二个处理函数
  // 此处没有调用它的 next，所以响应到此结束
  (req, res) => {
    res.send(req.user)
  }
)

// 路由分离
const router = express.Router()
router.get('/home', (req, res) => {
  res.send('/api/home')
})

app.use('/api', router)

app.listen(4000)