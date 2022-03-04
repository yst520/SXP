function isObject(o) {
    return Object.prototype.toString.call(o) === '[object Object]'
  }
  
  function isNumber(o) {
    var n = Number(o);
    if (!isNaN(n)) {
      // alert("是数字");
      return true
    }else{
      return false
    }
  }
  
  module.exports = { isObject,isNumber }