<template>
  <el-menu active-text-color="#ffd04b" background-color="#344a5f" :default-active="currentPath" text-color="#fff">
    <template v-for="item in router" :key="item.path">
      <template v-if="!item.hidden">
        <el-menu-item :index="item.path" v-if="!item.children">
          <template #title>{{ item.meta && item.meta.title }}</template>
        </el-menu-item>
        <el-sub-menu :index="item.path" v-else>
          <template #title>{{ item.meta && item.meta.title }}</template>
          <template v-for="child in item.children">
            <el-menu-item :index="child.path" v-if="!child.hidden">{{ child.meta && child.meta.title }}</el-menu-item>
          </template>
        </el-sub-menu>
      </template>
    </template>
  </el-menu>
</template>
<script>
import {computed} from 'vue'
import { useRouter,useRoute } from 'vue-router';

export default {

  name: 'Aside',
  setup() {
    const { options } = useRouter()
    const {path} = useRoute()
    const currentPath = computed(()=>path)
    
    const router = options.routes
    return {
      router,
      currentPath
    }
  }
}
</script>
<style lang="scss" scoped>

</style>