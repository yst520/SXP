import request from '@/util/request'
export function getShichiList(query) {
  return request({
    url: '/stu/shichiList',
    method: 'get',
    params: query
  })
}
export function getYouxuanList(query) {
  return request({
    url: '/stu/youxuanList',
    method: 'get',
    params: query
  })
}
