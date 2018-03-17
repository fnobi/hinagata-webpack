<template lang="pug">
div
  .login--loading(v-if="isAuthLoading")
    p loading...
  .login--signin(v-else-if="!user")
    button(v-on:click="signIn") googleアカウントでログイン
  template(v-else)
    slot
</template>

<style lang="scss" scoped>
.login {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.login--loading,
.login--signin {
  @extend .login;
}
</style>

<script>
export default {
  name: 'login',
  data() {
    return {
      user: null,
      isAuthLoading: true,
    };
  },
  methods: {
    signIn() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithRedirect(provider);
    },
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      this.user = user;
      this.isAuthLoading = false;
    });
    firebase.auth().getRedirectResult();
  },
};
</script>
