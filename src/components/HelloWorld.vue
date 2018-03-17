<template lang="pug">
.hello-world(@click="msg += '!'") {{msg}}
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
