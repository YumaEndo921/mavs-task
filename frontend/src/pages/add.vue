<template>
    <div class="add">
        <h2 class="add__ttl">Memo Add</h2>
        <div class="input">
        <form class="input__form" @submit.prevent="submit">
            <InputTitle  v-model="formValue.title" />
            <Content  v-model="formValue.content" />
            <InputButton buttonName="更新" />
            <!-- <div class="input__form--box">
                <input 
                class="input__form--ttl" 
                type="text" 
                placeholder="タイトル"
                name="title"
                :value="formValue.title"
                @input="formValue.title = $event.target.value">
            </div>
            <div class="input__form--box">
                <textarea 
                class="input__form--txt" 
                name="" 
                id="" 
                cols="30" 
                rows="10"
                :value="formValue.content"
                @input="formValue.content = $event.target.value">
                </textarea>
            </div>
            <div class="input__form--box">
                <button class="input__form--btn" type="submit">保存</button>
            </div> -->
        </form>
        </div>
        <div class="add__box">
        <nuxt-link class="add__back"  to="/">戻る</nuxt-link>
        </div>
    </div>
</template>

<script>
export default {
    data() {
    return {
      formValue: {
        title: '',
        content: '',
        userId:'',
      },
    }
  },
    computed:{
        // トークンをstoreから取得
        getToken () {
            return this.$store.state.auth.token
        },
        // ログイン中のユーザーidをstoreから取得
        getUserId(){
            return this.$store.state.auth.id
        },
    },
    methods:{
      async submit() {
      //タイトルの入力確認
      if(this.formValue.title === ''){
          this.$toast.global.error({
          message: 'タイトルを入力してください。',
        })
        return
        }

      //ログイン中のuserIdをformValue格納
      this.formValue.userId = this.getUserId
      // バックエンドへAPIリクエスト
      const response = await this.$axios.post(
        `${this.$config.apiBaseUrl}/articles/add`,
        //入力された情報とユーザーidを渡す
        {params:this.formValue},
        //ヘッダーリクエストにトークン認証を渡す
        { headers: {Authorization:this.getToken} })
      //バックエンドからのresを格納
      const responseCode = response.data.body
      if (responseCode === 200) {
        // 成功
        // トップにリダイレクト
        this.$router.push('/')
      } else {
        // 失敗
        // トースト表示
        this.$toast.global.error({
          message: '新規登録できませんでした。もう一度お試しください',
        })
      }
    },
    },
}
</script>


<style lang="scss" scoped>
.add{
    display: flex;
    flex-direction: column;
    align-items: center;
    &__ttl{
        margin-bottom: 62px;
        text-align: center;
        font-size: 64px;
    }

    &__input{
        margin-bottom: 62px;
    }

    &__back{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 144px;
        height: 60px;
        margin-bottom: 350px;
        background: #D9D9D9;
        border-radius: 5px;
    }
}
.input{
    // margin: 0 15%;
    &__form{
        display: flex;
        flex-direction: column;
        // justify-content: start;
        align-items: flex-start;
        
        &--box{
            width: 100%;
            &:nth-of-type(3){
                display: flex;
                justify-content: center;
            }
        }
        &--ttl{
            width: 387px;
            height: 66px;
            margin-bottom: 53px;
            padding-left: 20px;
            font-size: 24px;
        }
        &--txt{
            width: 1025px;
            height: 276px;
            margin-bottom: 34px;
            padding-top: 20px;
            padding-left: 20px;
        }
        &--btn{
        text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 258px;
            height: 66px;
            margin-bottom: 64px;
            background: #8E8E8E;
            border: none;
            border-radius: 5px;
        }
    }

}

</style>