<template>
    <div class="edit">
        <h2 class="edit__ttl">Memo Edit</h2>
        <form class="edit__form" @submit.prevent="updateEdit()">
            <InputTitle  v-model="formValue.title" />
            <InputContent  v-model="formValue.content" />
            <InputButton buttonName="更新" />
        </form>
        <button class="edit__box" @click="resetEdit()">
            戻る
        </button>
    </div>
</template>
<script>

export default{
    data() {
    return {
      formValue: {
        title: '',
        content: '',
        memo_id:'',
      }
    }
  },
  computed: {
    // トークンをstoreから取得
    getToken () {
        return this.$store.state.auth.token
    },
    // ログイン中のユーザーidをstoreから取得
    getUserId(){
        return this.$store.state.auth.id
    },
  },
    //クリックされたメモ情報を設定
    fetch(){
    //クリックされたメモの配列番号を格納
    const memoNum = this.$store.state.auth.edit_id
    //memoNunが消えているときは空を返す
    if (memoNum === null){
        return 
    }
    //storeから特定のメモを呼び出して格納
    const memo = this.$store.state.auth.memo[memoNum]
    this.formValue.title = memo.title       // titleプロパティの値を設定
    this.formValue.content = memo.content   // contentプロパティの値を設定
    this.formValue.memo_id = memo.id        // memo_idプロパティの値を設定
  },
  methods:{
    //戻るボタンの処理
    async resetEdit(){
        //storeのメモ配列番号をリセット
        await this.$store.commit('auth/resetEdit')
        //トップにリダイレクト
        this.$router.push('/')
        },
    //更新ボタンの処理
    async updateEdit(){
        //タイトルがからの場合エラー
        if(this.formValue.title === ''){
          this.$toast.global.error({
          message: 'タイトルを入力してください。',
        })
        return
        }
        //バックエンドにAPIリクエスト
        const response = await this.$axios.$put(
        `${this.$config.apiBaseUrl}/articles/update`,
        this.formValue)
        //storeのメモ配列番号をリセット
        await this.$store.commit('auth/resetEdit')
        //トップにリダイレクト
        this.$router.push('/')
        },
    }
}
</script>

<style lang="scss" scoped>
.edit{

    display: flex;
    flex-direction: column;
    align-items: center;
    &__ttl{
        margin-bottom: 62px;
        text-align: center;
        font-size: 64px;
    }
    &__form{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    &__box{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 144px;
        height: 60px;
        margin-bottom: 350px;
        background: #D9D9D9;
        border-radius: 5px;
        border: none;
    }
}


</style>