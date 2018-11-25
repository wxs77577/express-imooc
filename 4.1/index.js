const _ = require('lodash')
const user = {}
// console.log(user.a.b, _.get(user, 'a.b'))

const dayjs = require('dayjs')
console.log(dayjs().format('H点m分'))

const axios = require('axios')
axios.get('https://api.github.com/repos/expressjs/express').then(res => {
  console.log(res.data.full_name)
})
