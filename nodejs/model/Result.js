const {
    CODE_ERROR,
    CODE_SUCCESS,
    CODE_TOKEN_EXPORED
  } = require('../utils/constant')
  
  // new Result  
  class Result {
    // data:向前端返回的数据 msg:向前端返回的信息
    constructor(data, msg = '操作成功', options) {
      this.data = null
      // 一个都没传
      if (arguments.length === 0) {
        this.msg = '操作成功'
        // 传入一个参数 认为他是个msg
      } else if (arguments.length === 1) {
        this.msg = data
      } else {
        // 传入2/3个参数
        this.data = data
        this.msg = msg
        if (options) {
          this.options = options
        }
      }
    }
  
    createResult() {
      //没有code默认code为success 
      if (!this.code) {
        this.code = CODE_SUCCESS
      }
      // 基础的结构是一个code 一个msg
      let base = {
        code: this.code,
        msg: this.msg
      }
      // data存在就增加一个data
      if (this.data) {
        base.data = this.data
      }
      // 如果还有额外的options 就加到base里
      if (this.options) {
        base = { ...base, ...this.options }
      }
      console.log(base)
      return base
    }
  
    json(res) {
      //通过res.json返回给前端
      res.json(this.createResult())
    }
  
    success(res) {
      this.code = CODE_SUCCESS
      this.json(res)
    }
  
    fail(res) {
      this.code = CODE_ERROR
      this.json(res)
    }
    jwtError(res){
      this.code=CODE_TOKEN_EXPORED
      this.json(res)
    }
  }
  
  module.exports = Result