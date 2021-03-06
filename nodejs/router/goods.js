const express = require('express')
const boom = require('boom')

const Result = require('../model/Result')
const router = express.Router()
// const { insert } = require('../db/index')
const {getDianpuList,deleteCollect,updateInfo,updateFavorites,deleteFavorites,insertFavorites,getCollectList,getFavoritesList,getYouxuanList,getShichiList,getTejiaList,getGoodsList,getShenheList,getXiajiaList,getDingdanList,getCartList,insertGoods,sendAdmin,updateGoods,updateShenhe,isNew,deleteGoods,deleteShenhe} = require('../service/goods')
//优选数据
router.get('/youxuanList',(req,res,next)=>{
  getYouxuanList(req.query).then(({list,count,page,pageSize})=>{
    new Result({list,count,page:+page,pageSize:+pageSize},'获取商品列表成功').success(res)
  }).catch(err=>{ 
    next(boom.badImplementation(err))
  })
})
//特价数据
router.get('/tejiaList',(req,res,next)=>{
  getTejiaList(req.query).then(({list,count,page,pageSize})=>{
    new Result({list,count,page:+page,pageSize:+pageSize},'获取商品列表成功').success(res)
  }).catch(err=>{ 
    next(boom.badImplementation(err))
  })
})
//试吃数据
router.get('/shichiList',(req,res,next)=>{
  getShichiList(req.query).then(({list,count,page,pageSize})=>{
    new Result({list,count,page:+page,pageSize:+pageSize},'获取商品列表成功').success(res)
  }).catch(err=>{ 
    next(boom.badImplementation(err))
  })
})
router.get('/goodsList',(req,res,next)=>{
  getGoodsList(req.query).then(({list,count,page,pageSize})=>{
    new Result({list,count,page:+page,pageSize:+pageSize},'获取商品列表成功').success(res)
  }).catch(err=>{ 
    next(boom.badImplementation(err))
  })
})
//店铺数据
router.get('/dianpuList',(req,res,next)=>{
  getDianpuList(req.query).then(({list,count,page,pageSize})=>{
    new Result({list,count,page:+page,pageSize:+pageSize},'获取店铺数据成功').success(res)
  }).catch(err=>{ 
    next(boom.badImplementation(err))
  })
})
//审核数据
router.get('/shenheList',(req,res,next)=>{
  getShenheList(req.query).then(({list,count,page,pageSize})=>{
    new Result({list,count,page:+page,pageSize:+pageSize},'获取审核数据成功').success(res)
  }).catch(err=>{ 
    next(boom.badImplementation(err))
  })
})
//审核数据
router.get('/xiajiaList',(req,res,next)=>{
  getXiajiaList(req.query).then(({list,count,page,pageSize})=>{
    new Result({list,count,page:+page,pageSize:+pageSize},'获取审核数据成功').success(res)
  }).catch(err=>{ 
    next(boom.badImplementation(err))
  })
})
//订单数据
router.get('/dingdanList',(req,res,next)=>{
  getDingdanList(req.query).then(({list,count,page,pageSize})=>{
    new Result({list,count,page:+page,pageSize:+pageSize},'获取订单数据成功').success(res)
  }).catch(err=>{ 
    next(boom.badImplementation(err))
  })
})
// 购物车数据
router.get('/cartList',(req,res,next)=>{
  getCartList(req.query).then(({list,count,page,pageSize})=>{
    new Result({list,count,page:+page,pageSize:+pageSize},'获取购物车数据成功').success(res)
  }).catch(err=>{ 
    next(boom.badImplementation(err))
  })
})
// 收藏数据
router.get('/collectList',(req,res,next)=>{
  getCollectList(req.query).then(({list,count,page,pageSize})=>{
    new Result({list,count,page:+page,pageSize:+pageSize},'获取收藏夹数据成功').success(res)
  }).catch(err=>{ 
    next(boom.badImplementation(err))
  })
})
//收藏夹列表
router.get('/favoritesList',(req,res,next)=>{
  getFavoritesList(req.query).then(({list,count,page,pageSize})=>{
    new Result({list,count,page:+page,pageSize:+pageSize},'获取收藏夹数据成功').success(res)
  }).catch(err=>{ 
    next(boom.badImplementation(err))
  })
})
router.post('/insertGoods',(req,res,next)=>{
  // console.log(req.body);
  // new Result().success(res)
  insertGoods(req.body).then(()=>{
    new Result('添加成功').success(res)
  }).catch(err=>{
    // next(boom.badImplementation(err))
    console.log({err});
    new Result('已经有此记录了，请选择编辑商品信息').success(res)
  })
})
//创建收藏夹
router.post('/insertFavorites',(req,res,next)=>{
  insertFavorites(req.body).then(()=>{
    new Result('添加成功').success(res)
  }).catch(err=>{
    // next(boom.badImplementation(err))
    console.log({err});
    new Result('已经有此记录了，请选择编辑商品信息').success(res)
  })
})
//送审管理员
router.post('/sendAdmin',(req,res,next)=>{
  // console.log(req.body);
  // new Result().success(res)
  sendAdmin(req.body).then(()=>{
    new Result('数据已经送至管理员审核，请耐心等待').success(res)
  }).catch(err=>{
    // next(boom.badImplementation(err))
    console.log({err});
    new Result('已经有此记录了，请选择编辑商品信息').success(res)
  })
})
router.post('/updateGoods',(req,res,next)=>{
  // console.log(req.body);
  // new Result().success(res)
  updateGoods(req.body).then(()=>{
    new Result('修改成功').success(res)
  }).catch(err=>{
    next(boom.badImplementation(err))
  })
})
router.post('/updateInfo',(req,res,next)=>{
  // console.log(req.body);
  // new Result().success(res)
  updateInfo(req.body).then(()=>{
    new Result('编辑成功').success(res)
  }).catch(err=>{
    next(boom.badImplementation(err))
  })
})
router.post('/updateFavorites',(req,res,next)=>{
  // console.log(req.body);
  // new Result().success(res)
  updateFavorites(req.body).then(()=>{
    new Result('修改成功').success(res)
  }).catch(err=>{
    next(boom.badImplementation(err))
  })
})
router.post('/updateShenhe',(req,res,next)=>{
  // console.log(req.body);
  // new Result().success(res)
  updateShenhe(req.body).then(()=>{
    new Result('修改成功').success(res)
  }).catch(err=>{
    next(boom.badImplementation(err))
  })
})

router.post('/deleteGoods',(req,res,next)=>{
  console.log("req",req);
  // const {sno,cno}=req.body
  deleteGoods(req.body).then((result)=>{
    new Result('删除成功').success(res)
  }).catch((err)=>{
    new Result('删除失败').fail(res)
  })
})
//删除收藏夹
router.post('/deleteFavorites',(req,res,next)=>{
  console.log("req",req);
  deleteFavorites(req.body).then((result)=>{
    new Result('删除成功').success(res)
  }).catch((err)=>{
    new Result('删除失败').fail(res)
  })
})
//删除审核数据
router.post('/deleteShenhe',(req,res,next)=>{
  console.log("req",req);
  // const {id}=req.body
  deleteShenhe(req.body).then((result)=>{
    new Result('删除成功').success(res)
  }).catch((err)=>{
    new Result('删除失败').fail(res)
  })
})
//删除收藏数据
router.post('/deleteCollect',(req,res,next)=>{
  console.log("req",req);
  // const {sno,cno}=req.body
  deleteCollect(req.body).then((result)=>{
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