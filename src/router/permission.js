import router from './index'
import { getToken } from '@/utils/cookies'

router.beforeEach((to, from) => {
  if (!getToken()) {
    if (to.name !== 'Login') {
      return {
        name: 'Login'
      }
    }

  }
})

router.afterEach((to, from) => {

})
