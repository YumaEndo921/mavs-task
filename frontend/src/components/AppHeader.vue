<template>
  <!-- アプリケーションの共通ヘッダー -->
  <header  v-bind:class="[isLogin ? 'headerLogin' : 'header']">
    <h1 class="header__ttl">
      <nuxt-link to="/">MemoApp</nuxt-link>
    </h1>
    <div>
      <div v-if="isLogin" class="headerLogin__link">
        <p>{{ username }}</p>
        <button type="button" @click="logout"><nuxt-link to="/">ログアウト</nuxt-link></button>
      </div>
      <div v-else class="header__link">
        <nuxt-link to="/signin">サインイン</nuxt-link>
        <nuxt-link to="/signup">新規登録</nuxt-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  computed: {
    // Tokenの有無でログインしているかどうかを判断
    isLogin() {
      return !!this.$store.state.auth.token
    },
    username() {
      return this.$store.state.auth.username
    },
  },
  methods: {
    // ログアウト処理
    logout() {
      // store/auth.jsのactionsのlogoutを実行
      this.$store.commit('auth/setToken', null)
      this.$store.commit('auth/setUsername', null)
    },
  },
  // pageReload(){
  //   if( this.isLogin === false ){
  //     this.$router.push('/')
  //     console.log("読み込まれてるのか")
  //   }
  // },
}
</script>

<style lang="scss" scoped>

.header {
  display: flex;
  justify-content: space-between;
  align-content: center;
  padding-bottom: 150px; //ログイン後値を変更
  font-size: 24px;
  &__ttl{
    padding-top: 30px;
    padding-left: 34px;
    font-size: 24px;
    font-weight: normal;
  }
  &__link{
    padding-top: 30px;
    padding-right: 34px;
    font-size: 24px;
  }
}
.headerLogin{
  display: flex;
  justify-content: space-between;
  align-content: center;
  padding-bottom: 20px; //ログイン後値を変更
  font-size: 24px;
  &__link{
    padding-top: 30px;
    padding-right: 34px;
    font-size: 24px;
  }
}
button{
  border: none;
  background: none;
}
</style>
