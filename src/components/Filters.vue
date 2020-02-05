<template>
  <div class="filters">
    <div class="title">Фильтры</div>
    <div class="input">
      <div class="input__label">Имя/название</div>
      <input
        class="input__field"
        type="text"
        v-model="title"
        @input="inputHandler"
      />
    </div>
    <div class="input">
      <div class="input__label">Контент</div>
      <input
        class="input__field"
        type="text"
        v-model="content"
        @input="inputHandler"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Filters",
  data() {
    return {
      title: "",
      content: ""
    };
  },
  methods: {
    inputHandler() {
      this.$emit("input", { title: this.title, content: this.content });
    }
  }
};
</script>

<style scoped lang="scss">
.title {
  font-size: 20px;
  margin-bottom: 16px;
}
.input {
  & + .input {
    margin-top: 8px;
  }
  &__label {
    line-height: 1.5em;
  }
  &__field {
    width: 100%;
    padding: 4px 8px;
  }
}
</style>
