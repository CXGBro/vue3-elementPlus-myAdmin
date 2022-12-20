import {setToken,setUserName} from '@/utils/cookies'

const state={
  token:'',
  userName:''
}
const mutations={
  SET_TOKEN(state,value){
    state.token = value
    value && setToken(value)
  },
  SET_USERNAME(state,value){
    state.userName = value
    value && setUserName(value)
  }
}
const actions={}
const getters={}
export default{
  state,
  mutations,
  actions,
  getters
}