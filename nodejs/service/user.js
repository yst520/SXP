const { querySql, queryOne } = require('../db/index')
function login(username, password) {
  return querySql(`select * from user where username='${username}' and password='${password}'`)
}
function findUser(username) {
  return queryOne(`select * from user where username='${username}'`)
}

//  function isNew(params) {
//   return new Promise(async(resolve, reject) => {
//     console.log("params111", params);
//     const { username, sno }=params
//     resolve()
//   })
// }

module.exports = { login, findUser}