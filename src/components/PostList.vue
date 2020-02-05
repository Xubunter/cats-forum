<template>
  <div class="posts">
    <transition-group name="posts-slide" tag="div">
      <div v-for="item in value" :key="item.id" class="posts-list">
        <Post :value="item" />
      </div>
    </transition-group>
  </div>
</template>

<script>
import Post from "./Post";

export default {
  name: "PostList",
  components: {
    Post
  },
  props: {
    value: Array
  }
};
</script>

<style scoped lang="scss">
.posts {
  padding: 0 16px;
  flex-grow: 1;
  position: relative;
}

.posts-slide {
  &-move {
    transition: transform 0.6s;
  }
  &-enter-active {
    transition: all 0.5s;
  }
  &-leave-active {
    position: absolute;
  }
  &-enter {
    opacity: 0;
    transform: translateX(-1000px);
  }
  &-leave-to {
    opacity: 0;
    transition: all 0.5s;
    transform: translateX(-1000px);
  }
}
</style>
