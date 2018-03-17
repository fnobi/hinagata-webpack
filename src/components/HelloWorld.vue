<template lang="pug">
.hello-world(@click="handleClick") {{msg}}
</template>

<script>
export default {
  name: 'hello-world',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
  methods: {
    handleClick() {
      this.msg += '!';
    },
  },
};
</script>

<style lang="scss" scoped>
@import 'config';
.hello-world {
  padding: 1em;
  @include sp-layout {
    background-color: #888;
    color: #fff;
  }
  @include pc-layout {
    background-color: #eee;
  }
}
</style>
