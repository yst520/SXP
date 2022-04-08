
const db = require('../db/index')
const { isNumber } = require('../utils')
// const _ = require('lodash')

async function getYouxuanList(query) {
  // console.log(query);
  const {
    // 默认值page=1,pageSize=20
    id,page = 1, pageSize = 20, sort
  } = query
  // 偏移多少个数据量，page=0 offset=0查询第1个  
  // page=1 offset=20 查询第21个
  const offset = (page - 1) * pageSize
  let scoreSql = `select * from youxuan`
  let where = 'where'
  // 模糊查询
  id && (where = db.andLike(where, 'id',id))
  if (where !== 'where') {
    scoreSql = `${scoreSql} ${where}`
  }
  if (sort) {
    // symbol:第一个字符
    const symbol = sort[0]
    const colunm = sort.slice(1, sort.length)
    const order = symbol === '+' ? 'asc' : 'desc'
    scoreSql = `${scoreSql} order by \`${colunm}\` ${order}`
  }
  // 统计一共多少电子书
  let countSql = `select count(*) as count from youxuan`
  // 有查询条件
  if (where != 'where') {
    countSql = `${countSql} ${where}`
  }
  const count = await db.querySql(countSql)
  console.log("count", count);
  scoreSql = `${scoreSql} limit ${pageSize} offset ${offset}`
  const list = await db.querySql(scoreSql)


  return { list, count: count[0].count, page, pageSize }
}
async function getTejiaList(query) {
  // console.log(query);
  const {
    // 默认值page=1,pageSize=20
    id,page = 1, pageSize = 4, sort
  } = query
  // 偏移多少个数据量，page=0 offset=0查询第1个  
  // page=1 offset=20 查询第21个
  const offset = (page - 1) * pageSize
  let scoreSql = `select * from tejialist`
  let where = 'where'
  // 模糊查询
  id && (where = db.andLike(where, 'id',id))
  if (where !== 'where') {
    scoreSql = `${scoreSql} ${where}`
  }
  if (sort) {
    // symbol:第一个字符
    const symbol = sort[0]
    const colunm = sort.slice(1, sort.length)
    const order = symbol === '+' ? 'asc' : 'desc'
    scoreSql = `${scoreSql} order by \`${colunm}\` ${order}`
  }
  // 统计一共多少电子书
  let countSql = `select count(*) as count from tejialist`
  // 有查询条件
  if (where != 'where') {
    countSql = `${countSql} ${where}`
  }
  const count = await db.querySql(countSql)
  console.log("count", count);
  scoreSql = `${scoreSql} limit ${pageSize} offset ${offset}`
  const list = await db.querySql(scoreSql)


  return { list, count: count[0].count, page, pageSize }
}
async function getShichiList(query) {
  // console.log(query);
  const {
    // 默认值page=1,pageSize=20
    id,page = 1, pageSize = 4, sort
  } = query
  // 偏移多少个数据量，page=0 offset=0查询第1个  
  // page=1 offset=20 查询第21个
  const offset = (page - 1) * pageSize
  let scoreSql = `select * from shichi`
  let where = 'where'
  // 模糊查询
  id && (where = db.andLike(where, 'id',id))
  if (where !== 'where') {
    scoreSql = `${scoreSql} ${where}`
  }
  if (sort) {
    // symbol:第一个字符
    const symbol = sort[0]
    const colunm = sort.slice(1, sort.length)
    const order = symbol === '+' ? 'asc' : 'desc'
    scoreSql = `${scoreSql} order by \`${colunm}\` ${order}`
  }
  // 统计一共多少电子书
  let countSql = `select count(*) as count from shichi`
  // 有查询条件
  if (where != 'where') {
    countSql = `${countSql} ${where}`
  }
  const count = await db.querySql(countSql)
  console.log("count", count);
  scoreSql = `${scoreSql} limit ${pageSize} offset ${offset}`
  const list = await db.querySql(scoreSql)


  return { list, count: count[0].count, page, pageSize }
}
async function getGoodsList(query) {
  // console.log(query);
  const {
    // 默认值page=1,pageSize=20
    page = 1, pageSize =20, sort
  } = query
  // 偏移多少个数据量，page=0 offset=0查询第1个  
  // page=1 offset=20 查询第21个
  const offset = (page - 1) * pageSize
  let scoreSql = `select * from goodslist`
  let where = 'where'

  // where  第二个参数 ：key  第三个：value
  id && (where = db.and(where, "id", id))
  // 模糊查询
  name && (where = db.andLike(where, 'name',name))
  if (where !== 'where') {
    scoreSql = `${scoreSql} ${where}`
  }
  if (sort) {
    // symbol:第一个字符
    const symbol = sort[0]
    const colunm = sort.slice(1, sort.length)
    const order = symbol === '+' ? 'asc' : 'desc'
    scoreSql = `${scoreSql} order by \`${colunm}\` ${order}`
  }
  // 统计一共多少电子书
  let countSql = `select count(*) as count from goodslist`
  // 有查询条件
  if (where != 'where') {
    countSql = `${countSql} ${where}`
  }
  const count = await db.querySql(countSql)
  console.log("count", count);
  scoreSql = `${scoreSql} limit ${pageSize} offset ${offset}`
  const list = await db.querySql(scoreSql)


  return { list, count: count[0].count, page, pageSize }
}
async function getShenheList(query) {
  // console.log(query);
  const {
    // 默认值page=1,pageSize=20
    id, name, page = 1, pageSize = 4, sort
  } = query
  // 偏移多少个数据量，page=0 offset=0查询第1个  
  // page=1 offset=20 查询第21个
  const offset = (page - 1) * pageSize
  let scoreSql = `select * from shenhe where state='审核中'`
  let where = 'where'

  // where  第二个参数 ：key  第三个：value
  id && (where = db.and(where, "id", id))
  // 模糊查询
  name && (where = db.andLike(where, 'name',name))
  if (where !== 'where') {
    scoreSql = `${scoreSql} ${where}`
  }
  if (sort) {
    // symbol:第一个字符
    const symbol = sort[0]
    const colunm = sort.slice(1, sort.length)
    const order = symbol === '+' ? 'asc' : 'desc'
    scoreSql = `${scoreSql} order by \`${colunm}\` ${order}`
  }
  // 统计一共多少审核数据
  let countSql = `select count(*) as count from shenhe where state='审核中'`
  // 有查询条件
  if (where != 'where') {
    countSql = `${countSql} ${where}`
  }
  const count = await db.querySql(countSql)
  console.log("count", count);
  scoreSql = `${scoreSql} limit ${pageSize} offset ${offset}`
  const list = await db.querySql(scoreSql)


  return { list, count: count[0].count, page, pageSize }
}
async function getXiajiaList(query) {
  // console.log(query);
  const {
    // 默认值page=1,pageSize=20
    id, name, page = 1, pageSize = 10, sort,token
  } = query
  // 偏移多少个数据量，page=0 offset=0查询第1个  
  // page=1 offset=20 查询第21个
  const offset = (page - 1) * pageSize
  const username=token
  let scoreSql = `select * from record where username='${username}' and state='已下架'`
  let where = 'where'

  // where  第二个参数 ：key  第三个：value
  id && (where = db.and(where, "id", id))
  // 模糊查询
  name && (where = db.andLike(where, 'name',name))
  if (where !== 'where') {
    scoreSql = `${scoreSql} ${where}`
  }
  if (sort) {
    // symbol:第一个字符
    const symbol = sort[0]
    const colunm = sort.slice(1, sort.length)
    const order = symbol === '+' ? 'asc' : 'desc'
    scoreSql = `${scoreSql} order by \`${colunm}\` ${order}`
  }
  // 统计一共多少审核数据
  let countSql = `select count(*) as count from record where username='${username}' and state='已下架'`
  // 有查询条件
  if (where != 'where') {
    countSql = `${countSql} ${where}`
  }
  const count = await db.querySql(countSql)
  console.log("count", count);
  scoreSql = `${scoreSql} limit ${pageSize} offset ${offset}`
  const list = await db.querySql(scoreSql)


  return { list, count: count[0].count, page, pageSize }
}
async function getDingdanList(query) {
  // console.log(query);
  const {
    // 默认值page=1,pageSize=10
    id, name, page = 1, pageSize = 10, sort,token
  } = query
  // 偏移多少个数据量，page=0 offset=0查询第1个  
  // page=1 offset=20 查询第21个
  const offset = (page - 1) * pageSize
  let scoreSql = `select * from dingdan where dianpu='${token}'`
  let where = 'where'

  // where  第二个参数 ：key  第三个：value
  id && (where = db.and(where, "id", id))
  // 模糊查询
  name && (where = db.andLike(where, 'name',name))
  if (where !== 'where') {
    scoreSql = `${scoreSql} ${where}`
  }
  if (sort) {
    // symbol:第一个字符
    const symbol = sort[0]
    const colunm = sort.slice(1, sort.length)
    const order = symbol === '+' ? 'asc' : 'desc'
    scoreSql = `${scoreSql} order by \`${colunm}\` ${order}`
  }
  // 统计一共多少电子书
  let countSql = `select count(*) as count from dingdan where dianpu='${token}'`
  // 有查询条件
  if (where != 'where') {
    countSql = `${countSql} ${where}`
  }
  const count = await db.querySql(countSql)
  console.log("count", count);
  scoreSql = `${scoreSql} limit ${pageSize} offset ${offset}`
  const list = await db.querySql(scoreSql)


  return { list, count: count[0].count, page, pageSize }
}
async function getCartList(query) {
  // console.log(query);
  const {
    // 默认值page=1,pageSize=10
    page = 1, pageSize = 10,token
  } = query
  // 偏移多少个数据量，page=0 offset=0查询第1个  
  // page=1 offset=20 查询第21个
  const offset = (page - 1) * pageSize
  let scoreSql = `select * from cartlist where userid='${token}'`
  let where = 'where'

  // 统计一共多少电子书
  let countSql = `select count(*) as count from cartlist where userid='${token}'`
  // 有查询条件
  if (where != 'where') {
    countSql = `${countSql} ${where}`
  }
  const count = await db.querySql(countSql)
  console.log("count", count);
  scoreSql = `${scoreSql} limit ${pageSize} offset ${offset}`
  const list = await db.querySql(scoreSql)


  return { list, count: count[0].count, page, pageSize }
}

