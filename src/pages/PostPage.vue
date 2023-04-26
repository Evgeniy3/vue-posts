<template>
  <div>
    <h2>Страница с постами</h2>
    <my-input
      v-model="search"
      placeholder="Поиск...."
    />
    <div class="app__btn">
      <my-button @click="showDialog">Создать пост</my-button>
      <my-select v-model="selectedSort" :options="sortOptions" />
    </div>
    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost" />
    </my-dialog>
    <post-list :posts="sortedAndSearchedPosts" @remove="removePost" v-if="!loading" />
    <div v-else>Идет загрузка...</div>
    <div  v-intersection="loadMorePosts" class="observer"></div>
  </div>
</template>

<script>
import PostForm from "../components/PostForm.vue";
import PostList from "../components/PostList.vue";
import axios from "axios";
export default {
  components: { PostList, PostForm, },
  data() {
    return {
      posts: [],
      dialogVisible: false,
      loading: false,
      selectedSort: "",
      search: "",
      page: 1,
      limit: 10,
      sortOptions: [
        { value: "title", name: "По названию" },
        { value: "body", name: "По содержанию" },
      ],
    };
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },
    showDialog() {
      this.dialogVisible = true;
    },
    async fetchPosts() {
      try {
        this.loading = true;
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/posts" , {
          params: {
            _page: this.page,
            _limit: this.limit
          }
        });
        this.posts = data;
      } catch (e) {
        console.log(e);
      } finally {
        this.loading = false;
      }
    },
    async loadMorePosts() {
      try {
        this.page += 1;
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: this.page,
            _limit: this.limit
          }
        });
        this.posts = [...this.posts, ...response.data];
      } catch (e) {
        alert('Ошибка')
      }
    }
  },
  mounted() {
    this.fetchPosts();
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
    },
    sortedAndSearchedPosts() {
      return this.sortedPosts.filter((post) => post.title.toLowerCase().includes(this.search.toLowerCase()))
    },
  },
};
</script>

<style>
.app__btn {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.observer {
  height: 30px;
}
</style>
