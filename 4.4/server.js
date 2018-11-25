const Koa = require('koa')
const Router = require('koa-router')
const static = require('koa-static')
const bodyParser = require('koa-bodyparser')

const app = new Koa()

app.use(static('public'))
app.use(bodyParser())

const router = new Router()

router.get('/', ctx => {
  ctx.body = 'home'
})

router.get('/posts?page=1', ctx => {
  ctx.body = ctx.query
})

router.get('/posts/:id', ctx => {
  ctx.body = ctx.params
})

app.use(router.middleware()).use(router.allowedMethods())

app.listen(4000)