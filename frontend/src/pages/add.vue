<template>
    <div class="add">
        <h2 class="add__ttl">Memo Add</h2>
            <!-- <inputMemo send="保存" class="add__input" @parent-event="submit" /> -->
            <div class="input">
        <form class="input__form" @submit.prevent="submit">
            <div class="input__form--box">
                <input 
                class="input__form--ttl" 
                type="text" 
                placeholder="タイトル"
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
            </div>
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
        getToken () {
            return this.$store.state.auth.token
        },
        getUserId(){
            return this.$store.state.auth.id
        },
    },
    methods:{
        async submit() {
      //ログイン中のuserIdをformValue格納
      this.formValue.userId = this.getUserId

      //バックエンドへ送る内容を確認
      console.log('this.formValue', this.formValue)

      // axiosで新規登録処理
      const response = await this.$axios.post(
        `${this.$config.apiBaseUrl}/articles/add`,
        {params:this.formValue},
        { headers: {Authorization:this.getToken} })

         console.log('サインアップAPI結果', response)

      const responseCode = 200 // 404
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

//   computed: {
//    getToken () {
//      return this.$store.state
//    }
//  },
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