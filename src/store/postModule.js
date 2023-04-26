import axios from "axios";

export const postModule = {
  state: () => ({
    posts: [],
    loading: false,
    selectedSort: "",
    search: "",
    page: 1,
    limit: 10,
    sortOptions: [
      { value: "title", name: "По названию" },
      { value: "body", name: "По содержанию" },
    ],
  }),
  getters: {
    sortedPosts(state) {
      return [...state.posts].sort((post1, post2) =>
        post1[state.selectedSort]?.localeCompare(post2[state.selectedSort])
      );
    },
    sortedAndSearchedPosts(state, getters) {
      return getters.sortedPosts.filter((post) =>
        post.title.toLowerCase().includes(state.search.toLowerCase())
      );
    },
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
    setLoading(state, bool) {
      state.loading = bool;
    },
    setPage(state, page) {
      state.page = page;
    },
    setSelectedSort(state, selectedSort) {
      state.selectedSort = selectedSort;
    },
    setSearch(state, search) {
      state.search = search;
    },
    setRemovePost(state, post) {
      state.posts = state.posts.filter(p => p.id !== post.id)
    },

  },
  actions: {
    async fetchPosts({state, commit}) {
        try {
            commit('setLoading', true);
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                params: {
                    _page: state.page,
                    _limit: state.limit
                }
            });
            commit('setPosts', response.data)
        } catch (e) {
            console.log(e)
        } finally {
            commit('setLoading', false);
        }
    },
    async loadMorePosts({state, commit}) {
        try {
            commit('setPage', state.page + 1)
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                params: {
                    _page: state.page,
                    _limit: state.limit
                }
            });
            commit('setPosts', [...state.posts, ...response.data]);
        } catch (e) {
            console.log(e)
        }
    }
},
namespaced: true
};
