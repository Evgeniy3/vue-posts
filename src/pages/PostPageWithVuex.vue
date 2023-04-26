<template>
  <div>
    <h2>Страница с постами</h2>
    <my-input
      :model-value="search"
      @update:model-value="setSearch"
      placeholder="Поиск...."
    />
    <div class="app__btn">
      <my-button @click="showDialog">Создать пост</my-button>
      <my-select
        :model-value="selectedSort"
        @update:model-value="setSelectedSort"
        :options="sortOptions"
      />
    </div>
    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost" />
    </my-dialog>
    <post-list
      :posts="sortedAndSearchedPosts"
      @remove="setRemovePost"
      v-if="!loading"
    />
    <div v-else>Идет загрузка...</div>
    <div v-intersection="loadMorePosts" class="observer"></div>
  </div>
</template>

<script>
import PostForm from "../components/PostForm.vue";
import PostList from "../components/PostList.vue";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
  components: { PostList, PostForm },
  data() {
    return {
      dialogVisible: false,
    };
  },
  methods: {
    ...mapMutations({
      setPage: "post/setPage",
      setSearch: "post/setSearch",
      setSelectedSort: "post/setSelectedSort",
      setRemovePost: "post/setRemovePost"
    }),
    ...mapActions({
      loadMorePosts: "post/loadMorePosts",
      fetchPosts: "post/fetchPosts",
    }),
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    showDialog() {
      this.dialogVisible = true;
    },
  },
  mounted() {
    this.fetchPosts();
  },
  computed: {
    ...mapState({
      posts: (state) => state.post.posts,
      loading: (state) => state.post.loading,
      selectedSort: (state) => state.post.selectedSort,
      search: (state) => state.post.search,
      page: (state) => state.post.page,
      limit: (state) => state.post.limit,
      sortOptions: (state) => state.post.sortOptions,
    }),
    ...mapGetters({
      sortedPosts: "post/sortedPosts",
      sortedAndSearchedPosts: "post/sortedAndSearchedPosts",
    }),
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
