<template>
  <div>
    
    <!-- ログイン中 -->
      <div v-if="isLogin" class="indexLogin">
        <h2 class="indexLogin__ttl">Memo List</h2>
        <div class="indexLogin__box">
          <nuxt-link class="indexLogin__box--button" to="/add">新規作成</nuxt-link>
        </div>
        <ul class="indexLogin__table">
          <li class="indexLogin__table--list">
              <nuxt-link class="indexLogin__table--ttl" to="/edit">サンプルタイトル</nuxt-link>
            <div class="indexLogin__table--del">削除</div>
          </li>
        </ul>
      </div>
    <!-- ログイン前 -->
      <div v-else class="index">
        <h2 class="index__ttl">Memo App</h2>
        <div class="index__box">
          <nuxt-link class="index__box--button" to="/signin">サインイン</nuxt-link>
          <nuxt-link class="index__box--button" to="/signup">新規登録</nuxt-link>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
  computed: {
    // Tokenの有無でログインしているかどうかを判断
    isLogin() {
      return !!this.$store.state.auth.token
    },
  },
}
</script>

<style lang="scss" scoped>
//ログイン前のcss
.index{
  &__ttl{
    padding-bottom: 133px;
    text-align: center;
    font-size: 64px;
  }
  &__box{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap:50px;
    text-align: center;
    &--button{
      width: 240px;
      height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #D9D9D9;
    }
  }
}
//ログイン後のcss
.indexLogin{
  &__ttl{
    padding-bottom: 62px;
    text-align: center;
    font-size: 64px;
  }
  &__box{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap:50px;
    padding-bottom: 117px;
    text-align: center;
    &--button{
      width: 240px;
      height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #D9D9D9;
    }
  }
  &__table{
    text-align: center;
    &--list{
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 64px;
    }
    &--ttl{
      display: flex;
      justify-content: start;
      align-items: center;
      width: 653px;
      height: 70px;
      padding-left: 10px;
      background: #D9D9D9;
    }
    &--del{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 123px;
      height: 66px;
      background: #8E8E8E;
      border-radius:5px;
    }

  }
}

</style>


