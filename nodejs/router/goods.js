const express = require('express')
const boom = require('boom')

const Result = require('../model/Result')
const router = express.Router()
// const { insert } = require('../db/index')
const {getGoodsList,insertScore,updateScore,isNew,deleteScore} = require('../service/goods')

router.get('/goodsList',(req,res,next)=>{
  getGoodsList(req.query).then(({list,count,page,pageSize})=>{
    new Result({list,count,page:+page,pageSize:+pageSize},'获取商品列表成功').success(res)
  }).catch(err=>{ 
    next(boom.badImplementation(err))
  })
})

router.post('/insertScore',(req,res,next)=>{
  // console.log(req.body);
  // new Result().success(res)
  insertScore(req.body).then(()=>{
    new Result('添加成功').success(res)
  }).catch(err=>{
    // next(boom.badImplementation(err))
    console.log({err});
    new Result('已经有此记录').success(res)
  })
})
router.post('/updateScore',(req,res,next)=>{
  // console.log(req.body);
  // new Result().success(res)
  updateScore(req.body).then(()=>{
    new Result('修改成功').success(res)
  }).catch(err=>{
    next(boom.badImplementation(err))
  })
})

router.post('/deleteScore',(req,res,next)=>{
  console.log("req",req);
  // const {sno,cno}=req.body
  deleteScore(req.body).then((result)=>{
    new Result('删除成功').success(res)
  }).catch((err)=>{
    new Result('删除失败').fail(res)
  })
})

router.get('/isNew', (req, res, next) => {
  const { sno, cno } = req.query
  // console.log("username:", username);
  // console.log("sno", sno);
  isNew({ sno, cno }).then((result) => {
    console.log("result", result);
    new Result().success(res)
  }).catch(err => {
    new Result(err).fail(res)
  })
})

module.exports = router