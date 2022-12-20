import { setToken, setUserName } from '@/utils/cookies'
import { Login } from '@/api/common.js'

const state = {
  token: '',
  userName: ''
}
const mutations = {
  SET_TOKEN(state, value) {
    state.token = value
    value && setToken(value)
  },
  SET_USERNAME(state, value) {
    state.userName = value
    value && setUserName(value)
  }
}
const actions = {
  async loginAcion(context, requestData) {
      let res = await Login(requestData)
      // 存储token,用来保存登录状态
      context.commit('app/SET_TOKEN', res.data.token)
      context.commit('app/SET_USERNAME', res.data.username)
      return res
  }
}
const getters = {}
export default {
  state,
  mutations,
  actions,
  getters
}