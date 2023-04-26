<template>
  <div class="post">
    <div class="post__item">
      <h4>Название: {{ post.title }}</h4>
      <p>Описание: {{ post.body }}</p>
    </div>
    <div>
      <my-button @click="$router.push({path: `/posts/${post.id}`})">Открыть</my-button>
      <my-button @click="$emit('remove', post)">Удалить</my-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.post {
  border: 1px solid green;
  padding: 20px;
  margin-top: 20px;
  align-items: center;
  display: flex;
  justify-content: space-between;
}
.post__item {
  width: 1100px;
}
</style>
