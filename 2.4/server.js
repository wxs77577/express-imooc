const express = require('express')
const app = express()

// 访问URL: /style.css
app.use(express.static('public'))

// 定义URL前缀，更好区分，访问URL：/static/style.css
app.use('/static', express.static('public'))

app.get('/', (req, res) => {
  res.send('ok')
})

app.listen(4000)