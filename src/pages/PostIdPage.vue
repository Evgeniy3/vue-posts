<template>
  <div>
    <h1>Это страница поста с ID = {{ $route.params.id }}</h1>
    <h3>{{ post.title }}</h3>
    <p>{{ post.body }}</p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      post: [],
    };
  },
  methods: {
    async fetchPost() {
      try {
        const {data} = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`
        );
        this.post = data
      } catch (e) {
        console.log(e);
      }
    },
  },
  mounted() {
    this.fetchPost();
  },
};
</script>

<style scoped></style>
