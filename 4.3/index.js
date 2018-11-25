const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/express-imooc')
const User = mongoose.model(new mongoose.Schema({
  username: String
}))
const Course = mongoose.model(new mongoose.Schema({
  name: String,
  user: { type: mongoose.Types.ObjectId, ref: 'User' }
}))

async function main() {
  // 查询
  const courses = await Course.find()
  console.log(courses)

  const course = await Course.findOne()
  console.log(course)

  // 新增和修改仅仅是来源不同
  const user = new User()
  // const user = await user.findOne().where({ username: 'admin' })
  user.username = 'super admin'
  await user.save()
  console.log(user)
  // 删除
  // await course.delete()

  // 关联
  course.user = user
  await course.save()

  const data = await Course.find().populate('user')
  console.log(data)
}