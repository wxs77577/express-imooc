// 字符串
function processString() {
  // 快速获取正则匹配数据
  const raw = '共找到16条记录，耗时30秒。'
  const [nothing, total, time] = raw.match(/共找到(\d+)条记录，耗时(\d+)秒。/) || []
  console.log(total, time)

  // 获取请求头的用户token
  const header = 'Authorization: Bearer ey23423sdafsadfwerer '
  console.log(header.split(' ').filter(v => v).pop())
}
// processString()

// 数组
function processArray() {
  const raw = [
    { name: 'node', views: 400 },
    { name: 'vue', views: 600 },
    { name: 'express', views: 500 },
  ]
  const ret = raw.reduce(
    (acc, v) => {
      acc += v.views
      return acc
    },
    0
  ).concat([
    { name: 'koa', views: 300 }
  ])
  console.log(ret)
}
// processArray()

// 对象
function processObject() {
  const defaults = {
    created: '已下单',
    paid: '支付',
  }

  // 合并多个对象
  const options = Object.assign({}, defaults, {
    paid: '已支付',
    finished: '已完成'
  })
  console.log(options)

  // 对象转成可扩展的数组数据
  const listData = Object.entries(options).map(([value, text]) => ({
    value, text
  }))
  console.log(listData)
}
// processObject()