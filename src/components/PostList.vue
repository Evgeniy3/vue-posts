<template>
  <div class="posts" v-if="posts.length > 0">
    <h3>Список постов</h3>
    <transition-group name="fade">
      <post-item
        v-for="post in posts"
        :key="post.id"
        :post="post"
        @remove="$emit('remove', post)"
      />
    </transition-group>
  </div>
  <h3 class="empty" v-else>Список постов пуст</h3>
</template>

<script>
import PostItem from "./PostItem.vue";
export default {
  components: { PostItem },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.posts {
  margin-top: 20px;
}
.empty {
  color: red;
  margin-top: 20px;
}
.fade-enter-active, .fade-leave-active {
  transition: all .5s ease;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  transform: translateX(150px);
}
.fade-move {
  transition: transform 1s;
}
</style>
