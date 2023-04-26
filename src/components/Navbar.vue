<template>
  <div class="navbar">
    <div @click="$router.push('/')">Vue 3</div>
    <div class="navbar__btns">
      <my-button @click="$router.push({ path: '/posts' })">Посты</my-button>
      <my-button @click="$router.push({ path: '/vuex' })">Посты Vuex</my-button>
      <my-button @click="$router.push({ path: '/about' })">О сайте</my-button>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.navbar {
  height: 50px;
  background-color: rgb(22, 139, 22);
  color: white;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  align-items: center;
  padding: 0 15px;
}
.navbar__btns {
  margin-left: auto;
}
</style>