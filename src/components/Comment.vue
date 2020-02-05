<template>
  <div class="comment">
    <div class="comment__wrapper">
      <img
        class="comment__avatar"
        :src="value.image"
        alt=""
        width="40"
        height="80"
      />
      <div class="comment__info">
        <div class="comment__name">
          {{ value.name }}
          <span class="comment__after-name">промурчал</span>
        </div>
        <div class="comment__body">{{ value.body }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Comment",
  props: {
    value: Object
  }
};
</script>

<style scoped lang="scss">
.comment {
  margin-top: -1px;
  background-color: #e6f5ff;
  border: 1px solid #d5e5f0;
  padding: 8px 16px;
  &__avatar {
    object-fit: cover;
    flex-shrink: 0;
  }
  &__wrapper {
    display: flex;
  }
  &__info {
    margin-left: 16px;
  }
  &__name {
    font-weight: bold;
    margin-bottom: 8px;
  }
  &__after-name {
    font-weight: 300;
    font-size: 12px;
    color: #a4aaad;
  }
}
</style>
