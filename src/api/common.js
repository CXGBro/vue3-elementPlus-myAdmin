import instance from '@/utils/request'

export function Login(data){
  return instance.request({
    method:'post',
    url:'/login',
    data
  })
}

export function Register(data){
  return instance.request({
    method:'post',
    url:'/account/register',
    data
  })
}

export function GetCode(data){
  return instance.request({
    method:'post',
    url:'/getCode',
    data
  })
}