function exists(body) {
  // return false
  const { id } = body
  const sql = `select * from goodslist where id='${id}'`
  return db.queryOne(sql)
}

function sendAdmin(body) {
  return new Promise(async (resolve, reject) => {
    try {
      // 判断电子书是否已经上传过了
      const result = await exists(body)
      // console.log('res', result);
      if (result) {
        reject(new Error('已经有此记录了，请选择编辑商品信息'))

      } else {
        // 传入对象和表名 完成插入操作
        await db.insert(body, 'shenhe')
        resolve()
      }
    } catch (error) {
      reject(error)
    }
  })
}
function insertGoods(body) {
  return new Promise(async (resolve, reject) => {
    try {
      // 判断电子书是否已经上传过了
      const result = await exists(body)
      // console.log('res', result);
      if (result) {
        reject(new Error('已经有此记录了，请选择编辑商品信息'))

      } else {
        // 传入对象和表名 完成插入操作
        await db.insert(body, 'goodslist')
        resolve()
      }
    } catch (error) {
      reject(error)
    }
  })
}

function updateGoods(body) {
  return new Promise(async (resolve, reject) => {
    try {
      await db.update(body, 'goodslist', `where id=${body.id}`)
      resolve()
    } catch (error) {
      reject("error", error)
    }
  })
}
function updateShenhe(body) {
  return new Promise(async (resolve, reject) => {
    try {
      await db.update(body, 'shenhe', `where id=${body.id}`)
      resolve()
    } catch (error) {
      reject("error", error)
    }
  })
}

