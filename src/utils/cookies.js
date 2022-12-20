import Cookies from "js-cookie";

const tokenKey = 'tokenAdmin'
const userNameKey = 'username'
// 利用这个库来快速操作token
export function getToken(){
  return Cookies.get(tokenKey)
}
export function setToken(value){
  return Cookies.set(tokenKey,value)
}
export function removeToken(){
  return Cookies.remove(tokenKey)
}

export function setUsername(value){
  return Cookies.set(userNameKey,value)
}
export function getUsername(){
  return Cookies.get(userNameKey)
}
export function removeUsername(){
  return Cookies.get(userNameKey)
}