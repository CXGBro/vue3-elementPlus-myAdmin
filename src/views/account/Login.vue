<template>
  <div id="login">
    <div class="form-wrap">
      <ul class="menu-tab">
        <li :class="{ 'current': item.type === current_menu }" v-for="item in tab_menu" :key="item.type"
          @click="toggleMenu(item.type)">{{ item.name }}</li>
      </ul>

      <el-form>
        <el-form-item>
          <label for="username" class="form-label">用户名</label>
          <el-input name="username" v-model="username" />
        </el-form-item>
        <el-form-item>
          <label for="password" class="form-label">密码</label>
          <el-input name="password" type="password" v-model="password" />
        </el-form-item>
        <el-form-item v-show="current_menu === 'register'">
          <label class="form-label">确认密码</label>
          <el-input type="password" v-model="passwordSec" />
        </el-form-item>
        <el-form-item>
          <label for="password" class="form-label">验证码</label>
          <el-row :gutter="10">
            <el-col :span="14">
              <el-input></el-input>
            </el-col>
            <el-col :span="10">
              <el-button type="primary" class="el-button-block" @click="getCodeHandler">获取验证码</el-button>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submit" class="el-button-block">{{ current_menu === 'login' ? '登录' : '注册'
          }}</el-button>
        </el-form-item>

      </el-form>
    </div>
  </div>
</template>
<script>
import sha1 from 'js-sha1'
import { reactive, toRefs, ref } from 'vue';
import { ElMessage } from 'element-plus'
import { useStore } from 'vuex'
import { Login, GetCode, Register } from '@/api/common'

export default {
  setup() {
    const store = useStore()
    const router = useRouter()
    const data = reactive({
      username: '',
      password: '',
      passwordSec: '',
      captcha: '',
      tab_menu: [
        { type: 'login', name: '登录' },
        { type: 'register', name: '注册' }
      ]
    })
    // 该变量可以保存当前所在的页面的状态,有了这个状态,其它页面也能用
    let current_menu = ref(data.tab_menu[0].type)
    const toggleMenu = (type) => {
      current_menu.value = type
    }
    const submit = () => {
      current_menu === 'login' ? login() : register()
    }
    const getCodeHandler = async () => {
      const username = data.username
      const password = data.password
      const passwordSec = data.passwordSec
      if (username && password) {
        try {
          let res = await GetCode({
            username,
            module: 'register'
          })
          console.log(res);
        } catch (error) {
          ElMessage({
            message: error,
            type: 'error'
          })
        }
      } else {
        ElMessage({
          message: '有内容空缺!',
          type: 'error'
        })
      }
    }
    const login = async () => {
      const requestData = {
        username: data.username,
        password: sha1(data.password),
        code: data.captcha
      }
      try {
        await store.dispatch('app/loginAction', requestData)
        router.push({ path: '/console' })
      } catch (error) {
        console.log(error)
      }
    }
    const register = () => {
      Register()
    }
    return {
      submit,
      ...toRefs(data),
      current_menu,
      toggleMenu,
      getCodeHandler
    }
  }
}


</script>
<style lang="scss" scoped>
#login {
  height: 100vh;
  background-color: #344a5f;
}

.form-wrap {
  width: 320px;
  padding-top: 100px;
  margin: 0 auto;
}

.form-label {
  display: block;
  color: #fff;
  font-size: 14px;
}

.menu-tab {
  li {
    display: inline-block;
    padding: 10px 24px;
    margin: 0 10px;
    color: #fff;
    font-size: 14px;
    border-radius: 5px;
    cursor: pointer;

    &.current {
      background-color: rgba(0, 0, 0, .1);
    }
  }
}
</style>