function deleteGoods(body) {
  const { id} = body
  return new Promise(async (resolve, reject) => {
    await db.queryOne(`delete from goodslist where id=${id}`).then((res) => {
      resolve('删除成功')
    }).catch((err) => {
      reject(new Error('删除失败'))
    })
  })

}
function deleteShenhe(body) {
  const { id} = body
  return new Promise(async (resolve, reject) => {
    await db.queryOne(`delete from shenhe where id=${id}`).then((res) => {
      resolve('删除成功')
    }).catch((err) => {
      reject(new Error('删除失败'))
    })
  })

}
function isNew(params) {
  return new Promise(async (resolve, reject) => {

    console.log("params111", params);
    const { id, name } = params

    let result = []
    // 如果username输入了值的话
    if (id) {
      if (isNumber(id) == false) {
        reject('请输入数字')
      }
      result = await db.queryOne(`select * from goodslist where id='${id}'`)
      if (!result || result == []) {
        // console.log("result: ",result.length);
        reject('无该课程')
      }
    }
    if (name) {
      if (isNumber(name) == false) {
        reject('请输入数字')
      }
      result = await db.queryOne(`select * from goodslist where name='${name}'`)
      if (!result || result == []) {
        // console.log("result: ",result.length);
        reject('无该学生')
      }
      // const result1=await queryOne(`select * from stu where sno=${sno}`)
      // if (!result1||result1 == []) {
      //   // 在学生表里找不到该sno
      //   // console.log("result: ",result.length);
      //   reject('教务处无此学生')
      // }
    }
    resolve()
  })
}
module.exports = { getYouxuanList,getTejiaList,getShichiList,getGoodsList,getShenheList,getXiajiaList,getDingdanList,getCartList, sendAdmin,insertGoods,deleteShenhe, updateGoods,updateShenhe, isNew, deleteGoods }