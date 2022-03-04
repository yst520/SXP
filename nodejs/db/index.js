const mysql = require('mysql')
const config = require('./config')
const {debug}=require('../utils/constant')
const {isObject} =require('../utils/index')
function connect() {
  return mysql.createConnection({
    ...config
  })
}
function querySql(sql) {
  const conn = connect()
  debug&&console.log(sql)
  return new Promise((resolve, reject) => {
    try {
      conn.query(sql, (err, results) => {
        if (err) {
          debug&&console.log("查询失败 原因："+JSON.stringify(err));
          reject(err)
        }
        debug&&console.log("查询成功 数据："+JSON.stringify(results));
        resolve(results)  
      })
    }
    catch (e) {
      reject(e)
    }
    finally {
      conn.end()
    }
  })
}

function queryOne(sql){
  return new Promise((resolve,reject)=>{
    querySql(sql).then((res)=>{
      if(res&&res.length>0){
        resolve(res[0])
      }else{
        resolve(null)
      }
    }).catch(err=>{
      reject(err)
    })
  })
}

function insert(model,tableName){
  // console.log("model",model);
  return new Promise((resolve,reject)=>{
    if(!isObject(model)){
      reject(new Error('插入数据库失败，插入数据非对象'))
    }else{
      const keys=[]
      const values=[]

      Object.keys(model).forEach(key=>{
        // 这个意思是看model有没有这个key,而不是往原型链上找
        if(model.hasOwnProperty(key)){
          keys.push(`\`${key}\``)
          values.push(`'${model[key]}'`)
        }
      })
      // 拼sql语句
      if(keys.length>0&&values.length>0){
        let sql=`insert into \`${tableName}\`(`
        const keysString=keys.join(',')
        const valuesString=values.join(',')
        sql=`${sql}${keysString}) values (${valuesString})`
        console.log("sql",sql)
        const conn=connect()
        try {
          conn.query(sql,(err,result)=>{
            if(err){
              reject(err)
            }else{
              resolve(result)
            }
          })
        } catch (error) {
          reject(error)
        }finally{
          conn.end()
        }
      }else{
        reject(new Error('对象中没有任何属性'))
      }
    }
  })
}

function update(model,tableName,where){
  return new Promise((resolve,reject)=>{
    if(!isObject(model)){
      reject(new Error('插入数据库失败，插入数据非对象'))
    }else{
      const entry=[]
      Object.keys(model).forEach(key=>{
        // 是自身的属性
        if(model.hasOwnProperty(key)){
          entry.push(`\`${key}\`='${model[key]}'`)
        }
      })
      console.log(entry);
      if(entry.length>0){
        let sql=`update \`${tableName}\` set`
        sql=`${sql} ${entry.join(',')} ${where}`
        console.log(sql);
        const conn=connect()
        try {
          conn.query(sql,(err,result)=>{
            if(err){
              reject(err)
            }else{
              resolve(result)
            }
          })
        } catch (error) {
          reject(error)
        }finally{
          conn.end()
        }
      }
    }
  })
}

function and(where,key,value){
  if(where==='where'){
    // 是一个空的where语句
    return `${where} \`${key}\`='${value}'`
  }else{
    return `${where} and \`${key}\`='${value}'`
  }
}
function andLike(where,key,value){
  if(where==='where'){
    // 是一个空的where语句
    return `${where} \`${key}\` like '%${value}%'`
  }else{
    return `${where} and \`${key}\` like '%${value}%'`
  }
}
module.exports={andLike,querySql,queryOne,insert,update,and}