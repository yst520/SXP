import request from '../util/request'

export function getGoodsList(query) {
  return request({
    url: '/stu/goodsList',
    method: 'get',
    params: query
  })
}
export function getTejiaList(query) {
  return request({
    url: '/stu/tejiaList',
    method: 'get',
    params: query
  })
}
export function getDianpuList(query) {
  return request({
    url: '/stu/dianpuList',
    method: 'get',
    params: query
  })
}
export function getShichiList(query) {
  return request({
    url: '/stu/shichiList',
    method: 'get',
    params: query
  })
}
export function getXiajiaList(query) {
  return request({
    url: '/stu/xiajiaList',
    method: 'get',
    params: query
  })
}
export function insertGoods(data) {
  return request({
    url: '/stu/insertGoods',
    method: 'post',
    data
  })
}
//创建收藏夹
export function insertFavorites(data) {
  return request({
    url: '/stu/insertFavorites',
    method: 'post',
    data
  })
}
//送审
export function sendAdmin(data) {
  return request({
    url: '/stu/sendAdmin',
    method: 'post',
    data
  })
}
//送审数据
export function getShenheList(query) {
  return request({
    url: '/stu/shenheList',
    method: 'get',
    params: query
  })
}
export function updateGoods(data) {
  return request({
    url: '/stu/updateGoods',
    method: 'post',
    data:data
  })
}
export function updateFavorites(data) {
  return request({
    url: '/stu/updateFavorites',
    method: 'post',
    data:data
  })
}
export function updateInfo(data) {
  return request({
    url: '/stu/updateInfo',
    method: 'post',
    data:data
  })
}
export function updateShenhe(data) {
  return request({
    url: '/stu/updateShenhe',
    method: 'post',
    data:data
  })
}
export function deleteGoods(data) {
  return request({
    url: '/stu/deleteGoods',
    method: 'post',
    data:data
  })
}
export function deleteFavorites(data) {
  return request({
    url: '/stu/deleteFavorites',
    method: 'post',
    data:data
  })
}
export function deleteShenhe(data) {
  return request({
    url: '/stu/deleteShenhe',
    method: 'post',
    data:data
  })
}
// 购物车
export function getCartList(query) {
  return request({
    url: '/stu/cartList',
    method: 'get',
    params: query
  })
}

//收藏夹列表
export function getFavoritesList(query) {
  return request({
    url: '/stu/favoritesList',
    method: 'get',
    params: query
  })
}

export function isNew(params) {
  return request({
    url: '/stu/isNew',
    method: 'get',
    params
  })
}
