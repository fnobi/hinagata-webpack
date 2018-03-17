<template lang="pug">
#app
  base-style
  router-view
</template>

<script>
import BaseStyle from '@/components/BaseStyle';

export default {
  name: 'app',
  components: {
    BaseStyle,
  },
};
</script>
