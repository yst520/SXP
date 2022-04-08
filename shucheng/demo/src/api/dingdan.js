import request from '../util/request'
export function getDingdanList(query) {
    return request({
      url: '/stu/dingdanList',
      method: 'get',
      params: query
    })
  }
  