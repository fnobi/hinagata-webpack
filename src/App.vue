<template lang="pug">
#app
  base-style
  login
    router-view
</template>

<script>
import BaseStyle from '@/components/BaseStyle';
import Login from '@/components/Login';

export default {
  name: 'app',
  components: {
    BaseStyle,
    Login,
  },
};
</script>
