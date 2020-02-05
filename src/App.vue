<template>
  <div id="app">
    <div class="container">
      <div class="filters-block">
        <Filters v-model="filters" />
      </div>
      <div v-if="error" class="error">
        <h2>{{ error }}</h2>
      </div>
      <div v-else-if="loading" class="loading"><h2>Загрузка...</h2></div>
      <div v-else-if="postsList.length === 0" class="empty">
        <h2>Ничего не найдено</h2>
      </div>
      <PostList v-else :value="postsList" />
    </div>
  </div>
</template>

<script>
import Filters from "./components/Filters";
import PostList from "./components/PostList";
import { getPosts, getUsers, getAvatar } from "./api";
import { search } from "./utils/search";

export default {
  name: "app",
  components: {
    Filters,
    PostList
  },
  data() {
    return {
      filters: {},
      posts: [],
      users: [],
      comments: {},
      error: null,
      loading: false
    };
  },
  async created() {
    this.loading = true;
    this.error = null;
    const posts = await getPosts();
    const users = await getUsers();
    this.loading = false;
    if (posts.error) {
      this.error = posts.error;
      return;
    }
    if (users.error) {
      this.error = users.error;
      return;
    }

    const getUserById = userId => {
      const user = users.data.find(usr => usr.id === userId);
      return {
        username: user ? user.username : "Unknown",
        image: getAvatar(100 + +userId)
      };
    };
    this.posts = await posts.data.map(item => ({
      ...item,
      ...getUserById(item.userId)
    }));
  },
  computed: {
    postsList() {
      const { title, content } = this.filters;
      return this.posts.reduce((acc, item) => {
        const foundTitle = search(item.title, title);
        const foundUsername = search(item.username, title);
        const foundContent = search(item.body, content);
        const isFoundTitle = !title || foundTitle.found || foundUsername.found;
        const isFoundContent = !content || foundContent.found;
        if (isFoundTitle && isFoundContent) {
          return acc.concat([
            {
              ...item,
              title: foundTitle.data,
              username: foundUsername.data,
              body: foundContent.data
            }
          ]);
        }
        return acc;
      }, []);
    }
  }
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

body {
  padding: 8px;
  margin: 0;
  overflow-y: scroll;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.container {
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: row-reverse;
}
.filters-block {
  padding: 16px;
  background-color: #ccc;
  margin: 0 auto;
  max-width: 300px;
  width: 100%;
  position: sticky;
  top: 8px;
  height: calc(100vh - 16px);
}

.empty,
.loading,
.error {
  padding: 16px;
  flex-grow: 1;
  text-align: center;
}

.error {
  color: red;
}

@media (max-width: 1200px) {
  .container {
    flex-direction: column;
    justify-content: center;
  }
  .filters-block {
    position: static;
    height: auto;
  }
}
</style>
