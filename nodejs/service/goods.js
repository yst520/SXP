
const db = require('../db/index')
const { isNumber } = require('../utils')
// const _ = require('lodash')


async function getGoodsList(query) {
  // console.log(query);
  const {
    // 默认值page=1,pageSize=20
    id, name, page = 1, pageSize = 4, sort
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

function exists(body) {
  // return false
  const { sno, cno, grade } = body
  const sql = `select * from goodslist where sno='${sno}' and cno='${cno}'`
  return db.queryOne(sql)
}

function insertScore(body) {
  return new Promise(async (resolve, reject) => {
    try {
      // 判断电子书是否已经上传过了
      const result = await exists(body)
      // console.log('res', result);
      if (result) {
        reject(new Error('已经有此记录了，请选择编辑分数'))

      } else {
        // 传入对象和表名 完成插入操作
        await db.insert(body, 'sc')
        resolve()
      }
    } catch (error) {
      reject(error)
    }
  })
}

function updateScore(body) {
  return new Promise(async (resolve, reject) => {
    try {
      await db.update(body, 'sc', `where sno=${body.sno} and cno=${body.cno}`)
      resolve()
    } catch (error) {
      reject("error", error)
    }
  })
}

function deleteScore(body) {
  const { sno, cno } = body
  return new Promise(async (resolve, reject) => {
    await db.queryOne(`delete from sc where sno=${sno} and cno=${cno}`).then((res) => {
      resolve('删除成功')
    }).catch((err) => {
      reject(new Error('删除失败'))
    })
  })

}
function isNew(params) {
  return new Promise(async (resolve, reject) => {

    console.log("params111", params);
    const { cno, sno } = params

    let result = []
    // 如果username输入了值的话
    if (cno) {
      if (isNumber(cno) == false) {
        reject('请输入数字')
      }
      result = await db.queryOne(`select * from course where cno='${cno}'`)
      if (!result || result == []) {
        // console.log("result: ",result.length);
        reject('无该课程')
      }
    }
    if (sno) {
      if (isNumber(sno) == false) {
        reject('请输入数字')
      }
      result = await db.queryOne(`select * from stu where sno='${sno}'`)
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
module.exports = { getGoodsList, insertScore, updateScore, isNew, deleteScore }