<template>
  <div>
    
    <!-- ログイン中 -->
      <div v-if="isLogin" class="indexLogin">
        <h2 class="indexLogin__ttl">Memo List</h2>
        <div class="indexLogin__box">
          <nuxt-link class="indexLogin__box--button" to="/add">新規作成</nuxt-link>
        </div>
        <ul class="indexLogin__table">
          <li class="indexLogin__table--list"  v-for="(item , index ) in items" :key="item.id">
            <p>{{ index + 1 }}</p>
            <button class="indexLogin__table--ttl" @click="setEdit(index)">
              <!-- <nuxt-link to="/edit" class="indexLogin__table--link"> -->
                {{ item.title }}
              <!-- </nuxt-link> -->
            </button>
            <button class="indexLogin__table--del" @click="deleteMemo(item.id,index)">削除</button>
          </li>
        </ul>
        <!-- <p>{{ posts }}</p> -->
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
    getUserId(){
    return this.$store.state.auth.id
   },
   //storeのユーザーメモ情報を変数化（配列）
    items() {
    return this.$store.state.auth.memo
  }
  },
  methods:{
    //クリックされたボタンのメモを削除
    async deleteMemo(item_id,index){
      // console.log(memo_id)
      const response = await this.$axios.$delete(
      `${this.$config.apiBaseUrl}/articles/delete`,
      { data: {
        id:item_id}})
        await this.$store.commit('auth/deleteUserMemo', index)
    },
    async setEdit(index){

      await this.$store.commit('auth/setEdit', index)
      this.$router.push('/edit')
      
    },
  },
  //ユーザーメモの取得と保存
  async fetch() {
    try {
    const response = await this.$axios.$post(
      `${this.$config.apiBaseUrl}/articles/get`,
      { params: this.getUserId })
    await this.$store.commit('auth/setUserMemo', response.body)
  } 
    catch (error) {
    // console.error('APIリクエストエラー:', error)
    return
  }
  }
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
      margin-bottom: 15px;
    }
    &--ttl{
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: 653px;
      height: 70px;
      padding-left: 10px;
      background: #D9D9D9;
      border: none;
    }
    &--link{
      display: block;
      background: #000;
    }
    &--del{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 123px;
      height: 66px;
      background: #8E8E8E;
      border: none;
      border-radius:5px;
    }

  }
}

</style>


