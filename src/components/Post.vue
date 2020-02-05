<template>
  <div class="post">
    <div class="post__wrapper">
      <img
        class="post__avatar"
        :src="value.image"
        alt=""
        width="100"
        height="100"
      />
      <div class="post__info">
        <div class="username">
          <span
            v-for="item in value.username"
            :key="item.id"
            :class="{ found: item.type === 'found' }"
            v-text="item.value"
          />
        </div>
        <h2 class="title">
          <span
            v-for="item in value.title"
            :key="item.id"
            :class="{ found: item.type === 'found' }"
            v-text="item.value"
          />
        </h2>
      </div>
      <div class="post__body">
        <span
          v-for="item in value.body"
          :key="item.id"
          :class="{ found: item.type === 'found' }"
          v-text="item.value"
        />
      </div>
      <div v-if="!showComments" class="post__footer">
        <button class="comments-toggle" @click="openComments">
          Открыть комментарии
        </button>
      </div>
    </div>
    <transition name="comments-slide">
      <div class="comments" v-if="showComments">
        <div v-if="error" class="comments__error">{{ error }}</div>
        <div v-else class="comments__list">
          <div v-if="loadingComments">Загрузка...</div>
          <div v-else>
            <Comment v-for="item in comments" :value="item" :key="item.id" />
          </div>
        </div>
        <div class="comments__footer" v-show="!loadingComments">
          <button class="comments-toggle" @click="hideComments">
            Скрыть комментарии
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Comment from "./Comment";
import { getComments, getAvatar } from "../api";

export default {
  name: "Post",
  components: {
    Comment
  },
  props: {
    value: Object
  },
  data() {
    return {
      showComments: false,
      loadingComments: false,
      comments: [],
      error: null
    };
  },
  methods: {
    async openComments() {
      this.showComments = true;
      if (this.comments.length > 0) {
        // Если комменты уже загруженны, то не запрашиваем второй раз
        return;
      }
      this.loadingComments = true;
      this.error = null;
      const comments = await getComments(this.value.id);
      if (comments.error) {
        this.error = comments.error;
        this.loadingComments = false;
        return;
      }

      this.comments = comments.data.map(item => ({
        ...item,
        image: getAvatar(40 + +item.id, 80 + +item.postId)
      }));
      this.loadingComments = false;
    },
    hideComments() {
      this.showComments = false;
    }
  }
};
</script>

<style scoped lang="scss">
.username {
  font-size: 14px;
  color: #a3a5a6;
}
.title {
  font-size: 16px;
  margin: 8px 0;
  font-weight: bold;
}
.post {
  margin-top: 20px;
  overflow-y: hidden;
  &__avatar {
    object-fit: cover;
    grid-area: avatar;
  }
  &__wrapper {
    padding: 16px;
    position: relative;
    z-index: 2;
    display: grid;
    grid-template-columns: 100px auto;
    grid-template-areas:
      "avatar info"
      "avatar body"
      "footer footer";
    grid-gap: 6px 12px;
    background-color: #e6f5ff;
    border: 1px solid #d5e5f0;
  }
  &__info {
    grid-area: info;
  }
  &__body {
    grid-area: body;
  }
  &__footer {
    grid-area: footer;
    display: flex;
    justify-content: flex-end;
  }
}
.comments-toggle {
  color: #59acff;
  cursor: pointer;
  background-color: #e6f5ff;
  padding: 4px;
  border: none;
  font-size: 16px;
}
.comments {
  padding: 0 30px;

  &__footer {
    display: flex;
    justify-content: flex-end;
  }
  &__error {
    color: red;
  }
}
.found {
  background-color: #ffe129;
}

.comments-slide {
  &-enter-active {
    transition: all 0.3s ease;
  }
  &-leave-active {
    transition: all 0.2s ease;
  }

  &-enter,
  &-leave-to {
    transform: translateY(-100%);
  }
}

@media (max-width: 600px) {
  .post__wrapper {
    grid-template-areas:
      "avatar info"
      "avatar info"
      "body body"
      "footer footer";
  }
}
</style>
