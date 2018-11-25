// 字符串
function processString() {

}
processString()

// 数组
function processArray() {
  const raw = ['Node.js', 'Vue.js', 'Express.js', false]
  const ret = raw.filter(v => v).map((v, k) => ({
    id: k + 1,
    name: v
  }))
  console.log(ret)
}
processArray()

// 对象
function processObject() {
  const raw = {
    node: 'Node.js',
    vue: 'Vue.js',
    express: 'Express.js',
  }
  const ret = Object.entries(raw).reduce((acc, v) => {
    // acc.push({text: })
    return acc
  }, [])
}
processObject()