import request from '../util/request'
export function deleteCollect(data) {
    return request({
      url: '/stu/deleteCollect',
      method: 'post',
      data:data
    })
  }
  //收藏夹
export function getCollectList(query) {
    return request({
      url: '/stu/collectList',
      method: 'get',
      params: query
    })
  }