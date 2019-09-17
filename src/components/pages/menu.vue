<template>
  <div class="hello">
    <ul class="nav">
      <li class="nav-item">
        <router-link class="nav-link" to="/page/">卡片一</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/page/child2">卡片二</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/page/child3">卡片三</router-link>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link" @click.prevent="updatePath">切換到指定頁面</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link" @click.prevent="beforePath">往前一頁</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
      updatePath(){
          this.$router.push('/page/child2') //到指定頁面
        //   this.$router.replace('/page/child2') 
        //   說明：replace跟push差異在於前者不會在瀏覽器內記錄點擊,push會
      },
      beforePath(){
          this.$router.back() //往前一頁
        //   this.$router.forward() 往後一頁
      }
  },
};
</script>

