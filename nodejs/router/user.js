const express = require('express')
const boom = require('boom')

const Result = require('../model/Result')
const router = express.Router()
const { insert,queryOne } = require('../db/index')
const { login, findUser, isNew } = require('../service/user')

router.post('/login',
  (req, res, next) => {
    console.log(req.body);
    let { username, password } = req.body
    login(username, password).then((user) => {
      if (!user || user.length == 0) {
        new Result('登录失败').fail(res)
        console.log("登录失败")
        console.log(res)

      } else {
        new Result({ token: username }, '登录成功').success(res)
        console.log("登录成功")
      }
    })
  })

router.get('/info', (req, res, next) => {
  const username = req.query.token
  console.log(username);
  console.log(req.query);
  findUser(username).then((user) => {
    console.log(user);  //不需要处理异常，因为默认情况会抛给自定义异常处理
    if (user) {
      user.roles = [user.roles]
      new Result(user, '登录成功').success(res)
    } else {
      new Result('登录失败').fail(res)
    }
  })
})
router.get('/isNew', async(req, res, next) => {
  const { field, value} = req.query
  console.log(field,value);
  if(field){
    await queryOne(`select * from adminuser where ${field}='${value}'`).then((result)=>{
      if(result){
        new Result('已被注册').fail(res)
      }else{
        new Result('可以注册').success(res)
      }
    })
  }
  // console.log(req);
  // console.log(req);
  // console.log("username:", username);
  // console.log("sno", sno);
  // isNew({ username, sno }).then((result) => {
  //   console.log("result", result);
  //   new Result('没有被注册过').success(res)
  // }).catch(err => {
  //   new Result(err).fail(res)
  // })
})



router.post('/register',
  (req, res, next) => {
    console.log(req.body);
    const model = req.body
    insert(model, 'user').then((result) => {
      new Result('注册成功').success(res)
      console.log('注册成功')
    }).catch((err) => {
      new Result(err, '注册失败').fail(res)
    })
    // let { username, password } = req.body
    // login(username, password).then((user) => {
    //   if (!user || user.length == 0) {
    //     new Result('登录失败').fail(res)
    //   } else {
    //     new Result({ token:username }, '登录成功').success(res)
    //   }
    // })
  })
  router.post('/logout', (req, res, next) => {
    const data = req.query.token
    console.log(data);
    if(!data){
      new Result('退出登录成功').success(res)
    }else{
      new Result(err, '退出登录失败').fail(res)
    }
  })
 
module.exports = router